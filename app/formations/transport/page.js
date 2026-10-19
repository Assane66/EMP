import Image from 'next/image';
import Link from 'next/link';
import styles from '../pole.module.css';

export const metadata = {
  title: 'Formation Transport, Transit, Logistique & Commerce International',
  description:
    "Formez-vous aux métiers du transport et du commerce mondial à l'EMP : transit douanier, logistique, commerce international. Certifications CS, BT, BEP ou BTS. Tivaouane Peulh.",
};

const formations = [
  {
    id: 'transit',
    name: 'Transit',
    icon: '🛂',
    description:
      "Maîtrisez les procédures douanières et de transit : documents requis, réglementation en vigueur, calcul des droits et taxes, et suivi des marchandises. Une expertise très recherchée dans les ports et zones logistiques.",
    competences: [
      'Procédures douanières sénégalaises',
      'Documents de transit (connaissement, lettre de voiture)',
      'Calcul des droits de douane et taxes',
      'Nomenclature douanière (HS Codes)',
      'Systèmes informatiques douaniers',
      'Régimes douaniers spéciaux',
    ],
    debouches: ['Agent transit', 'Déclarant en douane', 'Agent douanier', 'Commissionnaire en douane'],
  },
  {
    id: 'logistique',
    name: 'Transport & Logistique',
    icon: '🚛',
    description:
      "Gérez la chaîne d'approvisionnement de bout en bout : planification du transport, gestion d'entrepôt, suivi des stocks et optimisation des flux de marchandises. Un secteur en pleine expansion en Afrique.",
    competences: [
      'Gestion de la chaîne d\'approvisionnement',
      'Planification et suivi du transport',
      'Gestion des entrepôts et des stocks',
      'Optimisation des flux logistiques',
      'Outils de gestion logistique (WMS/TMS)',
      'Sécurité et conformité transport',
    ],
    debouches: ['Logisticien', 'Responsable entrepôt', 'Agent de fret', 'Coordinateur transport'],
  },
  {
    id: 'commerce',
    name: 'Commerce International',
    icon: '🌍',
    description:
      "Apprenez les techniques du commerce mondial : Incoterms, contrats internationaux, modes de paiement, couverture des risques et développement de marchés à l'export. Ouvrez vos perspectives au-delà des frontières.",
    competences: [
      'Incoterms et contrats commerciaux',
      'Techniques de négociation internationale',
      'Modes de paiement (crédit documentaire)',
      'Couverture des risques export/import',
      'Développement des marchés étrangers',
      'Réglementation du commerce international',
    ],
    debouches: ['Agent commercial export/import', 'Chargé d\'affaires international', 'Responsable achats internationaux', 'Négociateur commercial'],
  },
];

const certifications = ['CS — Certificat de Spécialité', 'BT — Brevet de Technicien', 'BEP — Brevet d\'Études Professionnelles', 'BTS — Brevet de Technicien Supérieur'];

export default function TransportPage() {
  return (
    <>
      <div className={styles.poleHero} style={{ '--pole-color': '#10b981' }}>
        <div className={styles.poleHeroMedia}>
          <Image
            src="/transport.png"
            alt="Étudiants en formation transport, logistique et commerce international à l'EMP"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.poleHeroOverlay} />
        </div>
        <div className={`${styles.poleHeroContent} container`}>
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="sep">›</span>
            <Link href="/formations">Formations</Link>
            <span className="sep">›</span>
            <span>Transport & Commerce</span>
          </nav>
          <div className={styles.poleHeroBadge}>🚢 Pôle Transport & Commerce</div>
          <h1>Transit, Transport & Commerce International</h1>
          <p className={styles.poleHeroDesc}>
            Transit · Transport & Logistique · Commerce International
          </p>
          <p className={styles.poleHeroText}>
            Entrez dans les métiers du commerce mondial et de la logistique. Des formations pointues pour maîtriser la chaîne d'approvisionnement, les procédures douanières et les échanges internationaux.
          </p>
          <div className={styles.poleHeroCtas}>
            <Link href="/admissions" className="btn btn-primary btn-lg" id="transport-inscription-btn">
              Faire une demande d'admission
            </Link>
            <a
              href="https://wa.me/221707851555?text=Bonjour%20EMP%2C%20je%20souhaite%20des%20informations%20sur%20les%20formations%20en%20transit%2C%20logistique%20et%20commerce%20international."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Poser une question
            </a>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <p className="pre-title">Nos filières</p>
            <h2>3 formations en Transport & Commerce</h2>
            <p>Des formations qui ouvrent des débouchés au Sénégal comme à l'international.</p>
          </div>
          <div className={styles.formationsGrid}>
            {formations.map((f) => (
              <div key={f.id} className={styles.formationCard}>
                <div className={styles.formationIcon}>{f.icon}</div>
                <h3 className={styles.formationTitle}>{f.name}</h3>
                <p className={styles.formationDesc}>{f.description}</p>
                <div className={styles.competences}>
                  <h4 className={styles.competencesTitle}>Compétences acquises</h4>
                  <ul className={styles.competencesList}>
                    {f.competences.map((c) => (
                      <li key={c}><span className={styles.checkIcon}>✓</span>{c}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.debouches}>
                  <h4 className={styles.debouchesTitle}>Débouchés</h4>
                  <div className={styles.debouchesTags}>
                    {f.debouches.map((d) => (
                      <span key={d} className="pill">{d}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.certsBar} section-sm`}>
        <div className="container">
          <div className={styles.certsBarInner}>
            <div>
              <h3 className={styles.certsBarTitle}>Certifications disponibles</h3>
              <p className={styles.certsBarDesc}>Les niveaux exacts seront confirmés lors de l'admission.</p>
            </div>
            <div className={styles.certsBarList}>
              {certifications.map((c) => (
                <div key={c} className={styles.certBadge}>{c}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.poleCtaSection}>
        <div className="container">
          <div className={styles.poleCtaInner}>
            <h2 className={styles.poleCtaTitle}>Intéressé par la formation Transport & Commerce ?</h2>
            <p className={styles.poleCtaDesc}>Contactez-nous pour en savoir plus sur les conditions d'admission, les durées et les tarifs.</p>
            <div className={styles.poleCtaBtns}>
              <Link href="/admissions" className="btn btn-primary btn-lg" id="transport-cta-btn">
                Demander une inscription
              </Link>
              <a
                href="https://wa.me/221707851555?text=Bonjour%20EMP%2C%20je%20souhaite%20des%20informations%20sur%20les%20formations%20en%20transit%2C%20logistique%20et%20commerce%20international."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Nous écrire sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
