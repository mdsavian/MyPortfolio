import React, { Component } from 'react';
import { Bounce, Zoom } from 'react-reveal';
import axios from 'axios';
import * as $ from 'jquery';

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
                              <input type="text" defaultValue="" size="35" id="name" name="name" />
                           </div>
                        </Zoom>

                        <Zoom>
                           <div>
                              <label htmlFor="email">Email <span className="required">*</span></label>
                              <input type="text" defaultValue="" size="35" id="email" name="email" />
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
                           </div>
                        </Zoom>
                     </fieldset>

                  </form>

                  <div id="div-loader">
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
                  <div id="message-warning"> </div>

                  <div id="message-success">
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

const send = () => {

   $('#message-warning').fadeOut();
   $('#message-success').fadeOut();

   let name = window.document.getElementById('name').value;
   let email = window.document.getElementById('email').value;
   let message = window.document.getElementById('message').value;
   cleanField("name");
   cleanField("email");
   cleanField("message");

   if (!name || name === '') {
      $('#message-warning').html("Name is required.");
      assignErrorField("name");
      callMessage('#message-warning')
      return;
   }

   if (!email || email === '') {
      $('#message-warning').html("Email is required.");
      assignErrorField("email");
      callMessage('#message-warning');
      return;
   }
   else if (!validateEmail(email))
   {
      $('#message-warning').html("Email is invalid.");
      assignErrorField("email");
      callMessage('#message-warning');
      return;
   }

   if (!message || message === '') {
      $('#message-warning').html("Message is required.");
      assignErrorField("message");
      callMessage('#message-warning');
      return;
   }

   let data = JSON.stringify({
      "name": name,
      "email": email,
      "message": message
   });

   $('#image-loader').fadeIn();

   axios.post('http://marlonsavian.kinghost.net/emailPortfolio',
      {
         data: data,
         headers: {
            "Content-Type": "application/json;",
         }
      })
      .then(response => {
         if (response.data && response.data.accepted.length > 0) {
            $('#message-success').html("Email was successfully sent. Thank you for contacting me.");
            callMessage('#message-success');
            $('#image-loader').fadeOut();
         }

      }).catch(error => {
         $('#message-warning').html("Can't send email. Contact me via normal email please.");
         callMessage('#message-warning')
         $('#image-loader').fadeOut();
      })
}

const assignErrorField = (nameField) => {

   let field = window.document.getElementById(nameField);
   if (field) {
      field.focus();
      field.style.borderColor = "crimson";
      field.style.borderStyle = "solid";
      field.style.borderWidth = "2px";
   }
}

const cleanField = (nameField) => {

   let field = window.document.getElementById(nameField);
   if (field) {
      field.focus();
      field.style.borderColor = "";
      field.style.borderStyle = "";
      field.style.borderWidth = "";
   }
}
const validateEmail= (email) => {
   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
}

const callMessage = (message) => {
   $(message).fadeIn();
   $('#message-warning').delay(3500).fadeOut(800);
}
export default Contact;
