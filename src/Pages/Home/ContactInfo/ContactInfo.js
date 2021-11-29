import React from 'react';
import './ContactInfo.css'
const ContactInfo = () => {
     return (
          <div className="container">
               <div className="contact-area">
               <h2 className="from-intro">Contact Info</h2>
                    <div className="row mt-5">
                    <div className="col-md-4 col-lg-4 col-12 box d-flex align-items-center mb-3">
                    <i className="fas info-icon fa-2x fa-map-marker-alt"></i> <p>Sylhet, Beanibazar 3174</p>
                    </div>
                    <div className="col-md-4 col-lg-4 col-12 box d-flex align-items-center mb-3">
                    <i className="fas info-icon fa-2x fa-phone"></i> <p>(+880) 1950646560</p>
                    </div>
                    <div className="col-md-4 col-lg-4 col-12 box d-flex align-items-center mb-3">
                    <i className="fas info-icon fa-2x fa-envelope"></i> <p>hafizurrahman@gmail.com</p>
                    </div>
                    </div>
               </div>

               <div className="container">
                    <div>
                    <h2 className="from-intro">How Can I Help You ?</h2>
                    <div className="form-area">
                         <form  action="https://formspree.io/f/mwkyeqev" method="POST">
                             <input type="text" name="Name" placeholder="Your Name" id="name" required/>
                             
                             <br />
                             <input type="text" name="Subject" placeholder="Subject" id="subject" required/>
                             <br />
                             <input type="email" name="Email" placeholder="Email" id="eamil" required/>
                             <br />
                             <textarea type="text" name="message" id="message" placeholder="Please Write Your Message" cols="30" rows="5" required></textarea>
                             <br />
                             <button className="btn-submit" type="submit">Send Message</button>
                         </form>
                    </div>
                    </div>

               </div>
          </div>
     );
};

export default ContactInfo;