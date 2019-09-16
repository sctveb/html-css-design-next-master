import React from "react";
import App from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Foot from "../components/Foot";

class MyApps extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>LOGGER - 당신을 위한 라이프로그</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css" />
          <link rel="stylesheet" href="/static/stylesheet/style.css" />
          <script src="https://kit.fontawesome.com/8e48b01324.js"></script>
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Foot />
      </>
    );
  }
}

export default MyApps;
