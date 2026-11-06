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
        url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&fm=webp&w=1200&q=75',
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
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&fm=webp&w=1200&q=75',
    ],
  },
};

const HERO_SRC_640 =
  'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&fm=webp&w=640&q=60';
const HERO_SRC_1080 =
  'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&fm=webp&w=1080&q=65';
const HERO_SRC_1600 =
  'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&fm=webp&w=1600&q=70';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="dark">
      <head>
        <link
          rel="preconnect"
          href="https://images.unsplash.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="image"
          href={HERO_SRC_1080}
          imageSrcSet={`${HERO_SRC_640} 640w, ${HERO_SRC_1080} 1080w, ${HERO_SRC_1600} 1600w`}
          imageSizes="100vw"
          fetchPriority="high"
        />
      </head>
      <body className="bg-[#07080a] font-sans font-light text-[#e0ddd7] antialiased">
        {children}
      </body>
    </html>
  );
}
