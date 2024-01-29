import React from 'react'
import Lightmode from '../Lightmode'
import { Placeholder } from 'react-bootstrap';

const Contact = () => {
  
  return (
  <div className='contactbg'>
    <br />
     <div className='card1' style={{width: '916px', height: '500px'}}>
      <div style={{display: 'flex'}}>
        <div>
          <h1 className='Contactpage'>Contact Us</h1>
          <form>
          
            <input type="text" name="name"  placeholder='Enter name' className='labelform8b'   style={{height: '50px', width: '400px', backgroundColor: 'white', borderRadius:'20px'}}/>
            <br />
            <br />
            <input type="text" name="email"  placeholder='Enter e-mail' className='labelform8b'  style={{height: '50px', width: '400px', backgroundColor: 'white', borderRadius:'20px'}} />
            <br />
            <br />
            <textarea   name="message" rows={"4"} cols={"50"} placeholder= 'Message' style={{ backgroundColor: 'white', borderRadius:'30px', paddingLeft: "10px"}} ></textarea>
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