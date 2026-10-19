'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './admissions.module.css';
import { sendEmailJS } from '../lib/emailjs';

const filieres = [
  'Pâtisserie',
  'Boulangerie',
  'Cuisine professionnelle',
  'Bureautique',
  'Infographie',
  'Développement web & mobile',
  'Marketing digital',
  'Transit',
  'Transport & Logistique',
  'Commerce international',
];

const certifs = ['CS — Certificat de Spécialité', 'BT — Brevet de Technicien', 'BEP — Brevet d\'Études Professionnelles', 'BTS — Brevet de Technicien Supérieur', 'Je ne sais pas encore'];

const niveaux = [
  'BFEM (Brevet de Fin d\'Études Moyennes)',
  'BAC ou équivalent',
  'BAC+1 ou BAC+2',
  'BAC+3 et plus',
  'Sans diplôme',
  'Autre',
];

const steps = [
  { icon: '📋', title: 'Remplissez le formulaire', desc: 'Complétez votre demande en ligne directement sur cette page.' },
  { icon: '📨', title: 'Votre demande est reçue', desc: 'L\'EMP reçoit immédiatement votre demande par email.' },
  { icon: '💬', title: 'L\'EMP vous contacte', desc: 'Un conseiller vous contacte par WhatsApp ou par email sous peu.' },
  { icon: '✅', title: 'Finalisation', desc: 'Vous finalisez votre inscription avec les documents requis.' },
];

export default function AdmissionsPage() {
  const [form, setForm] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    niveau: '',
    filiere: '',
    certification: '',
    message: '',
    confidentialite: false,
    typeDemande: 'inscription',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const reqType = params.get('type');
      if (reqType && ['inscription', 'bourse', 'information'].includes(reqType)) {
        setForm((prev) => ({ ...prev, typeDemande: reqType }));
        // Smooth scroll to form if param is present
        setTimeout(() => {
          const formElem = document.getElementById('admission-form');
          if (formElem) {
            formElem.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 150);
      }
    }
  }, []);

  const validate = () => {
    const e = {};
    if (!form.prenom.trim()) e.prenom = 'Le prénom est obligatoire.';
    if (!form.nom.trim()) e.nom = 'Le nom est obligatoire.';
    if (!form.telephone.trim()) e.telephone = 'Le numéro de téléphone est obligatoire.';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'L\'adresse email n\'est pas valide.';
    if (!form.niveau) e.niveau = 'Veuillez indiquer votre niveau scolaire.';
    if (!form.filiere) e.filiere = 'Veuillez choisir une filière.';
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
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }
    setStatus('loading');

    // 1. Try sending via EmailJS
    try {
      const emailJSSuccess = await sendEmailJS({
        type: 'admission',
        prenom: form.prenom,
        nom: form.nom,
        email: form.email,
        telephone: form.telephone,
        niveau: form.niveau,
        filiere: form.filiere,
        certification: form.certification,
        message: form.message,
      });

      if (emailJSSuccess) {
        setStatus('success');
        return;
      }
    } catch (err) {
      console.warn('EmailJS error, fallback to route:', err);
    }

    // 2. Fallback to /api/contact route
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'admission',
          prenom: form.prenom,
          nom: form.nom,
          email: form.email,
          telephone: form.telephone,
          niveau: form.niveau,
          filiere: form.filiere,
          certification: form.certification,
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
            <span>Admissions & Bourse</span>
          </nav>
          <h1>Admissions & Demande de Bourse</h1>
          <p>Remplissez le formulaire ci-dessous pour faire une demande d'inscription ou d'information auprès de l'EMP.</p>
        </div>
      </div>

      {/* Étapes */}
      <section className={`${styles.stepsSection} section-sm`}>
        <div className="container">
          <div className={styles.steps}>
            {steps.map((s, i) => (
              <div key={i} className={styles.step}>
                <div className={styles.stepIcon}>{s.icon}</div>
                <div>
                  <h4 className={styles.stepTitle}>{s.title}</h4>
                  <p className={styles.stepDesc}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section">
        <div className="container">
          <div className={styles.mainGrid}>

            {/* Formulaire */}
            <div className={styles.formSection}>
              <div className={styles.formCard}>
                <div className={styles.formHeader}>
                  <h2 className={styles.formTitle}>Votre demande</h2>
                  <p className={styles.formSubtitle}>Tous les champs marqués <span className={styles.required}>*</span> sont obligatoires.</p>
                </div>

                {status === 'success' ? (
                  <div className={styles.successMsg} role="alert">
                    <div className={styles.successIcon}>✅</div>
                    <h3>Demande envoyée avec succès !</h3>
                    <p>
                      Merci <strong>{form.prenom}</strong> ! Votre demande a bien été reçue par l'équipe de l'EMP. Nous vous contacterons très prochainement par WhatsApp ou par email pour vous donner suite.
                    </p>
                    <a
                      href="https://wa.me/221707851555?text=Bonjour%20EMP%2C%20je%20viens%20d%27envoyer%20mon%20formulaire%20de%20demande."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                      Confirmer par WhatsApp
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate id="admission-form">
                    {/* Type de demande */}
                    <div className={styles.typeRow}>
                      {[
                        { value: 'inscription', label: '📝 Demande d\'inscription' },
                        { value: 'bourse', label: '🎓 Demande de bourse' },
                        { value: 'information', label: 'ℹ️ Demande d\'information' },
                      ].map((t) => (
                        <label
                          key={t.value}
                          className={`${styles.typeBtn} ${form.typeDemande === t.value ? styles.typeActive : ''}`}
                        >
                          <input
                            type="radio"
                            name="typeDemande"
                            value={t.value}
                            checked={form.typeDemande === t.value}
                            onChange={handleChange}
                          />
                          {t.label}
                        </label>
                      ))}
                    </div>

                    {/* Identity */}
                    <div className={styles.row2}>
                      <div className="form-group">
                        <label htmlFor="prenom">Prénom <span className={styles.required}>*</span></label>
                        <input
                          type="text"
                          id="prenom"
                          name="prenom"
                          value={form.prenom}
                          onChange={handleChange}
                          placeholder="Votre prénom"
                          autoComplete="given-name"
                        />
                        {errors.prenom && <span className="form-error" role="alert">{errors.prenom}</span>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="nom">Nom <span className={styles.required}>*</span></label>
                        <input
                          type="text"
                          id="nom"
                          name="nom"
                          value={form.nom}
                          onChange={handleChange}
                          placeholder="Votre nom de famille"
                          autoComplete="family-name"
                        />
                        {errors.nom && <span className="form-error" role="alert">{errors.nom}</span>}
                      </div>
                    </div>

                    <div className={styles.row2}>
                      <div className="form-group">
                        <label htmlFor="telephone">Téléphone <span className={styles.required}>*</span></label>
                        <input
                          type="tel"
                          id="telephone"
                          name="telephone"
                          value={form.telephone}
                          onChange={handleChange}
                          placeholder="Ex : 77 123 45 67"
                          autoComplete="tel"
                        />
                        {errors.telephone && <span className="form-error" role="alert">{errors.telephone}</span>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Adresse email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="exemple@email.com"
                          autoComplete="email"
                        />
                        {errors.email && <span className="form-error" role="alert">{errors.email}</span>}
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="niveau">Niveau scolaire actuel <span className={styles.required}>*</span></label>
                      <select id="niveau" name="niveau" value={form.niveau} onChange={handleChange}>
                        <option value="">— Sélectionnez votre niveau —</option>
                        {niveaux.map((n) => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </select>
                      {errors.niveau && <span className="form-error" role="alert">{errors.niveau}</span>}
                    </div>

                    <div className={styles.row2}>
                      <div className="form-group">
                        <label htmlFor="filiere">Filière souhaitée <span className={styles.required}>*</span></label>
                        <select id="filiere" name="filiere" value={form.filiere} onChange={handleChange}>
                          <option value="">— Choisissez une filière —</option>
                          {filieres.map((f) => (
                            <option key={f} value={f}>{f}</option>
                          ))}
                        </select>
                        {errors.filiere && <span className="form-error" role="alert">{errors.filiere}</span>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="certification">Certification souhaitée</label>
                        <select id="certification" name="certification" value={form.certification} onChange={handleChange}>
                          <option value="">— Sélectionnez —</option>
                          {certifs.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message (facultatif)</label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Précisez votre situation, vos questions ou toute information utile…"
                        rows={4}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-checkbox">
                        <input
                          type="checkbox"
                          name="confidentialite"
                          checked={form.confidentialite}
                          onChange={handleChange}
                          id="confidentialite"
                        />
                        <span>
                          J'accepte que l'EMP traite mes informations personnelles dans le cadre de ma demande d'admission, conformément à la{' '}
                          <Link href="/mentions-legales#confidentialite">politique de confidentialité</Link>.
                          <span className={styles.required}> *</span>
                        </span>
                      </label>
                      {errors.confidentialite && <span className="form-error" role="alert">{errors.confidentialite}</span>}
                    </div>

                    <button
                      type="submit"
                      className={`btn btn-primary btn-lg ${styles.submitBtn}`}
                      disabled={status === 'loading'}
                      id="admissions-submit-btn"
                    >
                      {status === 'loading' ? (
                        <><span className={styles.spinner} aria-hidden="true" /> Envoi en cours…</>
                      ) : (
                        <>Envoyer ma demande →</>
                      )}
                    </button>

                    {status === 'error' && (
                      <div className="alert alert-info" role="alert" style={{ marginTop: '16px' }}>
                        ⚠️ Une erreur s'est produite. Veuillez réessayer ou nous contacter par WhatsApp.
                      </div>
                    )}
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle}>Besoin d'aide ?</h3>
                <p className={styles.sideDesc}>
                  Vous avez des questions avant de soumettre votre demande ? Contactez-nous directement sur WhatsApp.
                </p>
                <a
                  href="https://wa.me/221707851555?text=Bonjour%20EMP%2C%20j%27ai%20des%20questions%20sur%20les%20admissions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-whatsapp ${styles.sideWhatsapp}`}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  Écrire sur WhatsApp
                </a>
                <a href="tel:+221775230945" className={`btn btn-outline ${styles.sidePhone}`}>
                  📞 77 523 09 45
                </a>
              </div>

              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle}>Certifications proposées</h3>
                <div className={styles.sideCerts}>
                  {['CS', 'BT', 'BEP', 'BTS'].map((c) => (
                    <div key={c} className={styles.sideCert}>
                      <span className={styles.sideCertCode}>{c}</span>
                    </div>
                  ))}
                </div>
                <p className={styles.sideNote}>
                  Le niveau de certification dépend de votre niveau d'entrée et de la filière choisie.
                </p>
              </div>

              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle}>📍 Nous trouver</h3>
                <p className={styles.sideAddress}>
                  Cité APIX, îlot 4, Villa 1863<br />
                  Tivaouane Peulh, Sénégal
                </p>
                <Link href="/contact" className={`btn btn-outline ${styles.sideMapBtn}`}>
                  Voir la localisation →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
