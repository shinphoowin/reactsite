import React, { Component } from "react";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Grid";
import Col from "react-bootstrap/lib/Col";
import Navbar from "react-bootstrap/lib/Navbar";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";
import NavbarCollapse from "react-bootstrap/lib/NavbarCollapse";
import NavbarToggle from "react-bootstrap/lib/NavbarToggle";
import NavbarHeader from "react-bootstrap/lib/NavbarHeader";

class Home extends Component {
  render() {
    return (
      <section>
        <Navbar>
          <NavbarToggle></NavbarToggle>
          <NavbarHeader></NavbarHeader>
          <NavbarCollapse>
            <Nav className="menu">
              <NavItem eventKey={1} href="#aboutme">
                About Me
              </NavItem>
              <NavItem eventKey={2} href="#workexp">
                Work Experiences
              </NavItem>
              <NavItem eventKey={3} href="#jslearn">
                Raise Javascript Skill
              </NavItem>
            </Nav>
          </NavbarCollapse>
        </Navbar>

        <div className="ziggy_top" id="aboutme">
          <Grid>
            <Row>
              <div className="maintitle">
                <h2>WELCOME TO MY PERSONAL SITE</h2>
                <p>
                  <span>
                    Shin Phoo Win - Front End Developer (React, React Native,
                    Redux, Nodejs)
                  </span>
                </p>
                <div className="topheader__bg"></div>
              </div>
            </Row>
          </Grid>
        </div>

        <h2 className="title" id="workexp">
          Some of UI Work Experiences
        </h2>
        <div className="subsection">
          <Row>
            <Col xs={6} sm={2}>
              <a href="http://shinphoo.epizy.com/yitm/">
                <img src={require("../assets/images/yitm.png")} alt="yitm" />
              </a>
            </Col>
            <Col xs={6} sm={2}>
              <a href="http://shinphoo.epizy.com/dm/">
                <img src={require("../assets/images/demon.png")} alt="demon" />
              </a>
            </Col>
            <Col xs={6} sm={2}>
              <a href="http://shinphoo.epizy.com/travel/">
                <img src={require("../assets/images/ydth.png")} alt="ydth" />
              </a>
            </Col>

            <Col xs={6} sm={2}>
              <a href="http://shinphoo.epizy.com/">
                <img
                  src={require("../assets/images/flipped.png")}
                  alt="flipped"
                />
              </a>
            </Col>
            <Col xs={6} sm={2}>
              <a href="http://shinphoo.epizy.com/reg/">
                <img src={require("../assets/images/reg.png")} alt="reg" />
              </a>
            </Col>
          </Row>
        </div>

        <div className="customSkewWrap" id="jslearn">
          <Grid>
            <Row>
              <Col xs={5}></Col>
              <Col sm={5} className="right_text">
                <h2 className="subtitle">
                  <em>Absorbing New Skills</em>
                  <br />
                  Js Frameworks & API Accessing
                </h2>
                <p>
                  As you know, javascript is becoming most important in today
                  webdevelopment, I am filling my js skills every time for
                  development.
                </p>
              </Col>
            </Row>
          </Grid>
          <div className="customSkew1"></div>
        </div>

        <div className="subsection learning">
          <Row>
            <Col sm={4}>
              <a href="https://shinphoowin.github.io/backbone_hotellist/">
                <img
                  src={require("../assets/images/backbone.png")}
                  alt="backbonelearning"
                />
                <h4>Hotel Lists By Backbone.js</h4>
                <p>
                  This is my backbone learing tutorial.
                  <br />
                  e-book : backbone-fundamentals by Addy Osmani
                  <br />
                  <b>Usage: Backbone.js</b>
                </p>
              </a>
            </Col>
            <Col sm={4}>
              <a href="https://shinphoowin.github.io/todos-app/">
                <img
                  src={require("../assets/images/logo.svg")}
                  alt="backbonelearning"
                />
                <h4>Todos app by useReducer hook</h4>
                <p>
                  just my share
                  <br />
                  <em>Usage : React.js latest version</em>
                </p>
              </a>
            </Col>
            <Col sm={4}>
              <a href="https://shinphoowin.github.io/reactapi/">
                <img
                  src={require("../assets/images/logo.svg")}
                  alt="reactleraning"
                />
                <h4>Fetching API via React.js</h4>
                <p>
                  This is my react learing tutorial.
                  <br />
                  e-book : learning online react sites
                  <br />
                  <em>Usage : React.js</em>
                </p>
              </a>
            </Col>
          </Row>
        </div>

        <footer>
          <div className="header__bg"></div>
          <Grid>
            <Row>
              <Col xs={12}>
                <ul>
                  <li>
                    <a href="https://github.com/shinphoowin">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://en-gb.facebook.com/ShinPhooWin">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/ShinPhooWin?lang=en">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/shin-phoo-win-3b658799/">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://plus.google.com/u/0/+ShinPhooWinwin">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                </ul>
                <p>
                  Copyright &copy; All Right Reserved - Developer Shin Phoo Win
                </p>
              </Col>
            </Row>
          </Grid>
        </footer>
      </section>
    );
  }
}

export default Home;
