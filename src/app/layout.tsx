import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LUMIÈRE | 東京・麻布 完全会員制プライベートスパ',
  description:
    '誰にも会わない。ただ、自分に戻るための極上のサンクチュアリ。東京・麻布。選ばれし大人だけが知る、完全プライベートスパ『LUMIÈRE』。',
  openGraph: {
    title: 'LUMIÈRE | 東京・麻布 完全会員制プライベートスパ',
    description:
      '誰にも会わない。ただ、自分に戻るための極上のサンクチュアリ。東京・麻布。選ばれし大人だけが知る、完全プライベートスパ『LUMIÈRE』。',
    type: 'website',
    locale: 'ja_JP',
    siteName: 'LUMIÈRE',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=85',
        width: 1200,
        height: 630,
        alt: 'LUMIÈRE 東京・麻布 完全プライベートスパ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LUMIÈRE | 東京・麻布 完全会員制プライベートスパ',
    description:
      '誰にも会わない。ただ、自分に戻るための極上のサンクチュアリ。東京・麻布。選ばれし大人だけが知る、完全プライベートスパ『LUMIÈRE』。',
    images: [
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=85',
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Noto+Sans+JP:wght@200;300;400&family=Noto+Serif+JP:wght@200;300;400;500&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#07080a] font-sans font-light text-[#d6d3cd] antialiased">
        {children}
      </body>
    </html>
  );
}
