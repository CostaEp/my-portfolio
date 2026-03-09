import React, { useState, useEffect } from "react";

const LanguageContext = React.createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("portfolioLanguage") || "en"
  );

  useEffect(() => {
    localStorage.setItem("portfolioLanguage", language);
    // Apply RTL orientation conditionally if Hebrew
    document.documentElement.dir = language === "he" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "he" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <div dir={language === "he" ? "rtl" : "ltr"}>{children}</div>
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
