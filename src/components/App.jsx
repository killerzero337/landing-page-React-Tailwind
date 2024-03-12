import "./App.css";
import Navbar from "./Navbar";
import Seccion1 from "./Seccion1";
import Footer from "./Footer";
import CarruselInfo from "./CarruselInfo";
import Form from "./Form";
// import GoogleMaps from "./GoogleMaps";
import Subir from "./FlechaNav";
import SeccionEmpleados from "./empleados";
import Autor from "./Autor";
import Proyectos from "./ProyectosRealizados";
function App() {
  return (
    <>
      <Navbar />
      <Seccion1 />
      <SeccionEmpleados />
      <CarruselInfo />
      <Proyectos />
      <Form />
      <Autor />
      {/* <GoogleMaps/> */}
      <Footer />
      <Subir />
    </>
  );
}

export default App;
