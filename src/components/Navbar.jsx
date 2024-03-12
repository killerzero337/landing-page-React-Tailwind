import Carrusel from "./Carrusel";
function Navbar() {
  return (
    <>
      <div className="py-6 px-4 md:px-8 lg:px-16 bg-white flex justify-between md:text-[2vh] text-neutral-900 z-10 ">
        <a href="/">
          <div className="bg-[url('/assets/logo-dark.png')] bg-center h-12 w-32 md:h-12 md:w-44 bg-contain bg-no-repeat"></div>
        </a>

        <ul className="hidden md:flex items-center space-x-5 ">
          <li>
            <a
              href="#Sobre-Nosotros"
              className="relative transition duration-500 ease-in-out hover:text-black hover:bg-yellow-500/50 hover:p-0 border border-transparent"
            >
              <span>Sobre nosotros</span>
            </a>
          </li>
          <li>
            <a
              href="#Form"
              className="relative transition duration-500 ease-in-out hover:text-black  hover:bg-yellow-500/50 hover:p-0 border border-transparent"
            >
              Contactanos
            </a>
          </li>
          <li>
            <a
              href="#Empresas"
              className="relative transition duration-500 ease-in-out hover:text-black  hover:bg-yellow-500/50 hover:p-0 border border-transparent"
            >
              Nuestros proveedores
            </a>
          </li>
          <li>
            <a
              href="#Proyectos"
              className="relative transition duration-500 ease-in-out hover:text-black  hover:bg-yellow-500/50 hover:p-0 border border-transparent"
            >
              Proyectos realizados
            </a>
          </li>
        </ul>

        <button className="space-y-1 group md:hidden">
          <div className="w-6 h-1 bg-gray-700"></div>
          <div className="w-6 h-1 bg-gray-900"></div>
          <div className="w-6 h-1 bg-gray-700"></div>

          <ul className=" bg-gray-100  w-screen pb-1 absolute -top-full group-focus:top-[-10px] right-0 duration-500 flex flex-col space-y-3 justify-end z-10">
            <button className="px-8 md:px-10 py-6 relative ml-auto">
              <div className="w-6 h-1 rotate-45 absolute bg-black"></div>
              <div className="w-6 h-1 -rotate-45 absolute bg-black"></div>
            </button>
            <li className="flex justify-center w-full py-3 md:py-4 hover:bg-yellow-500/50">
              <a href="#Sobre-Nosotros">Sobre nosotros</a>
            </li>
            <li className="flex justify-center w-full py-3 md:py-4 hover:bg-yellow-500/50">
              <a href="#Form">Contacto</a>
            </li>
            <li className="flex justify-center w-full py-3 md:py-4 hover:bg-yellow-500/50">
              <a href="#Empresas">Nuestros proveedores</a>
            </li>
            <li className="flex justify-center w-full py-3 md:py-4 hover:bg-yellow-500/50">
              <a href="#Proyectos">Proyectos realizados</a>
            </li>
          </ul>
        </button>
      </div>
      <div></div>
      <Carrusel />
      <hr className="block sm:hidden bg-yellow-500 h-[0.3vh] my-10" />
    </>
  );
}

export default Navbar;
