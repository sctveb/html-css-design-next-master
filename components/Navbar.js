import React, { Component } from "react";
import $ from "jquery";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.$slideRef = $(this.slideRef);
  }
  componentWillUnmount() {
    this.$slideRef.slideToggle("destroy");
  }
  slideToggleEvent = () => {
    this.$slideRef.slideToggle();
  };
  render() {
    return (
      <React.Fragment>
        <header>
          <div className="container">
            <div className="container-small">
              <Link href="/">
                <a className="headA">LOGGER</a>
              </Link>
              <button
                type="button"
                className="headC"
                onClick={this.slideToggleEvent}
              >
                <span title="MENU">
                  <FontAwesomeIcon icon={faBars} />
                </span>
              </button>
            </div>

            <nav className="headB" ref={slideRef => (this.slideRef = slideRef)}>
              <ul>
                <li>
                  {/* <Link href="/"> */}
                    <a href="#">TOP</a>
                  {/* </Link> */}
                </li>
                <li>
                  <Link href="/content">
                    <a>콘텐츠</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a>소개</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>문의</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Navbar;
