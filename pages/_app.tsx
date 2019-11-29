import App from 'next/app'
import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
}

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Amatic+SC&display=swap');

    html, body {
        font-family: "Amatic SC";
        margin: 0;
        padding: 0;

    }
`


export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <>
                <GlobalStyle />
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </>

        )
    }
}