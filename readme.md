# HTML + CSS + NEXT => MASTER

본 repository는 `최신 표준 HTML + CSS 디자인` 교재의 예제를 학습하면서 next 환경에서 refactoring함으로서 react를 제대로 활용할 수 있도록 수련하고자 만들었습니다.

교재 소개 & 예제 파일 : https://wikibook.co.kr/html-css-design/



[Adobe Color](https://color.adobe.com/)

#### 삽질의 이야기
1. node-sass가 정상적으로 설치되지 않음 => 루트 디렉토리에 `.npmrc`를 만들고 `unsafe-perm=true`를 추가.
2. github에는 올리지 않지만, Elastic Beanstalk에 필요한 경우에는 `.ebignore`를 만들어 `.gitignore`처럼 관리.
3. 통신해야하는 포트번호가 중요함. Elastic Beanstalk의 NGINX는 기본적으로 통신내용을 PORT 80 -> PORT 8081로 전달함.
