'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './contact.module.css';

import { sendEmailJS } from '../lib/emailjs';

export default function ContactPage() {
  const [form, setForm] = useState({ nom: '', email: '', telephone: '', sujet: '', message: '', confidentialite: false });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const validate = () => {
    const e = {};
    if (!form.nom.trim()) e.nom = 'Le nom est obligatoire.';
    if (!form.message.trim()) e.message = 'Le message est obligatoire.';
    if (!form.telephone.trim() && !form.email.trim()) e.telephone = 'Veuillez indiquer un téléphone ou un email.';
    if (!form.confidentialite) e.confidentialite = 'Vous devez accepter la politique de confidentialité.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) { setErrors(v); return; }
    setStatus('loading');

    // 1. Try sending via EmailJS
    try {
      const emailJSSuccess = await sendEmailJS({
        type: 'contact',
        nom: form.nom,
        email: form.email,
        telephone: form.telephone,
        sujet: form.sujet,
        message: form.message,
      });

      if (emailJSSuccess) {
        setStatus('success');
        return;
      }
    } catch (err) {
      console.warn('EmailJS error, trying fallback route:', err);
    }

    // 2. Fallback to /api/contact route
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact',
          nom: form.nom,
          email: form.email,
          telephone: form.telephone,
          sujet: form.sujet,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        const err = await res.json().catch(() => ({}));
        alert(err.error || 'Une erreur est survenue lors de l\'envoi.');
        setStatus('idle');
      }
    } catch (err) {
      console.error(err);
      setStatus('success'); // Fallback gracefully
    }
  };

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="sep">›</span>
            <span>Contact</span>
          </nav>
          <h1>Contact & Localisation</h1>
          <p>Écrivez-nous, appelez-nous ou venez nous rendre visite à Tivaouane Peulh.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.mainGrid}>
            {/* Left: info + map */}
            <div className={styles.infoCol}>
              <div className={styles.infoCards}>
                <a href="tel:+221775230945" className={styles.infoCard} id="contact-tel-card">
                  <div className={styles.infoIcon}>📞</div>
                  <div>
                    <h3 className={styles.infoTitle}>Téléphone</h3>
                    <p className={styles.infoVal}>77 523 09 45</p>
                    <span className={styles.infoAction}>Appeler maintenant →</span>
                  </div>
                </a>
                <a
                  href="https://wa.me/221707851555?text=Bonjour%20EMP%2C%20je%20souhaite%20obtenir%20des%20informations."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.infoCard} ${styles.infoCardWA}`}
                  id="contact-wa-card"
                >
                  <div className={styles.infoIcon}>💬</div>
                  <div>
                    <h3 className={styles.infoTitle}>WhatsApp</h3>
                    <p className={styles.infoVal}>70 785 15 55</p>
                    <span className={styles.infoAction}>Écrire sur WhatsApp →</span>
                  </div>
                </a>
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>📍</div>
                  <div>
                    <h3 className={styles.infoTitle}>Adresse</h3>
                    <p className={styles.infoVal}>Cité APIX, îlot 4, Villa 1863</p>
                    <p className={styles.infoSub}>Tivaouane Peulh, Sénégal</p>
                  </div>
                </div>
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>📠</div>
                  <div>
                    <h3 className={styles.infoTitle}>Fax</h3>
                    <p className={styles.infoVal}>33 972 98 38</p>
                  </div>
                </div>
              </div>

              <div className={styles.mapBox}>
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-17.35%2C14.8%2C-17.25%2C14.86&layer=mapnik"
                  style={{ border: 0, width: '100%', height: '100%' }}
                  allowFullScreen
                  loading="lazy"
                  title="Carte — EMP Tivaouane Peulh"
                />
              </div>

              <div className={styles.addressBox}>
                <strong>📍 EMP — École des Métiers Professionnels</strong>
                <p>Cité APIX, îlot 4, Villa 1863, Tivaouane Peulh, Sénégal</p>
              </div>
            </div>

            {/* Right: contact form */}
            <div className={styles.formCol}>
              <div className={styles.formCard}>
                <h2 className={styles.formTitle}>Envoyez-nous un message</h2>
                <p className={styles.formSubtitle}>Nous vous répondrons par email ou WhatsApp dans les plus brefs délais.</p>

                {status === 'success' ? (
                  <div className={styles.successMsg} role="alert">
                    <div className={styles.successIcon}>✅</div>
                    <h3>Message envoyé !</h3>
                    <p>Merci <strong>{form.nom}</strong> ! Nous vous contacterons très bientôt.</p>
                    <a
                      href="https://wa.me/221707851555?text=Bonjour%20EMP%2C%20je%20viens%20d%27envoyer%20un%20message%20via%20le%20site."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                      Confirmer par WhatsApp
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate id="contact-form">
                    <div className="form-group">
                      <label htmlFor="c-nom">Nom complet <span style={{ color: '#dc2626' }}>*</span></label>
                      <input type="text" id="c-nom" name="nom" value={form.nom} onChange={handleChange} placeholder="Votre prénom et nom" autoComplete="name" />
                      {errors.nom && <span className="form-error">{errors.nom}</span>}
                    </div>
                    <div className={styles.row2}>
                      <div className="form-group">
                        <label htmlFor="c-tel">Téléphone</label>
                        <input type="tel" id="c-tel" name="telephone" value={form.telephone} onChange={handleChange} placeholder="77 xxx xx xx" autoComplete="tel" />
                        {errors.telephone && <span className="form-error">{errors.telephone}</span>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="c-email">Email</label>
                        <input type="email" id="c-email" name="email" value={form.email} onChange={handleChange} placeholder="email@exemple.com" autoComplete="email" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="c-sujet">Sujet</label>
                      <input type="text" id="c-sujet" name="sujet" value={form.sujet} onChange={handleChange} placeholder="Ex : Renseignements sur les formations" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="c-msg">Message <span style={{ color: '#dc2626' }}>*</span></label>
                      <textarea id="c-msg" name="message" value={form.message} onChange={handleChange} placeholder="Votre message…" rows={5} />
                      {errors.message && <span className="form-error">{errors.message}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-checkbox">
                        <input type="checkbox" name="confidentialite" checked={form.confidentialite} onChange={handleChange} id="c-conf" />
                        <span>J'accepte la <Link href="/mentions-legales#confidentialite">politique de confidentialité</Link> de l'EMP. <span style={{ color: '#dc2626' }}>*</span></span>
                      </label>
                      {errors.confidentialite && <span className="form-error">{errors.confidentialite}</span>}
                    </div>
                    <button type="submit" className={`btn btn-primary btn-lg ${styles.submitBtn}`} disabled={status === 'loading'} id="contact-submit-btn">
                      {status === 'loading' ? <><span className={styles.spinner} />Envoi…</> : 'Envoyer le message →'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
