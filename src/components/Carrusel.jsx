import { Zoom } from "react-slideshow-image"; //Esto es de canvas, explicar este paquete en clase
import "react-slideshow-image/dist/styles.css";
import arrowLeftImage from "/src/icons/arrows_left.png";
import arrowRightImage from "/src/icons/arrows_right.png";
function Carrusel() {
  const images = [
    "/src/assets/fondo.webp",
    "/src/assets/fondo2.jpg",
    "/src/assets/fondo3.jpg",
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
              <img src="/src/icons/casa.png" alt="" srcset="" />
              <div>Hogareña</div>
            </span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[1]})` }}>
          <span>
              <img src="/src/icons/automata.png" alt="" srcset="" />
              <div>Funcional</div>
            </span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[2]})` }}>
          <span>
              <img src="/src/icons/muebles.png" alt="" srcset="" />
              <div>Minimalista</div>
            </span>
          </div>
        </div>
      </Zoom>
    </div>
  );
}

export default Carrusel;