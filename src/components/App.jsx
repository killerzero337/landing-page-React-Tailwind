import "./App.css";
import Navbar from "./Navbar";
import Seccion1 from "./Seccion1";
import Footer from "./Footer";
import Carrusel from "./Carrusel";
import CarruselInfo from "./CarruselInfo";
import Form from "./Form";
// import GoogleMaps from "./GoogleMaps";
import Subir from "./buttonUp";
function App() {
  return (
    <>
      <Navbar />
      <Seccion1 />
      <Carrusel />
      <CarruselInfo />
      <Form />
      {/* <GoogleMaps/> */}
      <Footer />
      <Subir />
    </>
  );
}

export default App;
