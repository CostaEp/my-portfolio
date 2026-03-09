import React, { useContext } from "react";
import LanguageContext from "../../contexts/LanguageContext";
import emoji from "react-easy-emoji";
import "./ToggleSwitchLang.scss";

const ToggleSwitchLang = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <label className="switch-lang">
      <input
        type="checkbox"
        checked={language === "he"}
        onChange={toggleLanguage}
      />
      <span className="slider-lang round">
        <span className="emoji-lang">{language === "he" ? emoji("🇮🇱") : emoji("🇺🇸")}</span>
      </span>
    </label>
  );
};

export default ToggleSwitchLang;
