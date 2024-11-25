'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

type Translations = {
  [key: string]: string;
};

export type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations: Record<Language, Translations> = {
  fr: {
    'dashboard.meddic.metrics': 'Métriques',
    'dashboard.meddic.economicBuyer': 'Décideur Économique',
    'dashboard.meddic.decisionCriteria': 'Critères de Décision',
    'dashboard.meddic.decisionProcess': 'Processus de Décision',
    'dashboard.meddic.identifyPain': 'Identification de la Douleur',
    'dashboard.meddic.champion': 'Champion',
    'common.language': 'Langue',
    'common.profile': 'Profil',
    'common.logout': 'Déconnexion',
    'header.logout': 'Déconnexion'
  },
  en: {
    'dashboard.meddic.metrics': 'Metrics',
    'dashboard.meddic.economicBuyer': 'Economic Buyer',
    'dashboard.meddic.decisionCriteria': 'Decision Criteria',
    'dashboard.meddic.decisionProcess': 'Decision Process',
    'dashboard.meddic.identifyPain': 'Identify Pain',
    'dashboard.meddic.champion': 'Champion',
    'common.language': 'Language',
    'common.profile': 'Profile',
    'common.logout': 'Logout',
    'header.logout': 'Logout'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }): JSX.Element {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
