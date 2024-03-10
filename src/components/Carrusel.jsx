import { Zoom } from "react-slideshow-image"; //Esto es de canvas, explicar este paquete en clase
import "react-slideshow-image/dist/styles.css";
import arrowLeftImage from "/icons/arrows_left.png";
import arrowRightImage from "/icons/arrows_right.png";
function Carrusel() {
  const images = [
    "/assets/fondo.webp",
    '/assets/fondo2.jpg',
    "/assets/fondo3.jpg",
  ];
  const customPrevArrow = (
    <img
      src={arrowLeftImage}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", width: "2vw" }}
      alt="anterior"
    />
  );
  const customNextArrow = (
    <img
      src={arrowRightImage}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", width: "2vw" }}
      alt="siguiente"
    />
  );
  return (
    <div className="w-full">
      <Zoom prevArrow={customPrevArrow} nextArrow={customNextArrow}>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[0]})` }}>
            <span>
              <img src="./icons/casa.png" alt="" />
              <div>Hogareña</div>
            </span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[1]})` }}>
            <span>
              <img src="./icons/automata.png" alt="" />
              <div>Funcional</div>
            </span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[2]})` }}>
            <span>
              <img src="./icons/muebles.png" alt="" />
              <div>Minimalista</div>
            </span>
          </div>
        </div>
      </Zoom>
    </div>
  );
}

export default Carrusel;
