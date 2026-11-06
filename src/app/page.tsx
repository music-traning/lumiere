import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import FaqAccordion from '@/components/FaqAccordion';

const RESERVE_URL = 'https://〇〇〇〇.com/reserve';

const HERO_SRC_640 =
  'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&fm=webp&w=640&q=60';
const HERO_SRC_1080 =
  'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&fm=webp&w=1080&q=65';
const HERO_SRC_1600 =
  'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&fm=webp&w=1600&q=70';

export default function LumiereLandingPage() {
  return (
    <div className="min-h-screen bg-[#07080a] text-[#e0ddd7] selection:bg-[#c5a869]/25 selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#c5a869]/15 bg-[#07080a]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-14">
          <a
            href="#"
            className="font-serif text-xl tracking-[0.38em] text-[#f0eee9] transition-colors duration-500 hover:text-[#d4b97b] md:text-2xl"
          >
            LUMIÈRE
          </a>

          <nav
            aria-label="メインナビゲーション"
            className="hidden items-center gap-10 font-serif text-xs uppercase tracking-[0.28em] text-[#b8b3a8] lg:flex"
          >
            <a
              href="#concept"
              className="transition-colors duration-300 hover:text-[#d4b97b]"
            >
              Philosophy
            </a>
            <a
              href="#promises"
              className="transition-colors duration-300 hover:text-[#d4b97b]"
            >
              Three Promises
            </a>
            <a
              href="#first-experience"
              className="transition-colors duration-300 hover:text-[#d4b97b]"
            >
              First Experience
            </a>
            <a
              href="#faq"
              className="transition-colors duration-300 hover:text-[#d4b97b]"
            >
              Inquiries
            </a>
          </nav>

          <a
            href={RESERVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-[#c5a869]/55 px-5 py-2.5 text-xs tracking-[0.2em] text-[#d4b97b] transition-all duration-500 hover:border-[#d4b97b] hover:bg-[#c5a869]/15"
          >
            <span>専属コンシェルジュに相談する</span>
          </a>
        </div>
      </header>

      <main>
        {/* 1. Hero Section — Rendered immediately at opacity:1 for 0ms LCP delay */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#07080a] pt-24">
          {/* Background Image: Responsive WebP with high fetchPriority */}
          <div className="absolute inset-0 z-0">
            <img
              src={HERO_SRC_1080}
              srcSet={`${HERO_SRC_640} 640w, ${HERO_SRC_1080} 1080w, ${HERO_SRC_1600} 1600w`}
              sizes="100vw"
              width={1600}
              height={1067}
              fetchPriority="high"
              decoding="async"
              alt="LUMIÈRE 水面と間接照明が織りなすプライベートサンクチュアリ"
              className="h-full w-full scale-105 object-cover object-center opacity-45"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#07080a]/90 via-[#0c1220]/70 to-[#07080a]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#07080a_85%)]" />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center md:px-14">
            <div className="space-y-10">
              <div className="flex items-center justify-center gap-4">
                <span className="h-[1px] w-10 bg-[#c5a869]/60" />
                <span className="font-serif text-xs uppercase tracking-[0.42em] text-[#d4b97b]">
                  Azabu, Tokyo — Private Sanctuary
                </span>
                <span className="h-[1px] w-10 bg-[#c5a869]/60" />
              </div>

              <h1 className="font-serif text-2xl font-light leading-[1.85] tracking-[0.14em] text-[#f5f3ef] sm:text-3xl md:text-4xl lg:text-[44px] lg:leading-[1.65]">
                誰にも会わない。
                <br />
                ただ、自分に戻るための極上のサンクチュアリ。
              </h1>

              <p className="mx-auto max-w-2xl text-xs font-light leading-[2.4] tracking-[0.18em] text-[#c7c2b8] sm:text-sm md:text-base">
                東京・麻布。選ばれし大人だけが知る、完全プライベートスパ『LUMIÈRE』。
              </p>

              <div className="flex flex-col items-center justify-center gap-5 pt-10 sm:flex-row sm:gap-8">
                <a
                  href={RESERVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-4 border border-[#c5a869]/70 bg-[#0c1220]/70 px-9 py-5 text-xs font-light tracking-[0.22em] text-[#f0eee9] backdrop-blur-sm transition-all duration-500 hover:border-[#d4b97b] hover:bg-[#c5a869]/20 hover:text-white sm:w-auto"
                >
                  <span>エクスクルーシブ・メンバーシップを申請する</span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-3.5 w-3.5 text-[#d4b97b] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                <a
                  href={RESERVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-3 border border-[#c5a869]/45 bg-transparent px-8 py-5 text-xs font-light tracking-[0.22em] text-[#d0cbc0] transition-all duration-500 hover:border-[#d4b97b] hover:text-[#d4b97b] sm:w-auto"
                >
                  <span>専属コンシェルジュに相談する</span>
                </a>
              </div>
            </div>
          </div>

          {/* Minimal Vertical Line Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="h-16 w-[1px] bg-gradient-to-b from-[#c5a869]/50 to-transparent" />
          </div>
        </section>

        {/* 2. Concept Section */}
        <section
          id="concept"
          className="relative border-t border-[#9c7b52]/25 bg-gradient-to-b from-[#07080a] via-[#0c1220]/40 to-[#07080a] py-36 md:py-52"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-14">
            <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-12 lg:gap-24">
              {/* Philosophy Copy */}
              <ScrollReveal className="space-y-10 lg:col-span-6">
                <div className="space-y-4">
                  <span className="block font-serif text-xs uppercase tracking-[0.4em] text-[#d4b97b]">
                    01 — Philosophy
                  </span>
                  <h2 className="font-serif text-2xl font-light leading-[1.75] tracking-[0.12em] text-[#f0eee9] md:text-3xl lg:text-[34px]">
                    真のリラクゼーションは、
                    <br />
                    完全な秘匿性から生まれる。
                  </h2>
                </div>

                <div className="h-[1px] w-16 bg-[#c5a869]/60" />

                <div className="space-y-6 text-sm font-light leading-[2.4] tracking-[0.1em] text-[#c7c2b8]">
                  <p>
                    日々、幾千もの意思決定と視線の只中に身を置く方々にとって、どれほど豪華な空間であっても「他者の気配」が存在する限り、深層の緊張が解けることはありません。
                  </p>
                  <p>
                    麻布の閑静な一角に佇む『LUMIÈRE』は、建築の初期段階から「誰ともすれ違わないこと」を絶対条件として設計されました。地下の専用車寄せから直通エレベーターを経て、完全防音のプライベートスイートへ。
                  </p>
                  <p>
                    肩書きも、役割も、時計さえも手放し、ただ静寂のなかに身を沈める。そこにあるのは、選ばれし孤独だけがもたらす、純粋な再生の時間です。
                  </p>
                </div>
              </ScrollReveal>

              {/* Solitary Sanctuary Image */}
              <ScrollReveal className="lg:col-span-6">
                <div className="relative border border-[#9c7b52]/35 bg-[#111318] p-4 md:p-7">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#07080a]">
                    <img
                      src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&fm=webp&w=720&q=65"
                      srcSet="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&fm=webp&w=480&q=60 480w, https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&fm=webp&w=720&q=65 720w"
                      sizes="(max-width: 1024px) 90vw, 540px"
                      width={720}
                      height={900}
                      loading="lazy"
                      decoding="async"
                      alt="薄暗い間接照明と静寂に包まれたプライベート空間"
                      className="h-full w-full object-cover opacity-80 transition-transform duration-[1800ms] ease-out hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07080a]/70 via-transparent to-[#07080a]/30" />
                  </div>
                  <div className="mt-4 flex items-center justify-between font-serif text-[11px] uppercase tracking-[0.3em] text-[#c5a869]">
                    <span>Architectural Silence</span>
                    <span>Suite No. 01 — Azabu</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 3. Why Choose Us (3つの約束) */}
        <section
          id="promises"
          className="border-t border-[#9c7b52]/25 bg-[#0b0d12] py-36 md:py-52"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-14">
            <ScrollReveal className="mx-auto mb-28 max-w-3xl text-center">
              <span className="block font-serif text-xs uppercase tracking-[0.4em] text-[#d4b97b]">
                02 — Three Promises
              </span>
              <h2 className="mt-5 font-serif text-2xl font-light tracking-[0.16em] text-[#f0eee9] md:text-4xl">
                静寂を成立させる、3つの約束
              </h2>
              <div className="mx-auto mt-8 h-[1px] w-14 bg-[#c5a869]/60" />
            </ScrollReveal>

            <div className="space-y-32 md:space-y-44">
              {/* 01. Absolute Privacy */}
              <ScrollReveal className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20">
                <div className="lg:col-span-7">
                  <div className="relative overflow-hidden border border-[#9c7b52]/30 bg-[#07080a] p-3 md:p-5">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&fm=webp&w=720&q=60"
                        srcSet="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&fm=webp&w=480&q=55 480w, https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&fm=webp&w=720&q=60 720w"
                        sizes="(max-width: 1024px) 92vw, 600px"
                        width={720}
                        height={450}
                        loading="lazy"
                        decoding="async"
                        alt="一脚のレザーチェアと重厚な陰影のあるプライベート空間"
                        className="h-full w-full object-cover opacity-70 grayscale-[35%] transition-transform duration-[1800ms] hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#07080a]/75 via-[#0c1220]/30 to-[#07080a]/60" />
                    </div>
                  </div>
                </div>

                <div className="space-y-7 lg:col-span-5">
                  <div className="flex items-center gap-5">
                    <svg
                      aria-hidden="true"
                      className="h-9 w-9 text-[#d4b97b]"
                      viewBox="0 0 36 36"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.8"
                    >
                      <rect x="4" y="4" width="28" height="28" />
                      <rect x="11" y="11" width="14" height="14" />
                      <line x1="18" y1="4" x2="18" y2="11" />
                    </svg>
                    <span className="font-serif text-sm tracking-[0.35em] text-[#d4b97b]">
                      01. ABSOLUTE PRIVACY
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-light leading-relaxed tracking-[0.12em] text-[#f0eee9] md:text-2xl">
                    入店から退店まで、誰とも顔を合わせない専用VIP動線。
                  </h3>

                  <p className="text-sm font-light leading-[2.3] tracking-[0.08em] text-[#c7c2b8]">
                    ご予約枠ごとにゲートからスイートまでの動線を完全ロック。地下の専用車寄せからプライベートエレベーターで直結する100㎡超のスイートは、スタジオ規格の防音壁と二重扉で外界から隔絶されています。フロントでのチェックイン手続きすら存在せず、入室から退店まで完全なる秘匿性が保たれます。
                  </p>
                </div>
              </ScrollReveal>

              {/* 02. Bespoke Treatment */}
              <ScrollReveal className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20">
                <div className="order-2 space-y-7 lg:order-1 lg:col-span-5">
                  <div className="flex items-center gap-5">
                    <svg
                      aria-hidden="true"
                      className="h-9 w-9 text-[#d4b97b]"
                      viewBox="0 0 36 36"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.8"
                    >
                      <circle cx="18" cy="18" r="14" />
                      <circle cx="18" cy="18" r="6" />
                      <line x1="4" y1="18" x2="32" y2="18" />
                    </svg>
                    <span className="font-serif text-sm tracking-[0.35em] text-[#d4b97b]">
                      02. BESPOKE TREATMENT
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-light leading-relaxed tracking-[0.12em] text-[#f0eee9] md:text-2xl">
                    歴10年以上のトップセラピストが導き出す、フルオーダーメイドの施術。
                  </h3>

                  <p className="text-sm font-light leading-[2.3] tracking-[0.08em] text-[#c7c2b8]">
                    LUMIÈREに決まったマニュアルは存在しません。国内外の5つ星ホテルスパで研鑽を積んだ歴10年以上のセラピストのみが在籍。当日の自律神経バランス、呼吸の深さ、筋膜の微細な緊張といった生体情報からその日の処方を組み立て、野生種ボタニカルの希少精油をその場で調合いたします。
                  </p>
                </div>

                <div className="order-1 lg:order-2 lg:col-span-7">
                  <div className="relative overflow-hidden border border-[#9c7b52]/30 bg-[#07080a] p-3 md:p-5">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&fm=webp&w=720&q=60"
                        srcSet="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&fm=webp&w=480&q=55 480w, https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&fm=webp&w=720&q=60 720w"
                        sizes="(max-width: 1024px) 92vw, 600px"
                        width={720}
                        height={450}
                        loading="lazy"
                        decoding="async"
                        alt="暗がりの中で静かに佇む希少なエッセンシャルオイルのボトル"
                        className="h-full w-full object-cover opacity-75 transition-transform duration-[1800ms] hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-[#07080a]/75 via-[#0c1220]/25 to-[#07080a]/60" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* 03. Exclusive Lounge */}
              <ScrollReveal className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20">
                <div className="lg:col-span-7">
                  <div className="relative overflow-hidden border border-[#9c7b52]/30 bg-[#07080a] p-3 md:p-5">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&fm=webp&w=720&q=60"
                        srcSet="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&fm=webp&w=480&q=55 480w, https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&fm=webp&w=720&q=60 720w"
                        sizes="(max-width: 1024px) 92vw, 600px"
                        width={720}
                        height={450}
                        loading="lazy"
                        decoding="async"
                        alt="静寂なラウンジに置かれた一脚のグラス"
                        className="h-full w-full object-cover opacity-75 transition-transform duration-[1800ms] hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#07080a]/75 via-transparent to-[#07080a]/65" />
                    </div>
                  </div>
                </div>

                <div className="space-y-7 lg:col-span-5">
                  <div className="flex items-center gap-5">
                    <svg
                      aria-hidden="true"
                      className="h-9 w-9 text-[#d4b97b]"
                      viewBox="0 0 36 36"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.8"
                    >
                      <polygon points="18,5 31,29 5,29" />
                      <line x1="11" y1="20" x2="25" y2="20" />
                    </svg>
                    <span className="font-serif text-sm tracking-[0.35em] text-[#d4b97b]">
                      03. EXCLUSIVE LOUNGE
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-light leading-relaxed tracking-[0.12em] text-[#f0eee9] md:text-2xl">
                    あなた一人だけのために用意されるラウンジ。日常への帰還を遅らせる時間。
                  </h3>

                  <p className="text-sm font-light leading-[2.3] tracking-[0.08em] text-[#c7c2b8]">
                    施術の余韻をすぐさま都会の喧騒で打ち消してしまうことのないよう、スイート奥には会員専用のプライベートラウンジを併設しております。ウォークインセラーに眠る希少なヴィンテージワインや熟成シガー、あるいは厳選された単一農園の工芸茶を傾けながら、ただ静かに思考を巡らせる時間をお過ごしください。
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 4. First Experience (初回体験オファー) & 5. CTA */}
        <section
          id="first-experience"
          className="border-t border-[#9c7b52]/25 bg-gradient-to-b from-[#07080a] via-[#0c1220]/50 to-[#07080a] py-36 md:py-52"
        >
          <div className="mx-auto max-w-5xl px-6 md:px-14">
            <ScrollReveal className="relative border border-[#c5a869]/35 bg-[#0b0d13]/90 p-10 sm:p-16 md:p-24">
              {/* Architectural Corner Hairlines */}
              <div className="pointer-events-none absolute top-5 left-5 h-8 w-8 border-t border-l border-[#c5a869]/50" />
              <div className="pointer-events-none absolute top-5 right-5 h-8 w-8 border-t border-r border-[#c5a869]/50" />
              <div className="pointer-events-none absolute bottom-5 left-5 h-8 w-8 border-b border-l border-[#c5a869]/50" />
              <div className="pointer-events-none absolute bottom-5 right-5 h-8 w-8 border-b border-r border-[#c5a869]/50" />

              <div className="mx-auto max-w-3xl text-center">
                <span className="block font-serif text-xs uppercase tracking-[0.42em] text-[#d4b97b]">
                  03 — Private Invitation
                </span>
                <h2 className="mt-5 font-serif text-2xl font-light tracking-[0.14em] text-[#f0eee9] md:text-4xl">
                  First Experience — 初回体験特別コース
                </h2>
                <div className="mx-auto mt-7 h-[1px] w-14 bg-[#c5a869]/60" />
                <p className="mt-8 text-sm font-light leading-[2.3] tracking-[0.09em] text-[#c7c2b8]">
                  本物の価値を見極める目をお持ちの方にこそ、まずは言葉ではなく五感でご判断いただきたいと考えております。メンバーシップご検討のための特別なプライベート・インビテーションをご用意いたしました。
                </p>
              </div>

              {/* Offer Header & Price */}
              <div className="mt-16 border-t border-b border-[#9c7b52]/35 py-12">
                <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
                  <div className="space-y-3">
                    <span className="inline-block border border-[#c5a869]/50 px-3.5 py-1 font-serif text-xs uppercase tracking-[0.3em] text-[#d4b97b]">
                      By Application Only — Monthly Limited
                    </span>
                    <h3 className="font-serif text-xl font-light tracking-[0.12em] text-[#f0eee9] md:text-2xl">
                      初回体験特別コース 120分 カスタムトリートメント
                    </h3>
                    <p className="text-xs font-light tracking-[0.1em] text-[#bdb8ae]">
                      ※スイート滞在総時間：約180分（プライベートバス・パーソナル分析・施術後のラウンジ独占利用を含む）
                    </p>
                  </div>

                  <div className="shrink-0 text-left md:text-right">
                    <p className="font-serif text-xs tracking-[0.2em] text-[#d4b97b]">
                      INVITATION PRIVILEGE
                    </p>
                    <p className="mt-1 font-serif text-3xl font-light tracking-[0.08em] text-[#f0eee9] md:text-4xl">
                      ¥28,000
                    </p>
                    <p className="mt-1 text-xs font-light tracking-[0.12em] text-[#b8b3a8]">
                      （税込・スイート貸切料・バトラーサービス料込）
                    </p>
                  </div>
                </div>

                {/* 3 Pillars of Concrete Value */}
                <div className="mt-12 grid grid-cols-1 gap-8 border-t border-[#9c7b52]/25 pt-10 md:grid-cols-3">
                  <div className="space-y-3">
                    <span className="font-serif text-xs tracking-[0.25em] text-[#d4b97b]">
                      I. THE SANCTUARY SUITE
                    </span>
                    <h4 className="font-serif text-sm tracking-[0.1em] text-[#f0eee9]">
                      100㎡超の完全防音スイート独占
                    </h4>
                    <p className="text-xs font-light leading-[2.1] tracking-[0.06em] text-[#c2bdb2]">
                      十和田石と黒御影石で設えた専用スチームバス、深部体温と自律神経を整える無段階調光、ハイレゾリューション音響を備えたスイートを3時間完全貸切でご提供します。
                    </p>
                  </div>

                  <div className="space-y-3">
                    <span className="font-serif text-xs tracking-[0.25em] text-[#d4b97b]">
                      II. RARE BOTANICAL FORMULATION
                    </span>
                    <h4 className="font-serif text-sm tracking-[0.1em] text-[#f0eee9]">
                      最高峰の希少ビオディナミ精油
                    </h4>
                    <p className="text-xs font-light leading-[2.1] tracking-[0.06em] text-[#c2bdb2]">
                      南仏および日本の原生林からわずかしか採取されない野生種エッセンシャルオイルと高濃度セルラーセラムを使用。その日のコンディションに合わせ、開封直後の鮮度で調合します。
                    </p>
                  </div>

                  <div className="space-y-3">
                    <span className="font-serif text-xs tracking-[0.25em] text-[#d4b97b]">
                      III. CONCIERGE &amp; LOUNGE
                    </span>
                    <h4 className="font-serif text-sm tracking-[0.1em] text-[#f0eee9]">
                      専属バトラーとラウンジでの余韻
                    </h4>
                    <p className="text-xs font-light leading-[2.1] tracking-[0.06em] text-[#c2bdb2]">
                      専用車寄せでのお出迎えから、施術後のプライベートラウンジにおけるヴィンテージシャンパーニュまたは希少工藝茶のサーブ、お見送りまで専属チームが黒子として伴走します。
                    </p>
                  </div>
                </div>
              </div>

              {/* 5. Refined Outline CTA Buttons */}
              <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
                <a
                  href={RESERVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-4 border border-[#c5a869]/75 bg-[#c5a869]/15 px-10 py-5 text-xs font-light tracking-[0.22em] text-[#f5f3ef] transition-all duration-500 hover:border-[#d4b97b] hover:bg-[#c5a869]/25 sm:w-auto"
                >
                  <span>エクスクルーシブ・メンバーシップを申請する</span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 text-[#d4b97b] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                <a
                  href={RESERVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-3 border border-[#c5a869]/50 bg-transparent px-9 py-5 text-xs font-light tracking-[0.22em] text-[#d0cbc0] transition-all duration-500 hover:border-[#d4b97b] hover:text-[#d4b97b] sm:w-auto"
                >
                  <span>専属コンシェルジュに相談する</span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 6. FAQ & Sanctuary Information */}
        <section
          id="faq"
          className="border-t border-[#9c7b52]/25 bg-[#07080a] py-36 md:py-52"
        >
          <div className="mx-auto max-w-4xl px-6 md:px-14">
            <ScrollReveal className="mx-auto mb-20 text-center">
              <span className="block font-serif text-xs uppercase tracking-[0.4em] text-[#d4b97b]">
                04 — Private Inquiries
              </span>
              <h2 className="mt-5 font-serif text-2xl font-light tracking-[0.16em] text-[#f0eee9] md:text-4xl">
                FAQ — よくあるご質問
              </h2>
              <div className="mx-auto mt-7 h-[1px] w-14 bg-[#c5a869]/60" />
            </ScrollReveal>

            <ScrollReveal>
              <FaqAccordion />
            </ScrollReveal>

            {/* Sanctuary Location & Details */}
            <ScrollReveal className="mt-28 border border-[#9c7b52]/30 bg-[#0c1220]/30 p-8 md:p-14">
              <div className="mb-8 flex items-center justify-between border-b border-[#9c7b52]/25 pb-6">
                <span className="font-serif text-xs uppercase tracking-[0.35em] text-[#d4b97b]">
                  Sanctuary Overview
                </span>
                <span className="font-serif text-xs tracking-[0.25em] text-[#c5a869]">
                  STRICTLY CONFIDENTIAL
                </span>
              </div>

              <dl className="grid grid-cols-1 gap-8 text-xs sm:grid-cols-2 md:gap-10">
                <div className="space-y-2">
                  <dt className="font-serif uppercase tracking-[0.25em] text-[#c5a869]">
                    Name
                  </dt>
                  <dd className="font-serif text-sm tracking-[0.2em] text-[#f0eee9]">
                    LUMIÈRE（ルミエール）
                  </dd>
                </div>

                <div className="space-y-2">
                  <dt className="font-serif uppercase tracking-[0.25em] text-[#c5a869]">
                    Location
                  </dt>
                  <dd className="font-light tracking-[0.12em] text-[#e0ddd7]">
                    東京都港区・麻布某所（詳細は予約確定者のみにご案内）
                  </dd>
                </div>

                <div className="space-y-2">
                  <dt className="font-serif uppercase tracking-[0.25em] text-[#c5a869]">
                    Hours
                  </dt>
                  <dd className="font-light tracking-[0.12em] text-[#e0ddd7]">
                    10:00 — 23:00（完全予約制・時間外応相談）
                  </dd>
                </div>

                <div className="space-y-2">
                  <dt className="font-serif uppercase tracking-[0.25em] text-[#c5a869]">
                    Access
                  </dt>
                  <dd className="font-light tracking-[0.12em] text-[#e0ddd7]">
                    地下専用車寄せ（ハイヤー待機スペース完備）・直通VIPエレベーター
                  </dd>
                </div>
              </dl>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#9c7b52]/25 bg-[#050608] py-20">
        <div className="mx-auto max-w-7xl px-6 text-center md:px-14">
          <a
            href="#"
            className="inline-block font-serif text-2xl tracking-[0.42em] text-[#d4b97b]"
          >
            LUMIÈRE
          </a>
          <p className="mt-3 font-serif text-xs uppercase tracking-[0.35em] text-[#c5a869]">
            Private Sanctuary — Azabu, Tokyo
          </p>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-10 text-xs font-light tracking-[0.18em] text-[#bdb8ae]">
            <li>
              <a
                href={RESERVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#d4b97b]"
              >
                運営会社
              </a>
            </li>
            <li>
              <a
                href={RESERVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#d4b97b]"
              >
                特定商取引法に基づく表記
              </a>
            </li>
            <li>
              <a
                href={RESERVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#d4b97b]"
              >
                プライバシーポリシー
              </a>
            </li>
          </ul>

          <p className="mt-12 font-serif text-xs tracking-[0.22em] text-[#a8a296]">
            &copy; 2026 LUMIÈRE AZABU. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
