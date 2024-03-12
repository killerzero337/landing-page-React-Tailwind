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
  const customPrevArrow = (
    <img
      src={arrowLeftImage}
      alt="anterior"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        width: "2vw",
        height: "8vh",
      }}
    />
  );
  const customNextArrow = (
    <img
      src={arrowRightImage}
      alt="siguiente"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        width: "2vw",
        height: "8vh",
      }}
    />
  );
  return (
    <div className=" mt-5" id="Empresas">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl lg:leading-tight">
          Nuestros fieles proveedores
        </h2>
        <p className="text-xl text-center">
          Descubre la calidad y confiabilidad que nuestros fieles proveedores
          aportan a cada proyecto. Con la confianza depositada en nuestro
          trabajo, logramos crear espacios únicos y satisfacer las expectativas
          de quienes eligen la excelencia en diseño de interiores.
        </p>
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
            transform: "scaleX(-1)",
            fontSize: "30px",
          }}
        ></div>
      </Slide>
      <hr className="block sm:hidden bg-yellow-500 h-[0.3vh] my-10" />
    </div>
  );
}

export default Carrusel;
