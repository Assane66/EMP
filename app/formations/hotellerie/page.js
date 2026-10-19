import Image from 'next/image';
import Link from 'next/link';
import styles from '../pole.module.css';

export const metadata = {
  title: 'Formation Hôtellerie — Pâtisserie, Boulangerie, Cuisine',
  description:
    "Formez-vous aux métiers de l'hôtellerie à l'EMP : pâtisserie, boulangerie et cuisine professionnelle. Certifications CS, BT, BEP ou BTS. Tivaouane Peulh, Sénégal.",
};

const formations = [
  {
    id: 'patisserie',
    name: 'Pâtisserie',
    icon: '🎂',
    description:
      "Maîtrisez les techniques de la pâtisserie professionnelle : gâteaux, entremets, tartes, chocolaterie, macarons, viennoiseries et créations sucrées. Vous apprendrez à travailler en laboratoire avec des équipements professionnels.",
    competences: [
      'Techniques de base de la pâtisserie',
      'Travail du chocolat et du sucre',
      'Fabrication de viennoiseries',
      'Entremets et petits gâteaux',
      'Hygiène alimentaire et HACCP',
      'Présentation et décoration',
    ],
    debouches: ['Pâtissier', 'Chef pâtissier', 'Pâtissier-confiseur', 'Gérant de pâtisserie'],
  },
  {
    id: 'boulangerie',
    name: 'Boulangerie',
    icon: '🥖',
    description:
      "Apprenez à fabriquer des pains, baguettes, pains spéciaux et produits de boulangerie artisanale. La formation couvre les techniques de panification, la gestion des fermentations et la maîtrise des fours professionnels.",
    competences: [
      'Pétrissage et fermentation',
      'Façonnage de pains et baguettes',
      'Pains spéciaux et tradition',
      'Viennoiserie boulangère',
      'Gestion d\'un fournil',
      'Hygiène et sécurité alimentaire',
    ],
    debouches: ['Boulanger', 'Chef boulanger', 'Artisan boulangerpatissier', 'Gérant de boulangerie'],
  },
  {
    id: 'cuisine',
    name: 'Cuisine Professionnelle',
    icon: '👨‍🍳',
    description:
      "Développez vos compétences en cuisine africaine, française et internationale. Vous apprendrez à travailler en brigade, à gérer les coûts matière et à proposer des menus adaptés aux différentes typologies de clients.",
    competences: [
      'Techniques culinaires fondamentales',
      'Cuisine africaine et internationale',
      'Organisation d\'une cuisine professionnelle',
      'Gestion des stocks et des coûts',
      'Travail en brigade',
      'Norme HACCP et hygiène',
    ],
    debouches: ['Cuisinier', 'Chef de partie', 'Sous-chef', 'Chef cuisinier', 'Traiteur'],
  },
];

const certifications = ['CS — Certificat de Spécialité', 'BT — Brevet de Technicien', 'BEP — Brevet d\'Études Professionnelles', 'BTS — Brevet de Technicien Supérieur'];

export default function HotelleriePage() {
  return (
    <>
      <div className={styles.poleHero} style={{ '--pole-color': '#f59e0b', '--pole-dark': '#92400e' }}>
        <div className={styles.poleHeroMedia}>
          <Image
            src="/hotellerie.png"
            alt="Étudiants en formation hôtellerie et pâtisserie à l'EMP"
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
            <span>Hôtellerie</span>
          </nav>
          <div className={styles.poleHeroBadge}>🍽️ Pôle Hôtellerie</div>
          <h1>Hôtellerie</h1>
          <p className={styles.poleHeroDesc}>
            Pâtisserie · Boulangerie · Cuisine professionnelle
          </p>
          <p className={styles.poleHeroText}>
            Formez-vous aux métiers de bouche dans un environnement professionnel encadré par des formateurs expérimentés. Obtenez une certification reconnue et entrez dans la vie active avec confiance.
          </p>
          <div className={styles.poleHeroCtas}>
            <Link href="/admissions" className="btn btn-primary btn-lg" id="hotellerie-inscription-btn">
              Faire une demande d'admission
            </Link>
            <a
              href="https://wa.me/221707851555?text=Bonjour%20EMP%2C%20je%20souhaite%20des%20informations%20sur%20les%20formations%20en%20h%C3%B4tellerie."
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
            <h2>3 formations en Hôtellerie</h2>
            <p>Chaque filière vous prépare à un métier précis avec des compétences pratiques immédiatement valorisables.</p>
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
                      <li key={c}>
                        <span className={styles.checkIcon}>✓</span>
                        {c}
                      </li>
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

      {/* Certifications */}
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

      {/* CTA */}
      <section className={styles.poleCtaSection}>
        <div className="container">
          <div className={styles.poleCtaInner}>
            <h2 className={styles.poleCtaTitle}>Intéressé par la formation Hôtellerie ?</h2>
            <p className={styles.poleCtaDesc}>Contactez-nous pour en savoir plus sur les conditions d'admission, les durées et les tarifs.</p>
            <div className={styles.poleCtaBtns}>
              <Link href="/admissions" className="btn btn-primary btn-lg" id="hotellerie-cta-btn">
                Demander une inscription
              </Link>
              <a
                href="https://wa.me/221707851555?text=Bonjour%20EMP%2C%20je%20souhaite%20des%20informations%20sur%20les%20formations%20en%20h%C3%B4tellerie."
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
