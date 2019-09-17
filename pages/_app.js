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
          <meta property="og:site_name" content="LOGGER" />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="라이프로그 시작하기" />
          <meta property="og:description" content="일상 생활을 기록하고 데이터로 남기는 것을 라이프로그라고 합니다." />
          <meta property="og:image" content="https://cdn.pixabay.com/photo/2012/11/28/10/16/star-clusters-67616_960_720.jpg" />
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Foot />
      </>
    );
  }
}

export default MyApps;
