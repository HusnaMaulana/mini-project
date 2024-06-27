import { AppProps } from "next/app";
import "../styles/global-styles.css";
import React from "react";
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  autoContrast :true,
  
});

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <>
    <MantineProvider theme={theme} defaultColorScheme="dark">
        <Component {...pageProps} />
    </MantineProvider>
    </>
  );
};

export default App;
