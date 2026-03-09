import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import { LanguageProvider } from "./contexts/LanguageContext";
import { PortfolioProvider } from "./contexts/PortfolioContext";

function App() {
  return (
    <LanguageProvider>
      <PortfolioProvider>
        <div>
          <Main />
        </div>
      </PortfolioProvider>
    </LanguageProvider>
  );
}

export default App;
