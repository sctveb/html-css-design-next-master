import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";

class Content extends Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <link rel="stylesheet" href="/static/stylesheet/content.css" />
        </Head>
        <article className="post">
          <div className="container">
              <div className="bread">
                  <ol>
                      <li><Link href="/"><a>TOP</a></Link></li>
                      <li><Link href="/"><a>기사 목록</a></Link></li>
                  </ol>
              </div>
            <h1>라이프로그 시작하기</h1>
            <img src="/static/image/life.jpg" alt="" />
            <p>
              일상 생활을 기록하고 데이터로 남기는 것을 "라이프로그"라고 합니다.
              블로그에 작성하는 일기, 매일 먹는 것을 사진으로 찍어 남기는 것도
              라이프로그의 일종입니다. 기록을 쉽게 해줄 수 있는 온라인 서비스와
              애플리케이션도 있습니다.
            </p>
            <p>
              직접 기록하는 것이 귀찮은 경우가 있을 수 있는데요, 스마트폰과
              웨어러블 장비를 사용하면 위치 정보와 수면 시간 등을 자동으로
              기록할 수 있습니다. 체중계 등의 측정 장비로 클라우드와 연동되어
              다양한 데이터를 자동으로 기록해줍니다. 다양한 데이터를 자동으로
              기록하고 관리하는 시대가 된 것입니다.
            </p>
          </div>
        </article>
      </React.Fragment>
    );
  }
}

export default Content;
