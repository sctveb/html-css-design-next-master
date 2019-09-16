import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChartBar, faCogs, faRocket, faBars } from '@fortawesome/free-solid-svg-icons';
class Home extends Component {    
    render() {
        return (
            <React.Fragment>
                <Head>
                    <title>LOGGER - 당신을 위한 라이프로그</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
                    <link rel="stylesheet" href="/static/stylesheet/style.css" />
                    <script src="https://kit.fontawesome.com/8e48b01324.js"></script>
                </Head>               

                <section className="conA">
                    <div className="container">
                        <img src="/static/image/logo.svg" alt="" />
                        <h1>LOGGER</h1>
                        <p>맛있고 즐거운 라이프로그</p>
                        {/* <Link href="/"> */}
                        <a href="https://www.youtube.com/channel/UC0aKwoKNeqBaUwiEXmkQaGQ">지금 바로 시작</a>
                        {/* </Link> */}
                    </div>
                </section>


                <section className="conB">
                    <div className="container">
                        <div className="text">
                            <span className="icon"><FontAwesomeIcon icon={faChartBar} /></span>
                            <h2>라이프로그란?</h2>
                            <p>일상의 이런저런 것들을 기록하다 보면 보이지 않던 소중한 것들이 보입니다.</p>
                            <Link href="/">
                                <a>MORE... <FontAwesomeIcon icon={faChevronRight} /></a>
                            </Link>
                        </div>
                        <div className="text">
                            <span className="icon"><FontAwesomeIcon icon={faCogs} /></span>
                            <h2>스마트폰이 있다면</h2>
                            <p>스마스폰이 있다면 언제라도 라이프로그를 시작할 수 있습니다.</p>
                            <Link href="/">
                                <a>MORE... <FontAwesomeIcon icon={faChevronRight} /></a>
                            </Link>
                        </div>
                        <div className="text">
                            <span className="icon"><FontAwesomeIcon icon={faRocket} /></span>
                            <h2>SNS와의 연동</h2>
                            <p>Twitter와 Facebook 등의 SNS와 연동해서 로그를 간단하게 공유할 수 있습니다.</p>
                            <Link href="/">
                                <a>자세한 설정 방법 살펴보기 <FontAwesomeIcon icon={faChevronRight} /></a>
                            </Link>
                        </div>
                    </div>
                </section>


                <section className="conC">
                    <div className="container">
                        <div className="photo"></div>
                        <div className="text">
                            <h2>귀찮은 설정과 데이터 관리를 하지 않아도 됩니다.</h2>
                            <p>라이프로그에서는 귀찮은 설정과 데이터 관리를 따로 하지 않아도 됩니다. 다른 애플리케이션과의 연동도 버튼 하나만 누르면 됩니다.</p>
                            <Link href="/">
                                <a>MORE... <FontAwesomeIcon icon={faChevronRight} /></a>
                            </Link>
                        </div>
                    </div>
                </section>


                <section className="conD">
                    <div className="container">
                        <div className="photo"></div>
                        <div className="text">
                            <h2>라이프로그와 함께하는 재미있는 일상 생활</h2>
                            <p>그때그때 일상을 기록하는 라이프로그, 나중에 과거의 일상을 보면 그때는 알지 못했던 다양한 즐거움이 보일 것입니다.</p>
                            <a href="#">라이프로그 살펴보기... <FontAwesomeIcon icon={faChevronRight} /></a>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Home;