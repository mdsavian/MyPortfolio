import React, { Component, useState } from 'react';
import { Bounce, Zoom } from 'react-reveal';
import axios from 'axios';

class Contact extends Component {


   render() {

      if (this.props.data) {
         var message = this.props.data.contactmessage;
      }

      return (
         <section id="contact">

            <div className="row section-head">

               <div className="two columns header-col">
                  <Bounce right>
                     <h1><span>Get In Touch.</span></h1>
                  </Bounce>
               </div>

               <div className="ten columns">
                  <p className="lead">{message}</p>
               </div>

            </div>

            <div className="row">
               <div className="twelve">

                  <form action="" method="post" id="contactForm" name="contactForm" className="formContact">
                     <fieldset>

                        <Zoom>
                           <div>
                              <label htmlFor="name">Name <span className="required">*</span></label>
                              <input type="text" defaultValue="" size="35" id="name" name="name" onChange={this.handleChange} />
                           </div>
                        </Zoom>

                        <Zoom>
                           <div>
                              <label htmlFor="email">Email <span className="required">*</span></label>
                              <input type="text" defaultValue="" size="35" id="email" name="email" onChange={this.handleChange} />
                           </div>
                        </Zoom>

                        <Zoom>
                           <div>
                              <label htmlFor="message">Message <span className="required">*</span></label>
                              <textarea cols="50" rows="15" id="message" name="message"></textarea>
                           </div>
                        </Zoom>

                        <Zoom>
                           <div>
                              <button className="submit" type="button" onClick={() => { send() }}>Submit</button>
                              {/* <span id="image-loader">
                                 <img alt="" src="images/loader.gif" />
                              </span> */}
                           </div>
                        </Zoom>
                     </fieldset>
                  </form>

                  <div id="message-warning"> Error boy</div>
                  <div id="message-success">
                     <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

const send = () => {

   let data = JSON.stringify({
      "name": window.document.getElementById('name').value,
      "email": window.document.getElementById('email').value,
      "message": window.document.getElementById('message').value
   });
   axios.post('http://localhost:3030/send',
      {
         data: data,
         headers: {
            "Content-Type": "application/json;",
         }
      })
      .then(response => { console.log(response.data); })
}

export default Contact;
