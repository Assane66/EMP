import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'EMP — École des Métiers Professionnels | Tivaouane Peulh',
    template: '%s | EMP — École des Métiers Professionnels',
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  description:
    "L'EMP vous accompagne dans l'acquisition de compétences concrètes en hôtellerie, informatique, transport, logistique et commerce international. Certifications CS, BT, BEP, BTS. Tivaouane Peulh, Sénégal.",
  keywords: [
    'école formation professionnelle',
    'EMP Sénégal',
    'Tivaouane Peulh',
    'hôtellerie formation',
    'informatique formation Sénégal',
    'transport logistique commerce international',
    'BTS BEP Sénégal',
    'certification professionnelle',
  ],
  openGraph: {
    title: 'EMP — École des Métiers Professionnels',
    description: 'Apprendre un métier. Construire son avenir. Formations professionnelles à Tivaouane Peulh, Sénégal.',
    type: 'website',
    locale: 'fr_SN',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${plusJakarta.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
