import App from "next/app";
import { wrapper } from "../store/store";
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/theme';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';



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
        

        <React.Fragment>
      <Head>
        <title>SomonMart</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
    
    </Provider> 
    
    
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(MyApp);
