import Link from 'next/link';
import styles from './apropos.module.css';

export const metadata = {
  title: 'À propos de l\'EMP',
  description:
    "Découvrez l'École des Métiers Professionnels : notre mission, nos valeurs, nos formateurs et notre engagement envers la formation professionnelle au Sénégal.",
};

const valeurs = [
  { icon: '🎯', title: 'Excellence pratique', desc: 'Nous privilégions l\'apprentissage par la pratique. Chaque formation est conçue pour préparer directement à l\'emploi.' },
  { icon: '🤝', title: 'Proximité', desc: 'Nos formateurs accompagnent chaque élève de façon personnalisée tout au long de son parcours.' },
  { icon: '🌱', title: 'Ambition', desc: 'Nous croyons en le potentiel de chaque élève et nous l\'aidons à réaliser son projet professionnel.' },
  { icon: '🏆', title: 'Qualité', desc: 'Les formations de l\'EMP mènent à des certifications reconnues : CS, BT, BEP et BTS.' },
  { icon: '📍', title: 'Ancrage local', desc: 'Situés à Tivaouane Peulh, nous formons des professionnels enracinés dans leur réalité locale et ouverts sur le monde.' },
  { icon: '🔓', title: 'Accessibilité', desc: 'L\'EMP s\'engage à rendre la formation professionnelle accessible au plus grand nombre d\'élèves.' },
];

export default function AProposPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="sep">›</span>
            <span>À propos</span>
          </nav>
          <h1>À propos de l'EMP</h1>
          <p>Découvrez qui nous sommes, ce qui nous anime et pourquoi nous nous engageons chaque jour pour la formation professionnelle.</p>
        </div>
      </div>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionContent}>
              <div className="section-header">
                <p className="pre-title">Notre mission</p>
                <h2>Former les professionnels de demain</h2>
                <div className="divider" />
              </div>
              <p className={styles.missionText}>
                L'<strong>EMP — École des Métiers Professionnels</strong> est une école de formation professionnelle établie à <strong>Tivaouane Peulh, Sénégal</strong>. Notre mission est de proposer des formations concrètes, pratiques et certifiées dans des secteurs porteurs d'emploi.
              </p>
              <p className={styles.missionText}>
                Nous formons des professionnels compétents dans trois grands domaines : l'<strong>hôtellerie et la restauration</strong>, l'<strong>informatique et le numérique</strong>, ainsi que le <strong>transport, la logistique et le commerce international</strong>.
              </p>
              <p className={styles.missionText}>
                Notre approche pédagogique met l'accent sur la pratique, l'encadrement personnalisé et l'acquisition de compétences directement valorisables sur le marché du travail au Sénégal et dans le monde.
              </p>
              <div className={styles.missionSlogan}>
                <blockquote>
                  « Apprendre un métier. Construire son avenir. »
                </blockquote>
              </div>
            </div>
            <div className={styles.missionStats}>
              <div className={styles.statBox}>
                <span className={styles.statNum}>3</span>
                <span className={styles.statLabel}>Pôles de formation</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNum}>10</span>
                <span className={styles.statLabel}>Filières professionnelles</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNum}>4</span>
                <span className={styles.statLabel}>Certifications : CS, BT, BEP, BTS</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNum}>📍</span>
                <span className={styles.statLabel}>Tivaouane Peulh, Sénégal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className={`${styles.valeursSection} section`}>
        <div className="container">
          <div className="section-header text-center">
            <p className="pre-title">Nos valeurs</p>
            <h2>Ce qui nous guide au quotidien</h2>
          </div>
          <div className={styles.valeursGrid}>
            {valeurs.map((v) => (
              <div key={v.title} className={styles.valeurCard}>
                <div className={styles.valeurIcon}>{v.icon}</div>
                <h3 className={styles.valeurTitle}>{v.title}</h3>
                <p className={styles.valeurDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localisation */}
      <section className={`${styles.locSection} section`}>
        <div className="container">
          <div className={styles.locInner}>
            <div className={styles.locContent}>
              <div className="section-header">
                <p className="pre-title">Nous trouver</p>
                <h2>Situés à Tivaouane Peulh</h2>
                <div className="divider" />
              </div>
              <p>L'EMP est facilement accessible depuis Dakar et la région de Thiès. Venez nous rendre visite pour discuter de votre projet professionnel.</p>
              <div className={styles.locDetails}>
                <div className={styles.locItem}>
                  <span className={styles.locIcon}>📍</span>
                  <div>
                    <strong>Adresse</strong>
                    <p>Cité APIX, îlot 4, Villa 1863<br />Tivaouane Peulh, Sénégal</p>
                  </div>
                </div>
                <div className={styles.locItem}>
                  <span className={styles.locIcon}>📞</span>
                  <div>
                    <strong>Téléphone</strong>
                    <p><a href="tel:+221775230945">77 523 09 45</a></p>
                  </div>
                </div>
                <div className={styles.locItem}>
                  <span className={styles.locIcon}>💬</span>
                  <div>
                    <strong>WhatsApp</strong>
                    <p><a href="https://wa.me/221707851555" target="_blank" rel="noopener noreferrer">70 785 15 55</a></p>
                  </div>
                </div>
                <div className={styles.locItem}>
                  <span className={styles.locIcon}>📠</span>
                  <div>
                    <strong>Fax</strong>
                    <p>33 972 98 38</p>
                  </div>
                </div>
              </div>
              <Link href="/contact" className="btn btn-primary" id="apropos-contact-btn">
                Voir la carte & nous contacter →
              </Link>
            </div>
            <div className={styles.locMap}>
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-17.3&lat=14.83&zoom=13&marker=14.83,-17.3"
                style={{ border: 0, width: '100%', height: '100%', borderRadius: '16px' }}
                allowFullScreen
                loading="lazy"
                title="Localisation EMP — Tivaouane Peulh"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>Prêt à rejoindre l'EMP ?</h2>
            <p className={styles.ctaDesc}>Consultez nos formations et faites une demande d'admission dès aujourd'hui.</p>
            <div className={styles.ctaBtns}>
              <Link href="/formations" className="btn btn-white btn-lg" id="apropos-formations-btn">
                Voir les formations
              </Link>
              <Link href="/admissions" className="btn btn-outline btn-lg" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.5)' }} id="apropos-admissions-btn">
                Faire une demande
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
