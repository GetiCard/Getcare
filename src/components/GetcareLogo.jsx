import React from 'react';
import logoUrl from '../assets/logo_getcare.png';

export default function GetcareLogo() {
  return (
    <div className="flex items-center">
      <img src={logoUrl} alt="Getcare Logo" className="h-8 md:h-10 object-contain drop-shadow-sm" />
    </div>
  );
}
