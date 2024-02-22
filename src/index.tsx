import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import global_es from "./Translations/es/global_es.json";
import global_en from "./Translations/en/global_en.json";

// Inicializa i18n antes de renderizar la aplicación
i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    },
  }
});

// Pasa la instancia de i18n al componente I18nextProvider
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);