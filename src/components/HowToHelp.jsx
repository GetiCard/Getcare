import React from 'react';
import { useLanguage } from '../LanguageContext';

export default function HowToHelp() {
  const { t } = useLanguage();

  return (
    <section className="glass-panel rounded-[16px] p-md border-l-4 border-l-sky-500 shadow-sm" id="how-to-help">
      <div className="flex items-center gap-sm mb-4 pb-3 border-b border-white/40">
        <span className="material-symbols-outlined text-sky-600 icon-fill drop-shadow-sm text-[28px]">support</span>
        <h2 className="font-headline-md text-[20px] font-bold text-slate-800">{t('howToHelp')}</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Caso 1: Consciente */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-50 to-white p-4 border border-emerald-200 shadow-sm transition-transform hover:-translate-y-1">
          <div className="absolute top-0 right-0 p-2">
            <span className="material-symbols-outlined text-emerald-500 text-[32px] opacity-20">face</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
              <span className="material-symbols-outlined text-emerald-600 text-[18px] icon-fill">check_circle</span>
            </div>
            <h3 className="font-label-md text-[16px] text-emerald-900 font-bold">{t('conscious')}</h3>
          </div>
          <p className="font-label-sm text-[14px] text-slate-600 font-medium leading-relaxed">
            {t('consciousDesc')}
          </p>
        </div>
        
        {/* Caso 2: Inconsciente */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-red-50 to-white p-4 border border-red-200 shadow-sm transition-transform hover:-translate-y-1">
          <div className="absolute top-0 right-0 p-2">
            <span className="material-symbols-outlined text-red-500 text-[32px] opacity-20">personal_injury</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
              <span className="material-symbols-outlined text-red-600 text-[18px] icon-fill">warning</span>
            </div>
            <h3 className="font-label-md text-[16px] text-red-900 font-bold">{t('unconscious')}</h3>
          </div>
          <p className="font-label-sm text-[14px] text-slate-600 font-medium leading-relaxed text-red-700">
            {t('unconsciousDesc')}
          </p>
        </div>
      </div>
    </section>
  );
}