import React from "react";
import "./ContactUS.css";
import * as Icons from "react-icons/fa";
import MapContainer from "./Map"
import emailjs from 'emailjs-com';

function sendemail(e){
  alert("Message sent Successfully");
  e.preventDefault();
  emailjs.sendForm('service_efg2okp' , 'template_nz5a1dh' , e.target , 'VlO7PdyhzbRA02YBM');

}

function ContactUs(){
    return (

        <>
        <div id = "Contactus">
        <h1 class = "ourcontact">OUR CONTACT</h1>
        <div class = "contact" >
      <div class = "addressitem">
        <div class = "icon"><Icons.FaMapMarked /></div>
        <h2>Our Address</h2>
        <p class = "contactdes">Plot No 9,Road No 1, Mythrinagar, SBH V III, Hyderabad, Telangana, India -500074</p>
      </div>
      <div class = "item" >
        <div  class = "icon">
      <Icons.FaEnvelope />
      </div>
      <h2>Email Us</h2>
        <p class = "contactdes">support@moonglade.co.in</p>

      </div>
      <div class = "item" >
      <div class = "icon"><Icons.FaPhone /></div>
      <h2>Call Us</h2>
        <p class = "contactdes">+91 9818475969</p>
      </div>




    </div>
    

        <div class = "contact">
            <div class = "map">
            <MapContainer></MapContainer>
                
            </div>
            <div class = "sendmessage">
              <form onSubmit={sendemail}>
                <div>{/* <textarea rows = "3" cols = "30"  placeholder="Your email"></textarea> */}
                    <textarea class = "textarea" type = "text" rows = "3" cols = "35" name = "name" placeholder="Your name"/>
                    <textarea class = "textarea" type = "text" rows = "3" cols = "35"  name = "user_email" placeholder="Your email"/>
                </div>
                <textarea  class = "textarea" type = "text"rows = "3" cols = "70" name = "Subject"placeholder="Subject"/>
                <div>
                <textarea class = "textarea" type = "text"rows = "7" cols = "70" name = "Message" placeholder="Message"/>
                </div>
                <div class = "hover">
                <button type = "submit" class = "sendmessagebutton">Send Message</button>
                </div>
                </form>
            </div>


        </div>
        </div>
        </>
    );
};

export default ContactUs;