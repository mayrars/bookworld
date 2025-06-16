import './App.css'
import Slider from "react-slick";
import Header from './components/Header';
import image1 from './assets/cuaderno-de-mano-de-alto-angulo.jpg';
import image2 from './assets/mujer-sonriente-de-vista-frontal-con-libro.jpg';
import image3 from './assets/personas-de-alto-angulo-leyendo-juntas.jpg';

function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <Header />
      <section class="bg-white text-black">
        <div class="container py-0 px-0 mx-auto max-w-[1800px]">
          <Slider {...settings}>
            <div>
              <img src={image1} alt="Logo" />
            </div>
            <div>
              <img src={image2} alt="Logo" />
            </div>
            <div>
              <img src={image3} alt="Logo" />
            </div>
          </Slider>
          <div class="max-w-screen-lg">
          </div>
        </div>
      </section>
    </>
  )
}

export default App
