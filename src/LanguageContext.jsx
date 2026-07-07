import React, { createContext, useState, useContext } from 'react';

const Dictionary = {
  PT: {
    emergency: "Emergência", medicalInfo: "Histórico", contacts: "Contatos",
    age: "anos", bloodType: "Tipo Sanguíneo:", weight: "Peso:", height: "Altura:", allergy: "Alergia a Penicilina", donor: "Doador de Órgãos",
    callSamu: "Ligar 192 (SAMU 1-Click)", sentCentral: "Dados Recebidos na Central!", sentCentralSuccess: "✓ Prontuário recebido pelo SAMU Maranhão. Iniciando chamada...", alertContacts: "Avisar Contatos de Emergência",
    howToHelp: "Instruções de Primeiros Socorros", conscious: "Se Consciente", consciousDesc: "Ofereça imediatamente açúcar, suco ou um alimento doce para reverter a hipoglicemia.", unconscious: "Se Inconsciente ou Confuso", unconsciousDesc: "NÃO ofereça nada pela boca! Há um alto risco de asfixia. Apenas aguarde o socorro.",
    severeAllergy: "Alergia Severa", penicillin: "Penicilina", penicillinDesc: "Reação anafilática severa. Choque pode ocorrer em minutos.", whereTo: "Para onde levar?", hospitalRef: "Hospital de Referência (Plano de Saúde)", coverage: "Cobertura Unimed",
    anatomyTitle: "Anatomia & Alertas 3D", systemCardio: "Sistema Cardiovascular", mildHypertension: "Hipertensão Leve", mildHypertensionDesc: "Controlada. Risco cardiovascular moderado em crises de choque.", insulinLocation: "Local de Aplicação de Insulina", insulinLocationDesc: "Braços e abdômen. Paciente usuário frequente (Diabetes Tipo 1).",
    risksConditions: "Riscos e Condições", diabetesTitle: "Diabetes Mellitus Tipo 1", diabetesDesc: "Insulino-dependente. Risco de hipoglicemia severa.", hypertensionTitle: "Hipertensão Leve", hypertensionDesc: "Controlada com medicação diária.", medicationsInUse: "Medicamentos em Uso", insulinMed: "Insulina Lantus", insulinMedDesc: "20 UI - Noite", losartanMed: "Losartana", losartanMedDesc: "50mg - Manhã",
    familyContactsTitle: "Contatos Próximos", motherContact: "Mãe - Contato de Emergência 1", fatherContact: "Pai - Contato de Emergência 2", medicalContactsTitle: "Contatos Médicos", doctorSpecialty: "Médico Especialista (Endocrinologista)", insuranceCentral: "Central Unimed Emergências", insuranceDesc: "Autorização de Atendimento",
    gettingLocation: "Obtendo localização real via GPS...", realGpsActive: "GPS Real Ativo",
    healthPlan: "Plano de Saúde", cardHolderName: "Nome do Titular", cardNumberLabel: "Carteira", accommodation: "Acomodação", accommodationType: "Apartamento", validity: "Validade"
  },
  EN: {
    emergency: "Emergency", medicalInfo: "Medical", contacts: "Contacts",
    age: "years", bloodType: "Blood Type:", weight: "Weight:", height: "Height:", allergy: "Penicillin Allergy", donor: "Organ Donor",
    callSamu: "Call 911 (1-Click Rescue)", sentCentral: "Data Received by Dispatch!", sentCentralSuccess: "✓ Medical record received by Dispatch. Calling...", alertContacts: "Alert Emergency Contacts",
    howToHelp: "First Aid Instructions", conscious: "If Conscious", consciousDesc: "Immediately offer sugar, juice, or sweet food to reverse hypoglycemia.", unconscious: "If Unconscious or Confused", unconsciousDesc: "DO NOT offer anything by mouth! High risk of choking. Wait for medics.",
    severeAllergy: "Severe Allergy", penicillin: "Penicillin", penicillinDesc: "Severe anaphylactic reaction. Shock can occur in minutes.", whereTo: "Where to take?", hospitalRef: "Preferred Hospital (Insurance)", coverage: "Unimed Coverage",
    anatomyTitle: "3D Anatomy & Alerts", systemCardio: "Cardiovascular System", mildHypertension: "Mild Hypertension", mildHypertensionDesc: "Controlled. Moderate cardiovascular risk in shock crises.", insulinLocation: "Insulin Injection Sites", insulinLocationDesc: "Arms and abdomen. Frequent user (Type 1 Diabetes).",
    risksConditions: "Risks & Conditions", diabetesTitle: "Type 1 Diabetes Mellitus", diabetesDesc: "Insulin-dependent. Severe hypoglycemia risk.", hypertensionTitle: "Mild Hypertension", hypertensionDesc: "Controlled with daily medication.", medicationsInUse: "Medications in Use", insulinMed: "Lantus Insulin", insulinMedDesc: "20 UI - Night", losartanMed: "Losartan", losartanMedDesc: "50mg - Morning",
    familyContactsTitle: "Close Contacts", motherContact: "Mother - Emergency Contact 1", fatherContact: "Father - Emergency Contact 2", medicalContactsTitle: "Medical Contacts", doctorSpecialty: "Medical Specialist (Endocrinologist)", insuranceCentral: "Unimed Emergency Central", insuranceDesc: "Care Authorization",
    gettingLocation: "Getting real GPS location...", realGpsActive: "Real GPS Active",
    healthPlan: "Health Plan", cardHolderName: "Cardholder Name", cardNumberLabel: "Card ID", accommodation: "Accommodation", accommodationType: "Private Room", validity: "Valid Thru"
  },
  ES: {
    emergency: "Emergencia", medicalInfo: "Historial Médico", contacts: "Contactos",
    age: "años", bloodType: "Grupo Sanguíneo:", weight: "Peso:", height: "Altura:", allergy: "Alergia a la Penicilina", donor: "Donante de Órganos",
    callSamu: "Llamar 192 (Rescate 1-Clic)", sentCentral: "¡Datos Recibidos en la Central!", sentCentralSuccess: "✓ Historial médico recibido por la central. Llamando...", alertContacts: "Avisar Contactos de Emergencia",
    howToHelp: "Instrucciones de Primeros Auxilios", conscious: "Si Está Consciente", consciousDesc: "Ofrezca inmediatamente azúcar, jugo o comida dulce para revertir la hipoglucemia.", unconscious: "Si Está Inconsciente o Confuso", unconsciousDesc: "¡NO ofrezca nada por la boca! Alto riesgo de asfixia. Espere a los médicos.",
    severeAllergy: "Alergia Grave", penicillin: "Penicilina", penicillinDesc: "Reacción anafiláctica grave. Puede ocurrir shock en minutos.", whereTo: "¿A dónde llevar?", hospitalRef: "Hospital de Referencia (Seguro)", coverage: "Cobertura Unimed",
    anatomyTitle: "Anatomía 3D y Alertas", systemCardio: "Sistema Cardiovascular", mildHypertension: "Hipertensión Leve", mildHypertensionDesc: "Controlada. Riesgo cardiovascular moderado en crisis de shock.", insulinLocation: "Sitio de Aplicación de Insulina", insulinLocationDesc: "Brazos y abdomen. Usuario frecuente (Diabetes Tipo 1).",
    risksConditions: "Riesgos y Condiciones", diabetesTitle: "Diabetes Mellitus Tipo 1", diabetesDesc: "Insulinodependiente. Riesgo severo de hipoglucemia.", hypertensionTitle: "Hipertensión Leve", hypertensionDesc: "Controlada con medicación diaria.", medicationsInUse: "Medicamentos en Uso", insulinMed: "Insulina Lantus", insulinMedDesc: "20 UI - Noche", losartanMed: "Losartán", losartanMedDesc: "50mg - Mañana",
    familyContactsTitle: "Contactos Cercanos", motherContact: "Madre - Contacto de Emergencia 1", fatherContact: "Padre - Contacto de Emergencia 2", medicalContactsTitle: "Contactos Médicos", doctorSpecialty: "Médico Especialista (Endocrinólogo)", insuranceCentral: "Central de Emergencias Unimed", insuranceDesc: "Autorización de Atención",
    gettingLocation: "Obteniendo ubicación GPS real...", realGpsActive: "GPS Real Activo",
    healthPlan: "Plan de Salud", cardHolderName: "Nombre del Titular", cardNumberLabel: "Tarjeta", accommodation: "Acomodación", accommodationType: "Habitación Privada", validity: "Validez"
  }
}

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('PT');
  const t = (key) => Dictionary[lang][key] || key;
  
  const toggleLanguage = () => {
    setLang(prev => {
      if (prev === 'PT') return 'EN';
      if (prev === 'EN') return 'ES';
      return 'PT';
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
