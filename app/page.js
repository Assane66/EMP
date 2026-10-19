import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'EMP — École des Métiers Professionnels | Tivaouane Peulh, Sénégal',
  description:
    "Formez-vous à l'EMP et préparez votre avenir professionnel en hôtellerie, informatique ou transport & commerce international. Certifications CS, BT, BEP, BTS. Tivaouane Peulh.",
};

const poles = [
  {
    id: 'hotellerie',
    icon: '🍽️',
    title: 'Hôtellerie',
    subtitle: 'Pâtisserie · Boulangerie · Cuisine',
    description:
      'Maîtrisez les techniques culinaires et de pâtisserie dans un environnement professionnel. Devenez chef, pâtissier ou boulanger certifié.',
    image: '/hotellerie.png',
    href: '/formations/hotellerie',
    color: '#f59e0b',
    formations: ['Pâtisserie', 'Boulangerie', 'Cuisine professionnelle'],
  },
  {
    id: 'informatique',
    icon: '💻',
    title: 'Informatique & Numérique',
    subtitle: 'Bureautique · Infographie · Dev Web · Marketing',
    description:
      'Développez vos compétences numériques : du traitement de texte au développement d\'applications mobiles, en passant par le marketing digital.',
    image: '/informatique.png',
    href: '/formations/informatique',
    color: '#1a56db',
    formations: ['Bureautique', 'Infographie', 'Développement web & mobile', 'Marketing digital'],
  },
  {
    id: 'transport',
    icon: '🚢',
    title: 'Transport & Commerce',
    subtitle: 'Transit · Logistique · Commerce international',
    description:
      'Préparez-vous aux métiers du commerce mondial : transit douanier, logistique des marchandises et échanges commerciaux internationaux.',
    image: '/transport.png',
    href: '/formations/transport',
    color: '#10b981',
    formations: ['Transit', 'Transport & Logistique', 'Commerce international'],
  },
];

const certifications = [
  {
    code: 'CS',
    name: 'Certificat de Spécialité',
    desc: 'Formation ciblée sur une compétence métier précise.',
    icon: '🎖️',
  },
  {
    code: 'BT',
    name: 'Brevet de Technicien',
    desc: 'Formation technique de niveau intermédiaire.',
    icon: '📋',
  },
  {
    code: 'BEP',
    name: 'Brevet d\'Études Professionnelles',
    desc: 'Diplôme professionnel reconnu nationalement.',
    icon: '📜',
  },
  {
    code: 'BTS',
    name: 'Brevet de Technicien Supérieur',
    desc: 'Diplôme supérieur pour une expertise avancée.',
    icon: '🏆',
  },
];

const whyEMP = [
  {
    icon: '🎯',
    title: 'Formation pratique',
    desc: 'Apprentissage par la pratique avec des équipements professionnels adaptés aux réalités du terrain.',
  },
  {
    icon: '🏅',
    title: 'Certifications reconnues',
    desc: 'Obtenez des diplômes professionnels : CS, BT, BEP ou BTS selon votre niveau et votre objectif.',
  },
  {
    icon: '👨‍🏫',
    title: 'Accompagnement personnalisé',
    desc: 'Des formateurs expérimentés vous guident à chaque étape de votre parcours professionnel.',
  },
  {
    icon: '🌍',
    title: 'Secteurs d\'avenir',
    desc: 'Hôtellerie, numérique, transport et commerce : des domaines porteurs d\'emploi en Afrique et dans le monde.',
  },
  {
    icon: '📍',
    title: 'Au cœur de Tivaouane Peulh',
    desc: 'Cité APIX, îlot 4, Villa 1863 — facilement accessible depuis Dakar et la région de Thiès.',
  },
  {
    icon: '💬',
    title: 'Contact direct',
    desc: 'Joignez l\'école par WhatsApp, téléphone ou en vous rendant directement sur place.',
  },
];

const steps = [
  { num: '01', title: 'Choisissez votre filière', desc: 'Hôtellerie, informatique, transport ou commerce : identifiez le domaine qui correspond à votre projet.' },
  { num: '02', title: 'Vérifiez votre niveau', desc: 'Consultez les conditions d\'admission et choisissez la certification adaptée à votre profil.' },
  { num: '03', title: 'Envoyez votre demande', desc: 'Remplissez le formulaire en ligne ou contactez-nous directement par WhatsApp.' },
  { num: '04', title: 'Recevez votre réponse', desc: 'L\'équipe de l\'EMP vous contacte rapidement pour finaliser votre inscription.' },
];

export default function HomePage() {
  return (
    <>
      {/* ================================================
          HERO
         ================================================ */}
      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/hero.jpg"
            alt="Étudiante souriante de l'EMP en salle de formation"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`${styles.heroContent} container`}>
          <div className={styles.heroBadge}>
            <span>📍 Tivaouane Peulh, Sénégal</span>
          </div>
          <h1 className={styles.heroTitle}>
            Apprendre un métier.<br />
            <span className={styles.heroHighlight}>Construire son avenir.</span>
          </h1>
          <p className={styles.heroDesc}>
            L'École des Métiers Professionnels vous accompagne dans l'acquisition de compétences concrètes en hôtellerie, informatique, transport, logistique et commerce international.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/admissions?type=bourse" className="btn btn-bourse btn-lg" id="hero-bourse-btn">
              🎓 Obtenir une bourse ici
            </Link>
            <Link href="/formations" className="btn btn-primary btn-lg" id="hero-formations-btn">
              Découvrir nos formations
            </Link>
            <a
              href="https://wa.me/221707851555?text=Bonjour%20EMP%2C%20je%20souhaite%20obtenir%20des%20informations%20sur%20les%20bourses%20et%20formations."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              id="hero-whatsapp-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Parler à l'EMP sur WhatsApp
            </a>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>3</span>
              <span className={styles.heroStatLabel}>Pôles de formation</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>10</span>
              <span className={styles.heroStatLabel}>Filières disponibles</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>4</span>
              <span className={styles.heroStatLabel}>Certifications</span>
            </div>
          </div>
        </div>
        <div className={styles.heroScroll} aria-hidden="true">
          <span className={styles.scrollArrow}>↓</span>
        </div>
      </section>

      {/* ================================================
          ORIENTATION RAPIDE
         ================================================ */}
      <section className={`${styles.orient} section-sm`}>
        <div className="container">
          <div className={styles.orientInner}>
            <p className={styles.orientLabel}>Trouvez votre voie en quelques secondes</p>
            <div className={styles.orientCards}>
              <Link href="/formations/hotellerie" className={styles.orientCard} id="orient-hotellerie">
                <span className={styles.orientEmoji}>🍽️</span>
                <span>Je veux travailler dans l'hôtellerie</span>
                <span className={styles.orientArrow}>→</span>
              </Link>
              <Link href="/formations/informatique" className={styles.orientCard} id="orient-informatique">
                <span className={styles.orientEmoji}>💻</span>
                <span>Je veux travailler dans le numérique</span>
                <span className={styles.orientArrow}>→</span>
              </Link>
              <Link href="/formations/transport" className={styles.orientCard} id="orient-transport">
                <span className={styles.orientEmoji}>🚢</span>
                <span>Je veux travailler dans le transport ou le commerce</span>
                <span className={styles.orientArrow}>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          TROIS PÔLES
         ================================================ */}
      <section className="section" id="formations">
        <div className="container">
          <div className="section-header text-center">
            <p className="pre-title">Nos formations</p>
            <h2>Trois pôles d'excellence professionnelle</h2>
            <p>Des formations concrètes pour des métiers porteurs d'avenir.</p>
          </div>
          <div className={styles.poles}>
            {poles.map((pole, index) => (
              <div key={pole.id} className={styles.poleCard}>
                <div className={styles.poleImage}>
                  <Image
                    src={pole.image}
                    alt={`Formation ${pole.title} à l'EMP`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className={styles.poleOverlay} style={{ background: `linear-gradient(to top, ${pole.color}ee, transparent)` }} />
                  <div className={styles.poleIconBadge}>{pole.icon}</div>
                </div>
                <div className={styles.poleBody}>
                  <h3 className={styles.poleTitle}>{pole.title}</h3>
                  <p className={styles.poleSub}>{pole.subtitle}</p>
                  <p className={styles.poleDesc}>{pole.description}</p>
                  <ul className={styles.poleFormations}>
                    {pole.formations.map((f) => (
                      <li key={f}>
                        <span className={styles.poleDot} style={{ background: pole.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={pole.href}
                    className="btn btn-primary"
                    id={`pole-${pole.id}-btn`}
                    style={{ '--btn-color': pole.color }}
                  >
                    Découvrir ce pôle →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================
          CERTIFICATIONS
         ================================================ */}
      <section className={`${styles.certsSection} section`}>
        <div className="container">
          <div className="section-header text-center">
            <p className="pre-title">Certifications</p>
            <h2>Des diplômes reconnus pour votre carrière</h2>
            <p>À l'EMP, chaque formation prépare à une certification professionnelle officielle.</p>
          </div>
          <div className={styles.certsGrid}>
            {certifications.map((cert) => (
              <div key={cert.code} className={styles.certCard}>
                <div className={styles.certIcon}>{cert.icon}</div>
                <div className={styles.certCode}>{cert.code}</div>
                <h4 className={styles.certName}>{cert.name}</h4>
                <p className={styles.certDesc}>{cert.desc}</p>
              </div>
            ))}
          </div>
          <div className={styles.certsCta}>
            <Link href="/admissions" className="btn btn-outline" id="certs-admissions-btn">
              Voir les conditions d'admission
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================
          POURQUOI L'EMP
         ================================================ */}
      <section className={`${styles.whySection} section`}>
        <div className="container">
          <div className={styles.whyInner}>
            <div className={styles.whyLeft}>
              <div className="section-header">
                <p className="pre-title">Pourquoi choisir l'EMP ?</p>
                <h2>Une école tournée vers vos réussites</h2>
                <div className="divider" />
                <p>
                  L'EMP met l'accent sur les compétences pratiques, l'encadrement de proximité et les débouchés professionnels réels. Notre objectif : vous préparer à entrer dans la vie active avec confiance.
                </p>
              </div>
              <div className={styles.whyActions}>
                <Link href="/a-propos" className="btn btn-primary" id="why-apropos-btn">
                  En savoir plus sur l'EMP
                </Link>
                <Link href="/contact" className="btn btn-outline" id="why-contact-btn">
                  Nous contacter
                </Link>
              </div>
            </div>
            <div className={styles.whyRight}>
              {whyEMP.map((item) => (
                <div key={item.title} className={styles.whyItem}>
                  <div className={styles.whyItemIcon}>{item.icon}</div>
                  <div>
                    <h4 className={styles.whyItemTitle}>{item.title}</h4>
                    <p className={styles.whyItemDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          PARCOURS D'INSCRIPTION
         ================================================ */}
      <section className={`${styles.stepsSection} section`}>
        <div className="container">
          <div className="section-header text-center">
            <p className="pre-title">Inscription</p>
            <h2>Votre parcours en 4 étapes</h2>
            <p>S'inscrire à l'EMP est simple et rapide.</p>
          </div>
          <div className={styles.steps}>
            {steps.map((step, i) => (
              <div key={step.num} className={styles.step}>
                <div className={styles.stepNum}>{step.num}</div>
                {i < steps.length - 1 && <div className={styles.stepLine} aria-hidden="true" />}
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================
          CTA FINAL
         ================================================ */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaPattern} aria-hidden="true" />
        <div className={`${styles.ctaContent} container`}>
          <h2 className={styles.ctaTitle}>
            Votre projet professionnel commence ici.
          </h2>
          <p className={styles.ctaDesc}>
            Rejoignez l'EMP et bénéficiez d'une formation pratique qui vous ouvre les portes du monde professionnel.
          </p>
          <div className={styles.ctaBtns}>
            <Link href="/formations" className="btn btn-white btn-lg" id="cta-formations-btn">
              Découvrir les formations
            </Link>
            <a
              href="https://wa.me/221707851555?text=Bonjour%20EMP%2C%20je%20souhaite%20obtenir%20des%20informations%20sur%20vos%20formations%20et%20les%20conditions%20d%27inscription."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              id="cta-whatsapp-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Contacter l'EMP sur WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
