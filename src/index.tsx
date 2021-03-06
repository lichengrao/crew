import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from 'routes';
import { reportWebVitals } from 'core';
import { GlobalStyles, theme } from 'styles';
import Layout from 'layout';
import { CurrentUserProvider } from 'hooks';

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <CurrentUserProvider>
          <Layout>
            <Routes />
          </Layout>
        </CurrentUserProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
