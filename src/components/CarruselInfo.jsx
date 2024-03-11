import { Slide } from "react-slideshow-image"; //Esto es de canvas, explicar este paquete en clase
import "react-slideshow-image/dist/styles.css";
import arrowLeftImage from "/icons/arrows_left.png";
import arrowRightImage from "/icons/arrows_right.png";
function Carrusel() {
  const images = [
    "./assets/Peces.webp",
    "./assets/PecesLogo.webp",
    "./assets/Rload.webp",
    "./assets/RloadLogo.gif",
    "./assets/wanna.webp",
    "./assets/WannaLogo.webp",
    "./assets/Rload.webp",
  ];
  const customPrevArrow = <img src={arrowLeftImage} alt="anterior" />;
  const customNextArrow = <img src={arrowRightImage} alt="siguiente" />;
  return (

    <div className=" mt-5">
      <div>
        <h2 className=" text-center text-[2.5vh]">Nuestros fieles proveedores</h2>
        <h3 className="text-center">Aquellos que confian en nuestros trabajo</h3>
      </div>
      <Slide
        prevArrow={customPrevArrow}
        nextArrow={customNextArrow}
        slidesToScroll={2}
        slidesToShow={2}
        indicators={true}
      >
        <div
          style={{
            textAlign: "center",
            background: `url(${images[0]})`,
            padding: "200px 0",
            fontSize: "30px",
          }}
        ></div>
        <div
          style={{
            textAlign: "center",
            background: `url(${images[1]})`,
            padding: "200px 0",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            fontSize: "30px",
          }}
        ></div>
        <div
          style={{
            textAlign: "center",
            background: `url(${images[3]})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            padding: "200px 0",
            fontSize: "30px",
          }}
        ></div>
        <div
          style={{
            textAlign: "center",
            background: `url(${images[2]})`,
            padding: "200px 0",
            fontSize: "30px",
          }}
        ></div>
        <div
          style={{
            textAlign: "center",
            background: `url(${images[4]})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            padding: "200px 0",
            fontSize: "30px",
          }}
        ></div>
        <div
          style={{
            textAlign: "center",
            background: `url(${images[5]})`,
            padding: "200px 0",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            fontSize: "30px",
          }}
        ></div>
        <div
          style={{
            textAlign: "center",
            background: `url(${images[0]})`,
            padding: "200px 0",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            fontSize: "30px",
          }}
        ></div>
      </Slide>
    </div>
  );
}

export default Carrusel;
