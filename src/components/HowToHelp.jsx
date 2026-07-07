import React from 'react';

export default function HowToHelp() {
  return (
    <section className="glass-panel rounded-[16px] p-md border-l-4 border-l-tertiary-container shadow-sm" id="how-to-help">
      <div className="flex items-center gap-sm mb-sm pb-sm border-b border-white/40">
        <span className="material-symbols-outlined text-tertiary-container icon-fill drop-shadow-sm">support</span>
        <h2 className="font-headline-md text-[20px] font-semibold text-on-background">Como Ajudar</h2>
      </div>
      
      <div className="space-y-sm">
        <div className="p-sm bg-white/60 rounded-[8px] border border-white/60">
          <div className="flex items-center gap-2 mb-1">
            <span className="material-symbols-outlined text-primary text-[20px] icon-fill">check_circle</span>
            <p className="font-label-md text-[15px] text-on-background font-bold">Se estiver consciente:</p>
          </div>
          <p className="font-label-sm text-[14px] text-on-surface-variant ml-[28px]">Oferecer açúcar, suco ou alimento doce.</p>
        </div>
        
        <div className="p-sm glass-error rounded-[8px] border border-red-200/50">
          <div className="flex items-center gap-2 mb-1">
            <span className="material-symbols-outlined text-error text-[20px] icon-fill">cancel</span>
            <p className="font-label-md text-[15px] text-error font-bold">Se confusa, desmaiada ou com convulsão:</p>
          </div>
          <p className="font-label-sm text-[14px] text-error ml-[28px] font-medium">NÃO oferecer nada pela boca (alto risco de asfixia).</p>
        </div>
      </div>
    </section>
  );
}