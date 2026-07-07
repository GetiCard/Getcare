import React from 'react';

export default function ActionButtons() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-md">
      <button className="flex items-center justify-center gap-sm glass-btn-error text-white rounded-[8px] p-md font-label-md text-[14px] shadow-sm hover:bg-error/90 transition-all w-full group active:scale-95 font-semibold">
        <span className="material-symbols-outlined icon-fill group-hover:animate-pulse">local_hospital</span>
        Ligar 192 (SAMU)
      </button>
      <button className="flex items-center justify-center gap-sm glass-btn-primary text-white rounded-[8px] p-md font-label-md text-[14px] shadow-sm hover:bg-primary/90 transition-all w-full active:scale-95 font-semibold">
        <span className="material-symbols-outlined icon-fill">emergency_share</span>
        Avisar Contatos de Emergência
      </button>
    </section>
  );
}