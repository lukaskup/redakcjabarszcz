import React, { Component } from 'react';
import "../css/Contact.scss";
class Contact extends Component {
  render() {
    return (
      <div className="contact">
          <div className="row m-0">
            <div className="col-12 p-0">
              <div className="heading">
                <h1>Kontakt</h1>
              </div>
            </div>
              <div className="fb-page" 
                  data-href="https://www.facebook.com/facebook"
                  data-width="380" 
                  data-hide-cover="false"
                  data-show-facepile="false">
              </div>
            <div className="col-12 p-0 email">
              <i className="material-icons">
                email
              </i>
              <span>redakcja.barszcz@gmail.com</span>
            </div>
            <div className="col-12 p-0">
            </div>
          </div>
          
      </div>
    );
  }
}

export default Contact;
