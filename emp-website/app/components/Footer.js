'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('2026');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <div className={styles.logo}>
                <Image
                  src="/logo.png"
                  alt="Logo EMP"
                  width={46}
                  height={46}
                  className={styles.logoImg}
                />
                <div>
                  <div className={styles.logoTitle}>EMP</div>
                  <div className={styles.logoSub}>École des Métiers Professionnels</div>
                </div>
              </div>
              <p className={styles.tagline}>
                Apprendre un métier. Construire son avenir.
              </p>
              <a
                href="https://wa.me/221707851555?text=Bonjour%20EMP%2C%20je%20souhaite%20obtenir%20des%20informations%20sur%20vos%20formations%20et%20les%20conditions%20d%27inscription."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
                aria-label="Contacter l'EMP sur WhatsApp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Nous contacter sur WhatsApp
              </a>
            </div>

            {/* Formations */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Formations</h4>
              <ul className={styles.links}>
                <li><Link href="/formations/hotellerie">Hôtellerie</Link></li>
                <li><Link href="/formations/hotellerie">Pâtisserie & Boulangerie</Link></li>
                <li><Link href="/formations/hotellerie">Cuisine professionnelle</Link></li>
                <li><Link href="/formations/informatique">Bureautique & Infographie</Link></li>
                <li><Link href="/formations/informatique">Développement web & mobile</Link></li>
                <li><Link href="/formations/informatique">Marketing digital</Link></li>
                <li><Link href="/formations/transport">Transit & Transport</Link></li>
                <li><Link href="/formations/transport">Commerce international</Link></li>
              </ul>
            </div>

            {/* Liens utiles */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>L'école</h4>
              <ul className={styles.links}>
                <li><Link href="/a-propos">À propos de l'EMP</Link></li>
                <li><Link href="/admissions">Admissions & Bourse</Link></li>
                <li><Link href="/contact">Contact & Localisation</Link></li>
                <li><Link href="/mentions-legales">Mentions légales</Link></li>
                <li><Link href="/mentions-legales#confidentialite">Politique de confidentialité</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Coordonnées</h4>
              <ul className={styles.contactList}>
                <li>
                  <span className={styles.contactIcon}>📍</span>
                  <span>Cité APIX, îlot 4, Villa 1863,<br />Tivaouane Peulh, Sénégal</span>
                </li>
                <li>
                  <span className={styles.contactIcon}>📞</span>
                  <a href="tel:+221775230945">77 523 09 45</a>
                </li>
                <li>
                  <span className={styles.contactIcon}>💬</span>
                  <a href="https://wa.me/221707851555" target="_blank" rel="noopener noreferrer">70 785 15 55 (WhatsApp)</a>
                </li>
                <li>
                  <span className={styles.contactIcon}>📠</span>
                  <span>33 972 98 38 (Fax)</span>
                </li>
              </ul>
              <div className={styles.certs}>
                <span className={styles.cert}>CS</span>
                <span className={styles.cert}>BT</span>
                <span className={styles.cert}>BEP</span>
                <span className={styles.cert}>BTS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copy}>
              © {currentYear} EMP — École des Métiers Professionnels. Tous droits réservés.
            </p>
            <div className={styles.bottomLinks}>
              <Link href="/mentions-legales">Mentions légales</Link>
              <span>·</span>
              <Link href="/mentions-legales#confidentialite">Confidentialité</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
