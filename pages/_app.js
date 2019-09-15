import React from 'react';
import App from 'next/app';

class MyApps extends App {
    render() {
        const { Component, pageProps } = this.props;
        return <Component {...pageProps} />
    }
}

export default MyApps;