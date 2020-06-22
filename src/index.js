import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { GlobalStyle } from 'components';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import App from './App';
import store from './store';

const rootContainer = document.getElementById('root');

if (rootContainer) {
  render(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <GlobalStyle />
        <App />
      </I18nextProvider>
    </Provider>,
    rootContainer
  );
}