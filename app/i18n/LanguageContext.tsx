"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, TranslationContent } from './translations';

interface LanguageContextType {
  language: string;
  t: TranslationContent;
  changeLanguage: (lang: string) => void;
}

const defaultContext: LanguageContextType = {
  language: 'pt',
  t: translations.pt,
  changeLanguage: () => {},
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState('pt');
  
  const changeLanguage = (lang: string) => {
    if (translations[lang]) {
      setLanguage(lang);
    }
  };
  
  const value = {
    language,
    t: translations[language],
    changeLanguage,
  };
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}; 