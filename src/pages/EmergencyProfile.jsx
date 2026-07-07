import React from 'react';
import ActionButtons from '../components/ActionButtons';
import HowToHelp from '../components/HowToHelp';
import HospitalMap from '../components/HospitalMap';
import { useLanguage } from '../LanguageContext';

export default function EmergencyProfile() {
  const { t } = useLanguage();

  return (
    <section id="emergency-info" className="space-y-lg animate-in">
      <ActionButtons />
      <HowToHelp />
      
      <div className="glass-panel rounded-[16px] p-md flex flex-col h-full border-l-4 border-l-error mt-4 shadow-sm">
        <div className="flex items-center gap-sm mb-sm pb-sm border-b border-white/40">
          <span className="material-symbols-outlined text-error icon-fill drop-shadow-sm">coronavirus</span>
          <h2 className="font-headline-md text-[20px] font-semibold text-on-background">{t('severeAllergy')}</h2>
        </div>
        <div className="space-y-sm">
          <div className="flex items-start gap-sm p-sm glass-error rounded-[8px]">
            <span className="material-symbols-outlined text-error mt-0.5 drop-shadow-sm">pill</span>
            <div>
              <p className="font-label-md text-[14px] text-on-background font-semibold">{t('penicillin')}</p>
              <p className="font-label-sm text-[12px] text-error mt-1 font-medium">{t('penicillinDesc')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-panel rounded-[16px] p-md flex flex-col h-full border-l-4 border-l-primary mt-4 shadow-sm">
        <div className="flex flex-col mb-4">
          <div className="flex items-center gap-sm pb-sm border-b border-white/40 mb-3">
            <span className="material-symbols-outlined text-primary icon-fill drop-shadow-sm">local_hospital</span>
            <h2 className="font-headline-md text-[20px] font-semibold text-on-background">{t('whereTo')}</h2>
          </div>
          
          <div className="p-sm bg-white/50 rounded-[8px] flex items-start gap-3 border border-primary/20">
            <span className="material-symbols-outlined text-primary text-[28px] mt-1 icon-fill">domain</span>
            <div>
              <p className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider font-semibold mb-0.5">{t('hospitalRef')}</p>
              <p className="font-headline-sm text-[18px] text-on-background font-bold">Hospital São Domingos</p>
              <p className="font-label-sm text-[13px] text-primary mt-1 font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">health_and_safety</span>
                {t('coverage')}
              </p>
            </div>
          </div>
        </div>

        <HospitalMap />
      </div>

    </section>
  );
}