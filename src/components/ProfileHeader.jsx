import React from 'react';
import { useLanguage } from '../LanguageContext';
import fotoPerfil from '../assets/foto_perfil.jpeg';

export default function ProfileHeader() {
  const { lang, toggleLanguage, t } = useLanguage();

  const langLabels = {
    'PT': '🇧🇷 PT',
    'EN': '🇺🇸 EN',
    'ES': '🇪🇸 ES'
  };

  return (
    <section className="flex flex-col md:flex-row items-center md:items-start gap-md glass-panel rounded-[16px] p-md relative">
      <button 
        onClick={toggleLanguage}
        className="absolute top-4 right-4 bg-white/40 hover:bg-white/60 border border-slate-200 shadow-sm text-slate-800 text-[10px] font-bold px-2 py-1 rounded-md transition-colors backdrop-blur-sm"
      >
        {langLabels[lang]}
      </button>

      <img 
        className="w-24 h-24 rounded-full object-cover border-2 border-white/80 shadow-md" 
        alt="Foto de perfil" 
        src={fotoPerfil}
      />
      <div className="flex-1 text-center md:text-left mt-2 md:mt-0">
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-[24px] md:text-[32px] text-on-background font-bold">Marina Oliveira</h1>
        <div className="font-body-md text-[14px] md:text-[16px] text-on-surface-variant mt-xs leading-relaxed">
          <p className="inline-block md:block">34 {t('age')} • {t('weight')} <strong>72kg</strong> • {t('height')} <strong>1.65m</strong></p>
          <p className="mt-1">{t('bloodType')} <strong className="text-primary text-[18px]">O+</strong></p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-sm mt-sm">
          <span className="inline-flex items-center px-3 py-1 rounded-full glass-error text-error-container-text font-label-sm text-[12px] gap-1 text-on-error-container">
            <span className="material-symbols-outlined text-[16px] icon-fill text-error">warning</span>
            <span className="font-bold">{t('allergy')}</span>
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full glass-panel-inner text-primary font-label-sm text-[12px] gap-1 border-primary/20">
            <span className="material-symbols-outlined text-[16px] text-primary">bloodtype</span>
            <span className="font-bold">{t('donor')}</span>
          </span>
        </div>
      </div>
    </section>
  );
}