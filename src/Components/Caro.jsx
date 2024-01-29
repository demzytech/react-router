import Carousel from 'react-bootstrap/Carousel';

function Caro() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=f5f5f5"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijVIsjRgxicnRtbwElBgDkZQ9Hkqf8DPdp2-evTigz5Is2OAgeljckykrdBl22ayCV25GTdmCxOCwIEK6gPV13Sg_4cBbAZTCqjZCYwv19fTq4bc9Qhh0obwfwEt1Z26Z7g9NTsjCjYcxiHdwoJK0CER5xOF4zMjPa3xK8MTce-9pMe7vdlwl9YlHJVw6B/s1920/vlcsnap-2023-09-09-20h11m32s024.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Caro;