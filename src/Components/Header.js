import React, { Component } from 'react';
import Typist from 'react-typist';
class Header extends Component {
   render() {

      if (this.props.data) {
         var occupation = this.props.data.occupation;
         var country = this.props.data.address.country;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
      }

      return (
         <header id="home">

            <nav id="nav-wrap">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#resume">Resume</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                  {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
                  <li><a className="smoothscroll" href="#contact">Contact</a></li>
               </ul>

            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <Typist className="TypistExample-header" cursor={{ show: false }} avgTypingDelay={50}>
                     <h1 className="responsive-headline">Hey, Marlon Savian here!</h1>
                  </Typist>
                  <h3>I'm a <span>{occupation}</span> from {country} specializing in <span> building complex, fast and high-quality backend softwares for companies.
               </span> Actually I'm working as <span>full stack software engineer on a web project for telemedicine</span> in Brazil.</h3>
                  <hr />
                  <ul className="social">
                     {networks}                     
                  </ul>
                  <p>
                     
                  </p>
               </div>
            </div>

            <p className="scrolldown">
            <a href="#contact" className="button smoothscroll"> Get in touch &nbsp; <i className="fa fa-comment"></i></a>
            </p>

            {/* <p className="scrolldown">
            
               
            </p> */}

         </header>
      );
   }
}

export default Header;
