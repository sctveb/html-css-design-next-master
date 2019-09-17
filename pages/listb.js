import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChartBar, faCogs, faRocket, faBars } from '@fortawesome/free-solid-svg-icons';

import ListArticle from "../components/ListArticle";

class ListB extends Component {    
    state = {
        articles: [
          {
            pic: "p01",
            title: "노란 꽃으로 꾸며보기",
            value: "노란 꽃으로 방을 꾸미면 좋은 일이 있을지도 몰라요. 이유는..."
          },
          {
            pic: "p02",
            title: "야채 키우기 일기",
            value: "최근 키우고 있는 야채들이 무럭무럭 자라고 있어요. 재미로 야채 키우는 것을 일기로 작성해보겠습니다."
          },
          {
            pic: "p03",
            title: "딸기 맛있게 먹는 방법",
            value: "가끔 딸기를 여러 곳에서 많이 받아 처리가 힘들었는데요, 이제 괜찮아요. 다양한 방법으로 맛있게 요리할 수 있습니다."
          },
          {
            pic: "p04",
            title: "악기 다루기",
            value: "취미로 피아노와 기타 같은 악기를 다뤄보는 것이 어떨까요?"
          },
          {
            pic: "p05",
            title: "귀여운 문양",
            value: "여러 곳에 숨은 귀여운 문양을 찾아보았습니다."
          },
          {
            pic: "p06",
            title: "설탕과 수분의 달콤한 관계",
            value: "생명체에게 수분은 뺴놓을 수 없는 요소입니다. 물론 달콤한 음식도...!"
          },
          {
            pic: "p07",
            title: "라이프로그 시작하기",
            value: "일상 생활을 기록해서 데이터로 남기는 것을 '라이프로그'라고 합니다."
          },
          {
            pic: "p08",
            title: "관리는 저에게 맡겨주세요",
            value: "귀찮은 설정, 데이터 관리, 애플리케이션과의 연동은 모두 맡겨주세요."
          },
          {
            pic: "p09",
            title: "해외에서 살아보기",
            value: "한국에서의 일상이 지루해졌다면 해외로 나가서 잠시 살아보다 오는 것은 어떨까요?"
          },
          {
            pic: "p10",
            title: "공중에 몸을 맡기기",
            value: "패러글라이등을 해봤어요. 조금 무서웠지만 즐거웠습니다."
          },
          {
            pic: "p11",
            title: "샐러드 일기",
            value: "세상에는 다양한 종류의 샐러드가 있습니다."
          },
          {
            pic: "p12",
            title: "오래된 친구에게 연락해보기",
            value: "오래된 친구에게 연락해서 간단한 이야기를 나눠봐요."
          }
        ]
      };
    
      render() {
        return (
          <React.Fragment>
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
              <link rel="stylesheet" href="/static/stylesheet/style.css" />
              <script src="https://kit.fontawesome.com/8e48b01324.js"></script>
            </Head>
    
            <section className="conA compact">
              <div className="container">
                <h1>LOGGER</h1>
                <p>맛있고 즐거운 라이프로그</p>
              </div>
            </section>
    
            <section className="listB">
            <h1 className="sr-only">RECENT POSTS</h1>
              <div className="container">            
                {this.state.articles.map((article, i) => {
                  return (
                    <ListArticle
                      key={i}
                      pic={article.pic}
                      title={article.title}
                      value={article.value}
                    />
                  );
                })}
              </div>
            </section>
          </React.Fragment>
          );
    }
}

export default ListB;