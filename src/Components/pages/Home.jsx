
import Cards from "../Card";
import Cardy from "../Cardy";
import Carous from "../Carousel";
import Dark from "../Carousel";
import Carousel from "../Carousel"
import { useState } from "react"

function Home() {
    const [person, setPerson] = useState({

    });
    const [shows, setShows] = useState(false);

  return (
    <>
       <div style={{ 
      backgroundImage: `url("https://bc-gb.com/wp-content/uploads/2013/10/gaming-wallpapers-games-57.jpg")`, 
      height: '1600px',
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      backgroundPosition:'center',
    }}>
        <div>
          {shows
          ? (<div>
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
                      <h5><i class="fa-solid fa-gamepad" id="icon1"></i>In-game Purchase </h5>
                      <h5>Optional</h5>
                    </div>
                    <div>
                      <div className="txt2">
                        <h5> <i class="fa-solid fa-globe" id="icon2"></i>Online play required</h5>
                        <h5 ><i class="fa-solid fa-user-group" id="icon2"></i>60 online people</h5>
                      </div>
                   </div>
                  </div>
                  
                    
                  </div>
                  <div>
                  <img className="img7" src="https://www.rappler.com/tachyon/2021/04/apex-mobile-art-featured-image.jpg" alt="" />
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
                <h5 className="txtti">Welcome to GAMEFC, where gaming enthusiasts unite! Dive into a world of reviews, news, and community vibes. Level up your gaming experience with us!</h5>
                  </div>
                  <br />
                  <div className="cardo">
                    <Cardy
                      imgUrl={"https://media.istockphoto.com/id/1305224036/photo/latin-man-gaming-on-his-pc-during-a-live-stream.jpg?s=612x612&w=0&k=20&c=m44oOlCqEgFs5MyLzz5zSr21kNmFbteOg0c6-ETNWSI="}
                      title={"Gaming Is Life"}
                   />
                    <Cardy
                      imgUrl={"https://www.red-dot.org/fileadmin/_processed_/e/f/csm_16-01418-2020-9_430ae194b0.jpg"}
                      title={"Gaming Is Peace"}
                    />
                    <Cardy
                      imgUrl={"https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtZXJ8ZW58MHx8MHx8fDA%3D"}
                      title={"Gaming Is Fun"}
                    />
                    <Cardy 
                      imgUrl={"https://www.forbesindia.com/media/images/2022/Jun/img_186701_gamers_bg.jpg"}
                      title={"Gaming Is Inspiring"}
                    />
                  </div>
                  
                </div>
                
              </section>
            </main>

           
          </div>)
          :(
             <div>
                
              </div> 
          )
        }        
         <div>
            <button onClick={() => setShows(!shows)} className="btn">G@ME ON..</button>
         </div>
        </div>
        </div>
    </>
  )
}

export default Home;
