import App from "next/app";
import { wrapper } from "../store/store";
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import PropTypes from 'prop-types';
import Head from 'next/head';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { ZeitProvider } from '@zeit-ui/react'

const myTheme = {
  "palette": {
    "warning": "#3AA78C"
  }
}



function MyApp(props) {

  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const store = useStore((state) => state);
  return (
    <Provider store={store}>
        <ZeitProvider theme={myTheme}>

          <React.Fragment>
      <Head>
        <title>SomonMart</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      
    <>
          <Component {...pageProps} />
           
             </>
             
      </ThemeProvider>
    </React.Fragment>
    </ZeitProvider>
    </Provider> 
    
    
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(MyApp);
