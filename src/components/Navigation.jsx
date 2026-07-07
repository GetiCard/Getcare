import React from 'react';

export default function Navigation() {
  return (
    <>
      {/* Top App Bar (Mobile) */}
      <header className="md:hidden flex justify-between items-center w-full px-container-padding py-sm glass-panel border-b border-white/50 sticky top-0 z-40">
        <div className="flex items-center gap-xs">
          <span className="material-symbols-outlined icon-fill text-primary">medical_services</span>
          <span className="font-headline-md text-[20px] font-bold text-primary">GetCare</span>
        </div>
      </header>

      {/* Top Navigation App Bar (Desktop/Tablet) */}
      <header className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 glass-panel border-r border-white/50 p-container-padding z-50">
        <div className="flex items-center gap-sm mb-xl">
          <span className="material-symbols-outlined icon-fill text-primary text-[32px]">medical_services</span>
          <span className="font-headline-md text-[20px] text-primary font-bold">GetCare</span>
        </div>
        <nav className="flex flex-col gap-sm flex-1">
          <a href="#" className="flex items-center gap-sm px-md py-sm glass-btn-primary text-white rounded-[8px] font-label-md text-[14px] transition-colors hover:bg-primary/90 shadow-sm font-semibold">
            <span className="material-symbols-outlined icon-fill">emergency</span>
            Emergency
          </a>
          <a href="#" className="flex items-center gap-sm px-md py-sm text-on-background rounded-[8px] font-label-md text-[14px] transition-colors hover:bg-white/40 font-semibold">
            <span className="material-symbols-outlined">clinical_notes</span>
            Medical Info
          </a>
          <a href="#" className="flex items-center gap-sm px-md py-sm text-on-background rounded-[8px] font-label-md text-[14px] transition-colors hover:bg-white/40 font-semibold">
            <span className="material-symbols-outlined">contact_phone</span>
            Contacts
          </a>
        </nav>
      </header>

      {/* Bottom Navigation Bar (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-md pb-md pt-sm glass-panel border-t border-white/50 shadow-lg rounded-t-[16px]">
        <a href="#" className="flex flex-col items-center justify-center glass-btn-primary text-white rounded-full px-lg py-xs transition-transform shadow-sm">
          <span className="material-symbols-outlined icon-fill">emergency</span>
          <span className="font-label-sm text-[12px] mt-1 font-medium">Emergency</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center text-on-background hover:bg-white/40 px-lg py-xs rounded-full transition-colors">
          <span className="material-symbols-outlined">clinical_notes</span>
          <span className="font-label-sm text-[12px] mt-1 font-medium">Medical Info</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center text-on-background hover:bg-white/40 px-lg py-xs rounded-full transition-colors">
          <span className="material-symbols-outlined">contact_phone</span>
          <span className="font-label-sm text-[12px] mt-1 font-medium">Contacts</span>
        </a>
      </nav>
    </>
  );
}