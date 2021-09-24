import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader'; 
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import es from './translations/es/global.json';
import en from './translations/en/global.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: {
      global: es
    },
    en: {
      global: en
    }
  }
})

WebFont.load({
    google: {
      families: ['Roboto:400,500,700', 'Ubuntu Condensed']
    }
  });

ReactDOM.render(<I18nextProvider i18n={i18next}><App /></I18nextProvider>,document.getElementById('root'));