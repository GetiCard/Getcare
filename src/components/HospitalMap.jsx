import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

export default function HospitalMap() {
  const { t } = useLanguage();
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setLoading(false);
        },
        (error) => {
          console.error("Erro ao obter localização", error);
          setLoading(false); // Mantém null para usar o fallback (Agência Marandu)
        },
        { timeout: 10000, maximumAge: 60000, enableHighAccuracy: true }
      );
    } else {
      setLoading(false);
    }
  }, []);

  // Se a localização real for obtida, usa ela. Senão, usa a Agência Marandu como fallback seguro para a apresentação.
  const mapUrl = location 
    ? `https://www.google.com/maps?q=hospitais+pronto+socorro+perto+de+${location.lat},${location.lng}&output=embed`
    : `https://www.google.com/maps?q=hospitais+pronto+socorro+perto+de+Largo+do+Carmo,+432+-+Centro,+São+Luís+-+MA,+65010-190&output=embed`;

  return (
    <div className="w-full h-48 rounded-[8px] overflow-hidden border border-white/50 shadow-inner relative">
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-sky-50 z-10">
          <span className="material-symbols-outlined animate-spin text-sky-600 text-[32px] mb-2">refresh</span>
          <span className="font-label-sm text-sky-800 font-semibold animate-pulse">{t('gettingLocation')}</span>
        </div>
      )}
      <iframe
        title="Mapa de Hospitais Próximos"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={mapUrl}
        allowFullScreen
      ></iframe>
      {location && !loading && (
        <div className="absolute bottom-2 right-2 bg-emerald-600/90 text-white px-2 py-1 rounded-[4px] font-label-sm text-[10px] font-bold shadow-sm backdrop-blur-sm flex items-center gap-1">
          <span className="material-symbols-outlined text-[12px]">my_location</span>
          {t('realGpsActive')}
        </div>
      )}
    </div>
  );
}