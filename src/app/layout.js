import { Inter, Lato, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Pixel Group',
    template: '%s - Pixel Group',
  },
  description: 'Leading integrated technology services company based in Indonesia.',
  keywords: ['OOH', 'advertising', 'indonesia', 'billboard', 'digital printing'],
  openGraph: {
    title: 'Pixel Group',
    description: 'Leading integrated technology services company based in Indonesia.',
    url: 'https://pixelgroup.id',
    siteName: 'Pixel Group',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixel Group',
    description: 'Leading integrated technology services company based in Indonesia.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lato.variable} ${playfair.variable} dark flex min-h-screen flex-col`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1" id="page-scroll-container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
