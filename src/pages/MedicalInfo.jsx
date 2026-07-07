import React from 'react';
import HealthInsuranceCard from '../components/HealthInsuranceCard';
import AnatomyChart from '../components/AnatomyChart';
import { useLanguage } from '../LanguageContext';

export default function MedicalInfo() {
  const { t } = useLanguage();

  return (
    <section id="medical-info" className="animate-in space-y-md">
      
      <HealthInsuranceCard />
      <AnatomyChart />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md">
        <div className="glass-panel rounded-[16px] p-md flex flex-col h-full">
          <div className="flex items-center gap-sm mb-md pb-sm border-b border-white/40">
            <span className="material-symbols-outlined text-tertiary-container icon-fill drop-shadow-sm">medical_information</span>
            <h2 className="font-headline-md text-[20px] font-semibold text-on-background">{t('risksConditions')}</h2>
          </div>
          <div className="space-y-sm flex-1">
            <div className="p-sm glass-panel-inner rounded-[8px]">
              <p className="font-label-md text-[14px] text-on-background font-semibold">{t('diabetesTitle')}</p>
              <p className="font-label-sm text-[12px] text-on-surface-variant mt-1">{t('diabetesDesc')}</p>
            </div>
            <div className="p-sm glass-panel-inner rounded-[8px]">
              <p className="font-label-md text-[14px] text-on-background font-semibold">{t('hypertensionTitle')}</p>
              <p className="font-label-sm text-[12px] text-on-surface-variant mt-1">{t('hypertensionDesc')}</p>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-[16px] p-md flex flex-col h-full">
          <div className="flex items-center gap-sm mb-md pb-sm border-b border-white/40">
            <span className="material-symbols-outlined text-tertiary icon-fill drop-shadow-sm">coronavirus</span>
            <h2 className="font-headline-md text-[20px] font-semibold text-on-background">{t('severeAllergy')}</h2>
          </div>
          <div className="space-y-sm flex-1">
            <div className="flex items-start gap-sm p-sm glass-error rounded-[8px]">
              <span className="material-symbols-outlined text-error mt-0.5 drop-shadow-sm">pill</span>
              <div>
                <p className="font-label-md text-[14px] text-on-background font-semibold">{t('penicillin')}</p>
                <p className="font-label-sm text-[12px] text-error mt-1 font-medium">{t('penicillinDesc')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-[16px] p-md flex flex-col h-full lg:col-span-2">
          <div className="flex items-center gap-sm mb-md pb-sm border-b border-white/40">
            <span className="material-symbols-outlined text-primary-container icon-fill drop-shadow-sm">medication</span>
            <h2 className="font-headline-md text-[20px] font-semibold text-on-background">{t('medicationsInUse')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
            <div className="p-sm glass-panel-inner rounded-[8px] flex items-center justify-between">
              <div>
                <p className="font-label-md text-[14px] text-on-background font-semibold">{t('insulinMed')}</p>
                <p className="font-label-sm text-[12px] text-on-surface-variant mt-1">{t('insulinMedDesc')}</p>
              </div>
              <span className="material-symbols-outlined text-secondary">vaccines</span>
            </div>
            <div className="p-sm glass-panel-inner rounded-[8px] flex items-center justify-between">
              <div>
                <p className="font-label-md text-[14px] text-on-background font-semibold">{t('losartanMed')}</p>
                <p className="font-label-sm text-[12px] text-on-surface-variant mt-1">{t('losartanMedDesc')}</p>
              </div>
              <span className="material-symbols-outlined text-secondary">prescriptions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
