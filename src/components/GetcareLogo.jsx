import React from 'react';
import logoUrl from '../assets/logo_getcare.png';

export default function GetcareLogo() {
  return (
    <div className="flex items-center">
      <img src={logoUrl} alt="Getcare Logo" className="h-10 md:h-12 object-contain drop-shadow-sm scale-110 md:scale-125 origin-left" />
    </div>
  );
}
