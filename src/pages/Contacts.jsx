import React from 'react';
import { useLanguage } from '../LanguageContext';

export default function Contacts() {
  const { t } = useLanguage();

  return (
    <section id="contacts-info" className="grid grid-cols-1 md:grid-cols-2 gap-md animate-in">
      <div className="glass-panel rounded-[16px] p-md h-full">
        <div className="flex items-center gap-sm mb-md pb-sm border-b border-white/40">
          <span className="material-symbols-outlined text-primary-container icon-fill drop-shadow-sm">group</span>
          <h2 className="font-headline-md text-[20px] font-semibold text-on-background">{t('familyContactsTitle')}</h2>
        </div>
        <div className="space-y-sm">
          <div className="flex items-center justify-between p-sm glass-panel-inner rounded-[8px] border-l-4 border-l-primary">
            <div>
              <p className="font-label-md text-[16px] text-on-background font-bold">Luciana Soares</p>
              <p className="font-label-sm text-[13px] text-primary mt-0.5 font-semibold">{t('motherContact')}</p>
            </div>
            <a href="tel:999999999" className="w-12 h-12 flex items-center justify-center rounded-full glass-btn-primary text-white hover:bg-primary/90 shadow-md transition-transform active:scale-95">
              <span className="material-symbols-outlined text-[24px]">call</span>
            </a>
          </div>
          <div className="flex items-center justify-between p-sm glass-panel-inner rounded-[8px] border-l-4 border-l-secondary">
            <div>
              <p className="font-label-md text-[16px] text-on-background font-bold">Roberto Soares</p>
              <p className="font-label-sm text-[13px] text-secondary mt-0.5 font-semibold">{t('fatherContact')}</p>
            </div>
            <a href="tel:999999998" className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary text-white hover:bg-secondary/90 shadow-md transition-transform active:scale-95">
              <span className="material-symbols-outlined text-[24px]">call</span>
            </a>
          </div>
        </div>
      </div>

      <div className="glass-panel rounded-[16px] p-md h-full">
        <div className="flex items-center gap-sm mb-md pb-sm border-b border-white/40">
          <span className="material-symbols-outlined text-tertiary-container icon-fill drop-shadow-sm">clinical_notes</span>
          <h2 className="font-headline-md text-[20px] font-semibold text-on-background">{t('medicalContactsTitle')}</h2>
        </div>
        <div className="space-y-sm">
          <div className="flex items-center justify-between p-sm glass-panel-inner rounded-[8px]">
            <div>
              <p className="font-label-md text-[15px] text-on-background font-semibold">Dr. Carlos Mendes</p>
              <p className="font-label-sm text-[12px] text-on-surface-variant mt-0.5 font-medium">{t('doctorSpecialty')}</p>
            </div>
            <a href="tel:888888888" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/40 text-primary hover:bg-white/60 border border-primary/20 shadow-sm transition-colors">
              <span className="material-symbols-outlined text-[20px]">call</span>
            </a>
          </div>
          <div className="flex items-center justify-between p-sm bg-gradient-to-r from-emerald-50 to-emerald-100/50 rounded-[8px] border border-emerald-200">
            <div>
              <p className="font-label-md text-[15px] text-emerald-900 font-bold">{t('insuranceCentral')}</p>
              <p className="font-label-sm text-[12px] text-emerald-700 mt-0.5 font-medium">{t('insuranceDesc')}</p>
            </div>
            <a href="tel:08009420011" className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm transition-colors">
              <span className="material-symbols-outlined text-[20px]">call</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
