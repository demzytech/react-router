import React from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const sendEmail = (e) => {
   e.preventDefault();

    emailjs.sendForm('service_q4xkqif', 'template_9esott9', e.target, 'GO_ncj_BnwQGpdyHM')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        })
        e.target.reset()
        
  };
  
  return (
  <div className='contactbg'>
    <br />
     <div className='card1' style={{width: '916px', height: '500px'}}>
      <div style={{display: 'flex'}}>
        <div>
          <h1 className='Contactpage'>Contact Us</h1>
          <form onSubmit={sendEmail}>
          
            <input type="text"   placeholder='Enter name'name="name" className='labelform8b'   style={{height: '50px', width: '400px', backgroundColor: 'white', borderRadius:'20px', borderColor: "black"}}/>
            <br />
            <br />
            <input type="text"   placeholder='Enter e-mail' name="Email" className='labelform8b'  style={{height: '50px', width: '400px', backgroundColor: 'white', borderRadius:'20px', borderColor: "black"}} />
            <br />
            <br />
            <textarea    rows={"4"} cols={"50"} placeholder= 'Message' name="message" style={{ backgroundColor: 'white', borderRadius:'30px', paddingLeft: "10px", borderColor: "black"}} ></textarea>
            <br />
            <br />
            <button className='Btn3'> Send Message</button>
          </form>
          
        </div>
        <div>
          <img className='imggg' src="https://previews.123rf.com/images/aleksangel/aleksangel1801/aleksangel180100012/94024780-man-with-package-delivery-service-postman-with-mail-cartoon-character-isolated-white-background.jpg" alt="" />
        </div>
      </div>
     
      

  
   </div>
  </div>
   
   

  );
 
}

export default Contact