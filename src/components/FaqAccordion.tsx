'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: '秘匿性・プライバシーはどのように守られますか？',
    answer:
      '施設は完全予約制・1枠1組限定のフロア貸切制御を採用しております。地下専用車寄せからスイートルーム、施術後のプライベートラウンジに至るまで、他のお客様と動線が交差することは一切ございません。また、すべての専属バトラーおよびセラピストは厳格な秘密保持契約（NDA）を締結しております。',
  },
  {
    question: '運転手付きの車（ショーファードリブン）でのアクセスは可能ですか？',
    answer:
      'はい。建物の地下に外部の視線を完全に遮断した専用車寄せ（プライベート・コーチエントランス）をご用意しております。施術中は専属ドライバー様にお寛ぎいただける待機控え室も完備しております。',
  },
  {
    question: 'メンバーシップの審査および初回体験について教えてください。',
    answer:
      '通常は既存メンバー様からのご紹介および理事会による審査制をとっておりますが、毎月極めて限られた枠数に限り、本ページより「初回体験特別コース（First Experience）」の申請を承っております。空間と施術の真価をご体感いただいた後、メンバーシップのご案内を差し上げます。',
  },
  {
    question: '急なスケジュール変更や当日の時間調整は可能ですか？',
    answer:
      'エグゼクティブの皆様の流動的なご予定に寄り添うため、ご来館前後のバッファ時間を十分に確保した状態でスイートおよび専属セラピストをロックしております。変更が生じる際は、専属コンシェルジュまで直接お申し付けください。',
  },
];

export default function FaqAccordion() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="divide-y divide-[#9c7b52]/30 border-t border-b border-[#9c7b52]/30">
      {faqs.map((faq, index) => {
        const isOpen = openFaqIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div key={faq.question} className="py-7">
            <button
              id={buttonId}
              type="button"
              onClick={() => toggleFaq(index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center justify-between gap-8 py-1 text-left transition-colors duration-300 hover:text-[#d4b97b]"
            >
              <span className="flex items-baseline gap-5 font-serif text-base font-light tracking-[0.1em] text-[#f0eee9] md:text-lg">
                <span className="text-xs tracking-[0.2em] text-[#d4b97b]">
                  0{index + 1}
                </span>
                <span>{faq.question}</span>
              </span>
              {isOpen ? (
                <Minus
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-[#d4b97b]"
                />
              ) : (
                <Plus
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-[#c5a869]"
                />
              )}
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                isOpen
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="pt-5 pl-9 text-xs font-light leading-[2.3] tracking-[0.09em] text-[#c7c2b8] md:text-sm">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
