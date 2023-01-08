import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./contactUs.css"

const ContactUs = () => {
  return (
    <div>
    <Navbar/>
    <div className="contact">
        <div className="contactElemnts">
            <div className="contactform">
                <form action="">
                    <span>Your Email</span>
                    <input type="email" placeholder='exomple@exomple.com'/>
                    <span>Your message</span>
                    <textarea name="" id="" cols="30" rows="10">

                    </textarea>
                    <div className="button">
                    <button type="submit">send</button>
                </div>
                </form>
            </div>
        </div>
    </div>
    </div>
   
  )
}

export default ContactUs