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

        <aside className="related">
          <ul>
            <li>
              <a href="#">
                <div className="photo" style={{backgroundImage: "url(/static/image/p01.jpg)"}}></div>
                <div className="text">
                  <h2>노란 꽃으로 꾸며보기</h2>
                  <p>노란 꽃으로 방을 꾸미면 좋은 일이 있을지도 몰라요. 이유는...</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="photo" style={{backgroundImage: "url(/static/image/p02.jpg)"}}></div>
                <div className="text">
                  <h2>야채 키우기 일기</h2>
                  <p>최근 키우고 있는 야채들이 무럭무럭 자라고 있어요. 재미로 야채 키우는 것을 일기로 작성해보겠습니다.</p>
                </div>
              </a>
            </li>            
            <li>
              <a href="#">
                <div className="photo" style={{backgroundImage: "url(/static/image/p03.jpg)"}}></div>
                <div className="text">
                  <h2>딸기 맛있게 먹는 방법</h2>
                  <p>가끔 딸기를 여러 곳에서 많이 받아 처리가 힘들었는데요, 이제 괜찮아요. 다양한 방법으로 맛있게 요리할 수 있습니다.</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="photo" style={{backgroundImage: "url(/static/image/p04.jpg)"}}></div>
                <div className="text">
                  <h2>악기 다루기</h2>
                  <p>취미로 피아노와 기타 같은 악기를 다뤄보는 것이 어떨까요?</p>
                </div>
              </a>
            </li>       
          </ul>
        </aside>
      </React.Fragment>
    );
  }
}

export default Content;
