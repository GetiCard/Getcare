import React from 'react';

export default function ProfileHeader() {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start gap-md glass-panel rounded-[16px] p-md">
      <img 
        className="w-24 h-24 rounded-full object-cover border-2 border-white/80 shadow-md" 
        alt="Foto de perfil" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuARogoFLuUU0XligdVtd4kPcjjtZ3E_VfbqW7GYWijecJMgRj3dSbcmoa5QaPdka-lI2AbOXCYX994NCgrX0eft-03mFvtCzmRzzo4_kp2hoWbvJzDPt44J31Tt67xuh2gQXinEm1rQoLvUg44jZhdgkr7vCflNhdWfwDzPyQZueI8eDcC_KkEhkloWxcVhOwu0-z_dty_40Rj0UYolnw2ucEPJ_Pty7A4nG_UEkyQq9hDHZu81q5rTbw"
      />
      <div className="flex-1 text-center md:text-left">
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-[24px] md:text-[32px] text-on-background font-bold">Pedro Soares</h1>
        <p className="font-body-md text-[16px] text-on-surface-variant mt-xs">
          23 anos • Tipo Sanguíneo: <strong className="text-primary">O+</strong>
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-sm mt-sm">
          <span className="inline-flex items-center px-3 py-1 rounded-full glass-error text-error-container-text font-label-sm text-[12px] gap-1 text-on-error-container">
            <span className="material-symbols-outlined text-[16px] icon-fill text-error">warning</span>
            <span className="font-bold">Alergia a Penicilina</span>
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full glass-panel-inner text-primary font-label-sm text-[12px] gap-1 border-primary/20">
            <span className="material-symbols-outlined text-[16px] text-primary">bloodtype</span>
            <span className="font-bold">Doador de Órgãos</span>
          </span>
        </div>
      </div>
    </section>
  );
}