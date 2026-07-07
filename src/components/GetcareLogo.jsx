import React from 'react';

export default function GetcareLogo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
        <rect width="40" height="40" rx="12" fill="url(#paint0_linear)" />
        <path d="M20 12V28M12 20H28" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <circle cx="20" cy="20" r="14" stroke="white" strokeWidth="2" strokeOpacity="0.5" strokeDasharray="4 4" />
        <defs>
          <linearGradient id="paint0_linear" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0ea5e9" />
            <stop offset="1" stopColor="#2563eb" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-headline-md text-[22px] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">
        GetCare
      </span>
    </div>
  );
}
