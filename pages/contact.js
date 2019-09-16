import React, { Component } from "react";
import Head from "next/head";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import iframe from 'react-iframe';

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <link rel="stylesheet" href="/static/stylesheet/content.css" />
        </Head>
        <article className="post">
          <div className="container">
            <h1>문의</h1>
            <p>LOGGER에 문의가 있다면 다음 연락처로 문의해주세요.</p>
            <div className="contact-wrap">
              <div className="contact">
                <span>
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <h2>전화</h2>
                <a href="tel:00012345678">000-1234-5678</a>
              </div>
              <div className="contact">
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <h2>이메일</h2>
                <a href="mailto:sctveb@gmail.com">sctveb@gmail.com</a>
              </div>
            </div>
          </div>
        </article>
        <aside className="location">
            <h2>LOCATION</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3159.601812092384!2d126.9187289156815!3d37.63505317978513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c97a383fff89d%3A0x9f08832b76e6dd5!2z7KeE6rSA64-Z7KO866-87IS87YSw!5e0!3m2!1sko!2skr!4v1568617521810!5m2!1sko!2skr" width="600" height="450" frameborder="0" styles={{border:0}} allowfullscreen="" />
        </aside>
      </React.Fragment>
    );
  }
}

export default Contact;
