import { Slide } from "react-slideshow-image"; //Esto es de canvas, explicar este paquete en clase
import "react-slideshow-image/dist/styles.css";
import arrowLeftImage from "/src/icons/arrows_left.png";
import arrowRightImage from "/src/icons/arrows_right.png";
function Carrusel() {
  const images = [
    "./assets/fondo.webp",
    "./assets/fondo2.jpg",
    "./assets/fondo3.jpg",
  ];
  const customPrevArrow = <img src={arrowLeftImage} alt="anterior" />;
  const customNextArrow = <img src={arrowRightImage} alt="siguiente" />;
  return (
    <div className="w-full">
      <Slide prevArrow={customPrevArrow} nextArrow={customNextArrow}>
        <div className="slider-Info">
          <div style={{ backgroundImage: `url(${images[0]})` }}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="slider-Info">
          <div style={{ backgroundImage: `url(${images[1]})` }}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="slider-Info">
          <div style={{ backgroundImage: `url(${images[2]})` }}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default Carrusel;
