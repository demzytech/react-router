
import Cards from "../Card";
import Cardy from "../Cardy";

import Dark from "../Carousel";

function Home() {


  return (
    <>
       
 <main>
   <section style={{ 
      backgroundImage: `url("https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg")`, 
      height: '800px',
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      backgroundPosition:'center',
    }} >
                <div className="story">
                  <div className="txt9">

                  <h1 className="tt">Game FC</h1>
                  
                  <br />
                  <h3> EA</h3>
                  <br />
                  <h6>available on ps4 ps5 and mobile-phone</h6>
                  <br />
                  <h2>Free</h2>
                  <button className="Btn3">Select Games</button>
                  <br/>
                  <button className="Btn4"> Chose Version</button>
                  <br />
                  <br />
                  <br />
                  <h5> Released 02/04/2019</h5>
                  <div className="txt3">
                    <div>
                      <h5><i className="fa-solid fa-gamepad" id="icon1"></i>In-game Purchase </h5>
                      <h5>Optional</h5>
                    </div>
                    <div>
                      <div className="txt2">
                        <h5> <i className="fa-solid fa-globe" id="icon2"></i>Online play required</h5>
                        <h5 ><i className="fa-solid fa-user-group" id="icon2"></i>60 online people</h5>
                      </div>
                   </div>
                  </div>
                  
                    
                  </div>
                  <div>
                  <div >
                    <h1>amor</h1>

                  </div>
                  
                  <br />
                  <br />
                  <div className="divy">
                  <img className="img0" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/ESRB_Teen.svg/1468px-ESRB_Teen.svg.png" alt="" />
                  <h5 className="txt6">blood, violence</h5>
                  </div>
                  </div>
                  

                  

                </div>

              </section>
              <section className="dcolor">
                <br />
                <br />
                <br />
                <br />
                <br />
                <Cards/>
                <br />
                <br />
                <h1 className="txt24">TOP 3 ONLINE <span className="wordy"> GAMES</span> FOR 2024</h1>
                <hr className="line"/>
                <hr className="line1" />
                <hr className="line2" />
                <br />
                <br />
                


              <Dark/>

              </section>
              <section className="section8">
                <div>
                  <div>
                  <br />
                <h1 className="txt45">Awesome Gamers - Amazing Games</h1>
  
                <hr className="line9"/>
                <br />
                <h5 className="txt45">Welcome to GAMEFC, where gaming enthusiasts unite! Dive into a world of reviews, news, and community vibes. Level up your gaming experience with us!</h5>
                  </div>
                  <br />
                  
                  
                </div>
                
              </section>
              
            </main>
            <footer className="footerbg">
              <div style={{display:"flex"}}>
                <h1 className="wordy22">GAMEFC</h1>
              <img src="https://i.pinimg.com/originals/72/3d/0a/723d0af616b1fe7d5c7e56a3532be3cd.png" alt="" className="imgh"/>
                
              
              </div>
              <div>
                <div>
                <div>
                  <h4 style={{fontSize: "20px", fontWeight: '800', textAlign: "center", color: "#605149"}}>Thank you for being part of our journey. Your support and presence mean the world to us. We strive to provide valuable content and services, and we look forward to continuing this adventure with you. Together, let's create amazing moments and memories. Cheers to many more shared experiences!</h4>
              </div>
              <div style={{fontSize: "30px", display: 'flex', marginLeft: '700px' }}>
              <a href="https://www.facebook.com/profile.php?id=100074803113250"><i className="fa-brands fa-facebook" style={{marginRight: '15px'}}></i></a>
              <br />
            
              <a href="https://x.com/DemzyAmor1/status/1744010474113413461?s=20"><i className="fa-brands fa-twitter"  style={{marginRight: '15px'}}></i></a>
              <br />
              <a href="https://www.instagram.com/demzyamor?igsh=YzljYTk1ODg3Zg== "><i className="fa-brands fa-instagram" ></i></a>
              <br />
              <a href="https://wa.me/+2349027301750"><i className="fa-brands fa-whatsapp" style={{marginLeft: '15px'}}></i></a>
              <br />
              <a href="https://pin.it/2RtVTBxZp"><i className="fa-brands fa-pinterest-p" style={{marginLeft: '15px'}}></i></a>
              </div>
            
              
              <div>
              
              <p style={{fontSize: "20px", fontWeight: '800', textAlign: "center", color: "#605149"}}>&copy; 2024 Your Website. All Rights Reserved.</p>
              <p style={{fontSize: "20px", fontWeight: '800', textAlign: "center", color: "#605149"}}>Contact us: demiladeamodu@gmail.com</p>
              </div>
                </div>
                
                
        
              </div>

            </footer>

           
          
             <div>
                
              </div> 
          
    </>
  )
}

export default Home;
