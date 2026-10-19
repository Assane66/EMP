import Link from 'next/link';
import Image from 'next/image';
import styles from './formations.module.css';

export const metadata = {
  title: 'Nos Formations',
  description:
    "Découvrez les formations professionnelles de l'EMP : hôtellerie, informatique & numérique, transit, transport, logistique et commerce international. Certifications CS, BT, BEP, BTS.",
};

const poles = [
  {
    id: 'hotellerie',
    icon: '🍽️',
    color: '#f59e0b',
    bgColor: '#fef3c7',
    title: 'Hôtellerie',
    subtitle: 'Pâtisserie · Boulangerie · Cuisine professionnelle',
    image: '/hotellerie.png',
    href: '/formations/hotellerie',
    description:
      "Le pôle Hôtellerie de l'EMP forme des professionnels des métiers de bouche : pâtisserie, boulangerie et cuisine. Vous apprendrez les techniques fondamentales dans un environnement professionnel, encadré par des formateurs expérimentés.",
    formations: [
      { name: 'Pâtisserie', desc: 'Maîtrisez l\'art de la pâtisserie : gâteaux, viennoiseries, entremets et créations sucrées.' },
      { name: 'Boulangerie', desc: 'Apprenez à fabriquer pains, baguettes, et produits de boulangerie artisanale.' },
      { name: 'Cuisine professionnelle', desc: 'Développez vos compétences en cuisine africaine, internationale et en gestion d\'une cuisine pro.' },
    ],
    debouches: ['Chef cuisinier', 'Pâtissier', 'Boulanger', 'Chef de rang', 'Gérant de restauration'],
  },
  {
    id: 'informatique',
    icon: '💻',
    color: '#1a56db',
    bgColor: '#dbeafe',
    title: 'Informatique & Numérique',
    subtitle: 'Bureautique · Infographie · Développement · Marketing',
    image: '/informatique.png',
    href: '/formations/informatique',
    description:
      "Le pôle Informatique & Numérique prépare les étudiants aux métiers du digital : de la bureautique au développement d'applications, en passant par la création graphique et le marketing en ligne.",
    formations: [
      { name: 'Bureautique', desc: 'Maîtrisez les outils informatiques essentiels : traitement de texte, tableur, présentation.' },
      { name: 'Infographie', desc: 'Apprenez la conception graphique, le design visuel et les outils de création numérique.' },
      { name: 'Développement web & mobile', desc: 'Créez des sites web et des applications mobiles avec les technologies modernes.' },
      { name: 'Marketing digital', desc: 'Gérez la présence en ligne, les réseaux sociaux et les campagnes publicitaires digitales.' },
    ],
    debouches: ['Développeur web', 'Graphiste', 'Community manager', 'Assistant informatique', 'Webmaster', 'Responsable marketing digital'],
  },
  {
    id: 'transport',
    icon: '🚢',
    color: '#10b981',
    bgColor: '#d1fae5',
    title: 'Transport & Commerce',
    subtitle: 'Transit · Transport & Logistique · Commerce international',
    image: '/transport.png',
    href: '/formations/transport',
    description:
      "Le pôle Transport & Commerce forme des experts du commerce mondial et de la chaîne logistique. Maîtrisez les procédures douanières, la gestion des flux de marchandises et les échanges commerciaux internationaux.",
    formations: [
      { name: 'Transit', desc: 'Maîtrisez les procédures douanières, les documents de transit et la réglementation.' },
      { name: 'Transport & Logistique', desc: 'Gérez la chaîne d\'approvisionnement, le transport de marchandises et les entrepôts.' },
      { name: 'Commerce international', desc: 'Apprenez les Incoterms, les contrats internationaux et les techniques du commerce mondial.' },
    ],
    debouches: ['Agent transit', 'Logisticien', 'Agent commercial export/import', 'Déclarant en douane', 'Responsable supply chain'],
  },
];

export default function FormationsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="sep">›</span>
            <span>Formations</span>
          </nav>
          <h1>Nos Formations Professionnelles</h1>
          <p>Choisissez le pôle qui correspond à votre projet professionnel et démarrez votre formation dès aujourd'hui.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {poles.map((pole, index) => (
            <div key={pole.id} className={`${styles.poleSection} ${index % 2 === 1 ? styles.reverse : ''}`}>
              <div className={styles.poleImage}>
                <Image
                  src={pole.image}
                  alt={`Formation ${pole.title} à l'EMP`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.poleImageOverlay} style={{ background: `${pole.color}33` }} />
                <div className={styles.poleBadge} style={{ background: pole.bgColor, color: pole.color }}>
                  <span>{pole.icon}</span>
                  <span>{pole.title}</span>
                </div>
              </div>
              <div className={styles.poleContent}>
                <div className={styles.poleHeader}>
                  <span className={styles.poleSub}>{pole.subtitle}</span>
                  <h2 className={styles.poleTitle}>{pole.title}</h2>
                  <p className={styles.poleDesc}>{pole.description}</p>
                </div>
                <div className={styles.formationsList}>
                  {pole.formations.map((f) => (
                    <div key={f.name} className={styles.formationItem}>
                      <div className={styles.formationDot} style={{ background: pole.color }} />
                      <div>
                        <h4 className={styles.formationName}>{f.name}</h4>
                        <p className={styles.formationDesc}>{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.debouches}>
                  <span className={styles.debouchesLabel}>Métiers accessibles :</span>
                  <div className={styles.debouchesTags}>
                    {pole.debouches.map((d) => (
                      <span key={d} className="pill">{d}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.poleActions}>
                  <Link href={pole.href} className="btn btn-primary" id={`formations-${pole.id}-btn`}>
                    Voir la formation complète →
                  </Link>
                  <a
                    href={`https://wa.me/221707851555?text=Bonjour%20EMP%2C%20je%20souhaite%20des%20informations%20sur%20les%20formations%20en%20${encodeURIComponent(pole.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    Demander des infos
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBar}>
        <div className="container">
          <div className={styles.ctaBarInner}>
            <div>
              <h3 className={styles.ctaBarTitle}>Prêt à vous inscrire ?</h3>
              <p className={styles.ctaBarDesc}>Remplissez notre formulaire ou contactez-nous directement.</p>
            </div>
            <div className={styles.ctaBarBtns}>
              <Link href="/admissions" className="btn btn-white" id="formations-admissions-btn">
                Faire une demande
              </Link>
              <a
                href="https://wa.me/221707851555?text=Bonjour%20EMP%2C%20je%20souhaite%20obtenir%20des%20informations%20sur%20vos%20formations%20et%20les%20conditions%20d%27inscription."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
