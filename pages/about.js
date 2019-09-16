import React, { Component } from "react";
import Head from "next/head";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <link rel="stylesheet" href="/static/stylesheet/content.css" />
        </Head>
        <article className="post">
          <div className="container">              
            <h1>LOGGER에 대해서</h1>
            <p>
              LOGGER는 라이프로그와 관련된 정보 제공, 애플리케이션 개발, 사용자 지원 등을 위해 설립된 기업입니다. 라이프로그 서비스는 사용자가 일상생활을 더 열심히 즐길 수 있게 하는 것을 목표로 하고 있습니다.
            </p>
            <p>
              최근에는 국외 데이터 센터를 활용해 국내 뿐만 아니라 해외에서도 서비스를 제공하고 있습니다.
            </p>
          </div>
        </article>
        <aside className="history">
                    <div className="container">
                        <div className="photo"></div>
                        <div className="text">
                            <h2>History</h2>
                            <table>
                              <tr>
                                <th>2010년 4월</th>
                                <td>LOGGER 설립</td>
                              </tr>
                              <tr>
                                <th>2012년 6월</th>
                                <td>온라인 매거진 창간</td>
                              </tr>
                              <tr>
                                <th>2014년 12월</th>
                                <td>해외 기업과의 제휴를 통한 온라인 데이터 공유 서비스 시작</td>
                              </tr>
                              <tr>
                                <th>2015년 1월</th>
                                <td>라이프로그 서비스 시작</td>
                              </tr>
                            </table>
                        </div>
                    </div>
                </aside>
      </React.Fragment>
    );
  }
}

export default About;
