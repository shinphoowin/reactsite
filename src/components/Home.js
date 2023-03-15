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
                Pixel Perfect Templates
              </NavItem>
              <NavItem eventKey={3} href="#jslearn">
                Level up Javascript Skill
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
                    Hi, this is Shin Phoo Win, Specialist in Front End,
                    Intermediate in FullStack keeping abreast with latest
                    technologies
                  </span>
                </p>
                <h2 className="title">
                  (HTML5, CSS3, React, React Native, Redux, Node.js, Next.js)
                </h2>

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
            {/* <Col xs={6} sm={2}>
              <a href="http://sgtry.infinityfreeapp.com/yitm/">
                <img src={require("../assets/images/yitm.png")} alt="yitm" />
              </a>
            </Col> */}
            <Col xs={6} sm={3}>
              <a href="http://sgtry.infinityfreeapp.com/dm/">
                <img src={require("../assets/images/demon.png")} alt="demon" />
              </a>
            </Col>
            <Col xs={6} sm={3}>
              <a href="http://sgtry.infinityfreeapp.com/ydth/">
                <img src={require("../assets/images/ydth.png")} alt="ydth" />
              </a>
            </Col>

            <Col xs={6} sm={3}>
              <a href="http://sgtry.infinityfreeapp.com/flipped/">
                <img
                  src={require("../assets/images/flipped.png")}
                  alt="flipped"
                />
              </a>
            </Col>
            <Col xs={6} sm={3}>
              <a href="http://sgtry.infinityfreeapp.com/reg/">
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
                  web development, I am filling my js skills every time for
                  development.
                </p>
              </Col>
            </Row>
          </Grid>
          <div className="customSkew1"></div>
        </div>

        <div className="learning">
          <Row>
            <Col xs={12} sm={6} lg={3} className="lightShadowBg">
              <a href="https://react-firebase-chat-7854e.web.app/">
                <img
                  src={require("../assets/images/photouploadApp.jpg")}
                  alt="backbonelearning"
                />

                <p>
                  <h4>Chat Application</h4>
                  Used technologies :{" "}
                  <ol style={{ paddingLeft: 20 }}>
                    <li>Material Ui</li>
                    <li>Firebase</li>
                    <li>React</li>
                    <li>Formik</li>
                  </ol>
                </p>
              </a>
            </Col>

            <Col xs={12} sm={6} lg={3} className="lightShadowBg">
              <a href="https://shinphoowin.github.io/chart-demo/">
                <img
                  src={require("../assets/images/chartApp.jpg")}
                  alt="reactleraning"
                />
                <h4>
                  Dynamic Chart
                  <br />
                  (Desktop Ui Only)
                </h4>
                Used technologies :{" "}
                <ol style={{ paddingLeft: 20 }}>
                  <li>React</li>
                  <li>react-chartjs-2 package</li>
                  <li>Semntic-ui-react</li>
                </ol>
              </a>
            </Col>
            <Col xs={12} sm={6} lg={3} className="lightShadowBg">
              <a href="https://shinphoowin.github.io/todos-app/">
                <img src={require("../assets/images/logo.svg")} alt="react" />
                <p>
                  <h4>Todos app by useReducer hook</h4>
                  Used technologies :{" "}
                  <ol style={{ paddingLeft: 20 }}>
                    <li>React latest version</li>
                  </ol>
                </p>
              </a>
            </Col>
            <Col xs={12} sm={6} lg={3} className="lightShadowBg">
              <a
                href="https://react-firebase-gallery-dce19.web.app/"
                alt="logo img"
              >
                <img src={require("../assets/images/photouploadApp.jpg")} />

                <h4>Photo Uploader</h4>
                <p>
                  Used technologies :{" "}
                  <ol style={{ paddingLeft: 20 }}>
                    <li>React</li>
                    <li>Firebase</li>
                    <li>Material Ui</li>
                    <li>react-material-ui-carousel</li>
                  </ol>
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
                    <a href="https://twitter.com/ShinPhooWin?lang=en">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/shin-phoo-win-3b658799/">
                      <i className="fa fa-linkedin"></i>
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
