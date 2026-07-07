import React from 'react';
import Navigation from '../components/Navigation';
import ProfileHeader from '../components/ProfileHeader';
import ActionButtons from '../components/ActionButtons';
import HowToHelp from '../components/HowToHelp';
import HospitalMap from '../components/HospitalMap';

export default function EmergencyProfile() {
  return (
    <div className="mesh-bg text-on-background min-h-screen flex flex-col md:flex-row font-body-md">
      <Navigation />

      {/* Main Content Canvas - Padding inferior ajustado (pb-32) para a barra não sobrepor o conteúdo no mobile */}
      <main className="flex-1 md:ml-64 w-full max-w-4xl mx-auto p-container-padding md:p-xl space-y-lg relative z-10 pb-32 md:pb-8">
        
        <ProfileHeader />
        
        <section id="emergency-info" className="space-y-lg">
          <ActionButtons />
          <HowToHelp />
        </section>

        {/* Informações Médicas */}
        <section id="medical-info" className="grid grid-cols-1 lg:grid-cols-2 gap-md pt-4">
          <div className="glass-panel rounded-[16px] p-md flex flex-col h-full">
            <div className="flex items-center gap-sm mb-md pb-sm border-b border-white/40">
              <span className="material-symbols-outlined text-tertiary-container icon-fill drop-shadow-sm">medical_information</span>
              <h2 className="font-headline-md text-[20px] font-semibold text-on-background">Riscos e Condições</h2>
            </div>
            <div className="space-y-sm flex-1">
              <div className="p-sm glass-panel-inner rounded-[8px]">
                <p className="font-label-md text-[14px] text-on-background font-semibold">Diabetes Mellitus Tipo 1 (Exemplo)</p>
                <p className="font-label-sm text-[12px] text-on-surface-variant mt-1">Insulino-dependente. Risco de hipoglicemia severa.</p>
              </div>
              <div className="p-sm glass-panel-inner rounded-[8px]">
                <p className="font-label-md text-[14px] text-on-background font-semibold">Hipertensão Leve (Exemplo)</p>
                <p className="font-label-sm text-[12px] text-on-surface-variant mt-1">Controlada com medicação diária.</p>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-[16px] p-md flex flex-col h-full">
            <div className="flex items-center gap-sm mb-md pb-sm border-b border-white/40">
              <span className="material-symbols-outlined text-tertiary icon-fill drop-shadow-sm">coronavirus</span>
              <h2 className="font-headline-md text-[20px] font-semibold text-on-background">Alergias Severas</h2>
            </div>
            <div className="space-y-sm flex-1">
              <div className="flex items-start gap-sm p-sm glass-error rounded-[8px]">
                <span className="material-symbols-outlined text-error mt-0.5 drop-shadow-sm">pill</span>
                <div>
                  <p className="font-label-md text-[14px] text-on-background font-semibold">Penicilina</p>
                  <p className="font-label-sm text-[12px] text-error mt-1 font-medium">Reação anafilática severa.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-[16px] p-md flex flex-col h-full lg:col-span-2">
            <div className="flex items-center gap-sm mb-md pb-sm border-b border-white/40">
              <span className="material-symbols-outlined text-primary-container icon-fill drop-shadow-sm">medication</span>
              <h2 className="font-headline-md text-[20px] font-semibold text-on-background">Medicamentos em Uso</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
              <div className="p-sm glass-panel-inner rounded-[8px] flex items-center justify-between">
                <div>
                  <p className="font-label-md text-[14px] text-on-background font-semibold">Insulina Lantus</p>
                  <p className="font-label-sm text-[12px] text-on-surface-variant mt-1">20 UI - Noite</p>
                </div>
                <span className="material-symbols-outlined text-secondary">vaccines</span>
              </div>
              <div className="p-sm glass-panel-inner rounded-[8px] flex items-center justify-between">
                <div>
                  <p className="font-label-md text-[14px] text-on-background font-semibold">Losartana</p>
                  <p className="font-label-sm text-[12px] text-on-surface-variant mt-1">50mg - Manhã</p>
                </div>
                <span className="material-symbols-outlined text-secondary">prescriptions</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contatos, Plano e Mapa */}
        <section id="contacts-info" className="grid grid-cols-1 md:grid-cols-2 gap-md pt-4">
          <div className="glass-panel rounded-[16px] p-md">
            <div className="flex items-center gap-sm mb-md pb-sm border-b border-white/40">
              <span className="material-symbols-outlined text-primary-container icon-fill drop-shadow-sm">group</span>
              <h2 className="font-headline-md text-[20px] font-semibold text-on-background">Contatos</h2>
            </div>
            <div className="space-y-sm">
              <div className="flex items-center justify-between p-sm glass-panel-inner rounded-[8px]">
                <div>
                  <p className="font-label-md text-[14px] text-on-background font-semibold">Luciana</p>
                  <p className="font-label-sm text-[12px] text-on-surface-variant mt-1 font-medium">Contato de Emergência</p>
                </div>
                <button className="w-10 h-10 flex items-center justify-center rounded-full glass-btn-primary text-white hover:bg-primary/90 shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </button>
              </div>
            </div>
          </div>
          
          <HospitalMap />
        </section>
      </main>
    </div>
  );
}