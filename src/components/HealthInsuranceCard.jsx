import React from 'react';
import { useLanguage } from '../LanguageContext';

export default function HealthInsuranceCard() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden rounded-[16px] bg-gradient-to-br from-[#00995D] to-[#004d2e] text-white p-6 shadow-lg border border-[#00c278]/30 mb-6">
      {/* Decoração de Fundo (Padrão Geométrico Unimed) */}
      <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 rounded-full bg-[#00c278]/20 blur-xl pointer-events-none"></div>

      {/* Topo do Cartão: Logo e Nome */}
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div>
          <h3 className="font-headline-md text-[22px] font-bold tracking-tight">Unimed <span className="font-light text-white/80">| Nacional</span></h3>
          <p className="font-label-sm text-[11px] text-emerald-100 uppercase tracking-widest mt-0.5">{t('healthPlan')}</p>
        </div>
        <span className="material-symbols-outlined text-[32px] text-white/90">health_and_safety</span>
      </div>

      {/* Dados do Cartão */}
      <div className="space-y-4 relative z-10">
        <div>
          <p className="font-label-sm text-[10px] text-emerald-200 uppercase tracking-wider mb-1">{t('cardHolderName')}</p>
          <p className="font-headline-sm text-[18px] font-semibold tracking-wide">Pedro Soares</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-label-sm text-[10px] text-emerald-200 uppercase tracking-wider mb-1">{t('cardNumberLabel')}</p>
            <p className="font-body-md text-[16px] font-mono tracking-wider">0000 1234 5678 9</p>
          </div>
          <div>
            <p className="font-label-sm text-[10px] text-emerald-200 uppercase tracking-wider mb-1">{t('accommodation')}</p>
            <p className="font-body-md text-[14px] font-semibold">{t('accommodationType')}</p>
          </div>
        </div>

        <div className="pt-2 mt-2 border-t border-emerald-400/30 flex justify-between items-center">
          <div>
            <p className="font-label-sm text-[10px] text-emerald-200 uppercase tracking-wider">{t('validity')}</p>
            <p className="font-body-sm text-[13px] font-semibold">12/2028</p>
          </div>
          <a href="tel:08009420011" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-[12px] font-semibold backdrop-blur-md">
            <span className="material-symbols-outlined text-[14px]">call</span>
            0800 942 0011
          </a>
        </div>
      </div>
    </section>
  );
}
