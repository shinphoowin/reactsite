import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Home from './components/Home';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
import './assets/css/fontAwesome.css';
import './App.css';


class App extends Component {
  // componentDidMount(){
  //   console.log("didmount fun start");
  //   console.log(window);
  //   window.addEventListener('resize', this.handleResize);
  // }

  // handleResize(){
  //   console.log("handleResize hit");
  //   console.log($(window).width());
  //   // const el = findDOMNode(this.refs.cur_windowSize);
  //   this.setState({width: $(window).width(),height: $(window).height()})
  // }

  // componentWillMount(){
  //   console.log("willMount Run");
  //   this.handleResize();
  // }

  // componnetWillUnmount(){
  //   window.removeEventListener("resize", this.handleResize)
  // }

  handleScroll = (e) => {

      const el = findDOMNode(this.refs.custum_scrollTopBtn);
      $(el).click(function(){
          $('html, body').animate({scrollTop : 0},800);
                  return false;
      }); 

      $(window).scroll(function(){
        if ($(this).scrollTop() > 0) {
          $('.custum_scrollTopBtn').fadeIn();
        } else {
          $('.custum_scrollTopBtn').fadeOut();
        }
      });
  }

  render() {
    return (
      <div>
        <Home/>
        <div className="custum_scrollTopBtn" onClick={this.handleScroll} ref="custum_scrollTopBtn">
            <span className="fa fa-angle-up"></span>
        </div>
      </div>
    );
  }
}
export default App;