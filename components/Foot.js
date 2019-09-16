import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faGooglePlus, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
class Foot extends Component {    
    render() {
        return (
            <React.Fragment>
                <footer>
                    <div className="container">
                        <div className="footA">
                            <h2>LOOGER</h2>
                            <p>
                                주소: 서울도 경기특별시 동기디동<br />
                                <a href="http://naver.com">http://naver.com</a>
                            </p>

                            <nav className="footD">
                            <ul>
                                <li><a href="#"><span title="Twitter"><FontAwesomeIcon icon={faTwitter} /></span><span className="sr-only">Twitter</span></a></li>
                                <li><a href="#"><span title="Facebook"><FontAwesomeIcon icon={faFacebook} /></span><span className="sr-only">Facebook</span></a></li>
                                <li><a href="#"><span title="GooglePlus"><FontAwesomeIcon icon={faGooglePlus} /></span><span className="sr-only">GooglePlus</span></a></li>
                                <li><a href="#"><span title="Instagram"><FontAwesomeIcon icon={faInstagram} /></span><span className="sr-only">Instagram</span></a></li>
                                <li><a href="#"><span title="Youtube"><FontAwesomeIcon icon={faYoutube} /></span><span className="sr-only">Youtube</span></a></li>
                            </ul>
                        </nav>
                        </div>                  

                        <nav className="footB">
                            <div>
                                <h3>ABOUT</h3>
                                <ul>
                                    <li><a href="#">설립</a></li>
                                    <li><a href="#">주소</a></li>
                                    <li><a href="#">지도</a></li>
                                    <li><a href="#">스태프</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3>SUPPORT</h3>
                                <ul>
                                    <li><a href="#">다운로드</a></li>
                                    <li><a href="#">메뉴얼</a></li>
                                    <li><a href="#">자주 묻는 질문</a></li>
                                    <li><a href="#">문의</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3>CONTENTS</h3>
                                <ul>
                                    <li><a href="#">공지사항</a></li>
                                    <li><a href="#">비즈니스</a></li>
                                    <li><a href="#">프로필</a></li>
                                    <li><a href="#">개발자</a></li>
                                    <li><a href="#">블로그</a></li>
                                </ul>
                            </div>
                        </nav>

                        <div className="footC">
                            © LOGGER corp. All rights reserved.
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

export default Foot;