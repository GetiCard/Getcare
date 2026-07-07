import React from 'react';
import { useLanguage } from '../LanguageContext';

export default function AnatomyChart() {
  const { t } = useLanguage();

  return (
    <div className="glass-panel rounded-[16px] p-md flex flex-col h-full lg:col-span-2">
      <div className="flex items-center gap-sm mb-md pb-sm border-b border-white/40">
        <span className="material-symbols-outlined text-purple-600 icon-fill drop-shadow-sm">body_system</span>
        <h2 className="font-headline-md text-[20px] font-semibold text-on-background">{t('anatomyTitle')}</h2>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-br from-purple-50/50 to-white/30 rounded-xl p-6 border border-purple-100 relative overflow-hidden">
        
        {/* Wireframe Humano Simples (Estilo Claro/Moderno) */}
        <div className="relative w-28 h-56 flex-shrink-0">
          
          <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-slate-300 drop-shadow-sm">
            <path d="M50 40C61.0457 40 70 31.0457 70 20C70 8.9543 61.0457 0 50 0C38.9543 0 30 8.9543 30 20C30 31.0457 38.9543 40 50 40Z" fill="currentColor"/>
            <path d="M78 45H22C15.3726 45 10 50.3726 10 57V110C10 115.523 14.4772 120 20 120C25.5228 120 30 115.523 30 110V70H35V190C35 195.523 39.4772 200 45 200C50.5228 200 55 195.523 55 190V130H65V190C65 195.523 69.4772 200 75 200C80.5228 200 85 195.523 85 190V70H90V110C90 115.523 94.4772 120 100 120C105.523 120 110 115.523 110 110V57C110 50.3726 104.627 45 98 45H78Z" fill="currentColor"/>
          </svg>
          
          {/* Alerta 1: Coração (Hipertensão) */}
          <div className="absolute top-[60px] left-[55px] w-4 h-4 bg-red-500 rounded-full animate-ping opacity-60 z-30"></div>
          <div className="absolute top-[60px] left-[55px] w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-md z-40 group/alert cursor-pointer flex items-center justify-center">
             {/* Tooltip Hover Claro */}
             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-slate-800 text-[11px] font-bold py-1 px-2 rounded-md whitespace-nowrap opacity-0 group-hover/alert:opacity-100 transition-opacity pointer-events-none shadow-lg border border-slate-200">
               {t('systemCardio')}
               <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-r border-b border-slate-200"></div>
             </div>
          </div>

          {/* Alerta 2: Braço (Insulina) */}
          <div className="absolute top-[85px] left-[20px] w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-60 z-30"></div>
          <div className="absolute top-[85px] left-[20px] w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-md z-40 group/alert cursor-pointer"></div>
        </div>

        {/* Painel de Dados Simples e Claro */}
        <div className="flex-1 space-y-4 w-full relative z-10">
          <div className="p-4 bg-white/80 rounded-xl shadow-sm border-l-4 border-l-red-500 backdrop-blur-sm relative overflow-hidden group/card hover:bg-white/90 transition-colors">
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-red-500 text-[18px]">monitor_heart</span>
              <p className="text-[15px] font-bold text-slate-800 tracking-wide">{t('mildHypertension')}</p>
            </div>
            <p className="text-[13px] text-slate-600 mt-1 leading-relaxed">{t('mildHypertensionDesc')}</p>
          </div>
          
          <div className="p-4 bg-white/80 rounded-xl shadow-sm border-l-4 border-l-blue-500 backdrop-blur-sm relative overflow-hidden group/card hover:bg-white/90 transition-colors">
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-blue-500 text-[18px]">vaccines</span>
              <p className="text-[15px] font-bold text-slate-800 tracking-wide">{t('insulinLocation')}</p>
            </div>
            <p className="text-[13px] text-slate-600 mt-1 leading-relaxed">{t('insulinLocationDesc')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
