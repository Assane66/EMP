import Link from 'next/link';
import styles from './mentions.module.css';

export const metadata = {
  title: 'Mentions légales & Politique de confidentialité',
  description: "Mentions légales et politique de confidentialité de l'EMP — École des Métiers Professionnels, Tivaouane Peulh, Sénégal.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="sep">›</span>
            <span>Mentions légales</span>
          </nav>
          <h1>Mentions légales & Politique de confidentialité</h1>
          <p>Informations légales concernant le site web de l'EMP — École des Métiers Professionnels.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.content}>

            <div className={styles.notice}>
              ℹ️ Ce document sera complété et finalisé lorsque l'école aura fourni toutes les informations légales requises (numéro de registre, représentant légal, etc.).
            </div>

            <h2>1. Identification de l'établissement</h2>
            <p><strong>Nom :</strong> EMP — École des Métiers Professionnels</p>
            <p><strong>Adresse :</strong> Cité APIX, îlot 4, Villa 1863, Tivaouane Peulh, Sénégal</p>
            <p><strong>Téléphone :</strong> 77 523 09 45</p>
            <p><strong>WhatsApp :</strong> 70 785 15 55</p>
            <p><strong>Fax :</strong> 33 972 98 38</p>
            <p><em>Les informations relatives au registre officiel de l'établissement, au représentant légal et à l'email officiel seront ajoutées après confirmation par la direction de l'EMP.</em></p>

            <h2>2. Hébergement</h2>
            <p>Les informations relatives à l'hébergeur du site seront ajoutées lors de la mise en production.</p>

            <h2 id="confidentialite">3. Politique de confidentialité</h2>
            <h3>3.1 Données collectées</h3>
            <p>Dans le cadre des formulaires de contact et d'inscription présents sur ce site, l'EMP collecte les données personnelles suivantes :</p>
            <ul>
              <li>Prénom et nom</li>
              <li>Numéro de téléphone</li>
              <li>Adresse email (facultative)</li>
              <li>Niveau scolaire</li>
              <li>Filière et certification souhaitées</li>
              <li>Message libre</li>
            </ul>

            <h3>3.2 Finalité du traitement</h3>
            <p>Les données collectées sont utilisées exclusivement dans le cadre du traitement de votre demande d'admission ou de renseignements auprès de l'EMP. Elles permettent à l'équipe de vous contacter et de vous apporter une réponse adaptée.</p>

            <h3>3.3 Conservation des données</h3>
            <p>Les données sont conservées uniquement le temps nécessaire au traitement de votre demande et à la relation avec l'école. Elles ne sont pas conservées au-delà de la durée nécessaire à ces finalités.</p>

            <h3>3.4 Transmission à des tiers</h3>
            <p>Vos données personnelles ne sont pas vendues, louées ou transmises à des tiers sans votre consentement explicite. Elles sont uniquement accessibles au personnel administratif de l'EMP.</p>

            <h3>3.5 Vos droits</h3>
            <p>Conformément aux lois applicables en matière de protection des données personnelles, vous disposez des droits suivants :</p>
            <ul>
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit d'opposition au traitement</li>
            </ul>
            <p>Pour exercer ces droits, contactez l'EMP directement par téléphone ou par WhatsApp.</p>

            <h3>3.6 Sécurité</h3>
            <p>Le site de l'EMP utilise le protocole HTTPS pour protéger les données transmises via les formulaires. Les données ne sont pas affichées publiquement.</p>

            <h2>4. Cookies</h2>
            <p>Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie de suivi publicitaire ou de traçage comportemental n'est utilisé sans information préalable.</p>

            <h2>5. Propriété intellectuelle</h2>
            <p>L'ensemble des contenus présents sur ce site (textes, images, logos, structure) sont la propriété de l'EMP — École des Métiers Professionnels ou ont été utilisés avec autorisation. Toute reproduction sans autorisation préalable est interdite.</p>

            <h2>6. Contact</h2>
            <p>Pour toute question relative aux présentes mentions légales ou à la politique de confidentialité, contactez l'EMP :</p>
            <ul>
              <li>Par téléphone : <a href="tel:+221775230945">77 523 09 45</a></li>
              <li>Par WhatsApp : <a href="https://wa.me/221707851555" target="_blank" rel="noopener noreferrer">70 785 15 55</a></li>
              <li>En personne : Cité APIX, îlot 4, Villa 1863, Tivaouane Peulh, Sénégal</li>
            </ul>

            <div className={styles.backLink}>
              <Link href="/" className="btn btn-outline">← Retour à l'accueil</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
