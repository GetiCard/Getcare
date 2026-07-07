import React from 'react';

export default function HospitalMap() {
  return (
    <section className="glass-panel rounded-[16px] p-md" id="hospitals">
      <div className="flex items-center gap-sm mb-md pb-sm border-b border-white/40">
        <span className="material-symbols-outlined text-primary-container icon-fill drop-shadow-sm">location_on</span>
        <h2 className="font-headline-md text-[20px] font-semibold text-on-background">Emergência Próxima</h2>
      </div>
      <div className="w-full h-48 rounded-[8px] overflow-hidden border border-white/50 shadow-inner">
        <iframe
          title="Mapa de Hospitais Próximos"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps?q=hospital+pronto+socorro+São+José+de+Ribamar&output=embed"
          allowFullScreen
        ></iframe>
      </div>
      <p className="font-label-sm text-[12px] text-on-surface-variant mt-2 text-center">
        Buscando unidades de pronto atendimento baseadas na localização.
      </p>
    </section>
  );
}