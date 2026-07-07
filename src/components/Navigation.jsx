import React from 'react';
import { NavLink } from 'react-router-dom';
import GetcareLogo from './GetcareLogo';
import { useLanguage } from '../LanguageContext';

export default function Navigation() {
  const { t } = useLanguage();

  const getDesktopClass = ({ isActive }) =>
    `flex items-center gap-sm px-md py-sm rounded-[8px] font-label-md text-[14px] transition-colors font-semibold shadow-sm ${
      isActive
        ? 'glass-btn-primary text-white hover:bg-primary/90'
        : 'text-on-background hover:bg-white/40'
    }`;

  const getMobileClass = ({ isActive }) =>
    `flex flex-col items-center justify-center rounded-full px-lg py-xs transition-colors shadow-sm ${
      isActive
        ? 'glass-btn-primary text-white'
        : 'text-on-background hover:bg-white/40'
    }`;

  return (
    <>
      {/* Top App Bar (Mobile) */}
      <header className="md:hidden flex justify-between items-center w-full px-container-padding py-sm glass-panel border-b border-white/50 sticky top-0 z-40">
        <GetcareLogo />
      </header>

      {/* Top Navigation App Bar (Desktop/Tablet) */}
      <header className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 glass-panel border-r border-white/50 p-container-padding z-50">
        <div className="mb-xl">
          <GetcareLogo />
        </div>
        <nav className="flex flex-col gap-sm flex-1">
          <NavLink to="/" className={getDesktopClass}>
            <span className="material-symbols-outlined icon-fill">emergency</span>
            {t('emergency')}
          </NavLink>
          <NavLink to="/medical-info" className={getDesktopClass}>
            <span className="material-symbols-outlined">clinical_notes</span>
            {t('medicalInfo')}
          </NavLink>
          <NavLink to="/contacts" className={getDesktopClass}>
            <span className="material-symbols-outlined">contact_phone</span>
            {t('contacts')}
          </NavLink>
        </nav>
      </header>

      {/* Bottom Navigation Bar (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-md pb-md pt-sm bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] rounded-t-[24px]">
        <NavLink to="/" className={getMobileClass}>
          <span className="material-symbols-outlined icon-fill">emergency</span>
          <span className="font-label-sm text-[12px] mt-1 font-medium">{t('emergency')}</span>
        </NavLink>
        <NavLink to="/medical-info" className={getMobileClass}>
          <span className="material-symbols-outlined">clinical_notes</span>
          <span className="font-label-sm text-[12px] mt-1 font-medium">{t('medicalInfo')}</span>
        </NavLink>
        <NavLink to="/contacts" className={getMobileClass}>
          <span className="material-symbols-outlined">contact_phone</span>
          <span className="font-label-sm text-[12px] mt-1 font-medium">{t('contacts')}</span>
        </NavLink>
      </nav>
    </>
  );
}