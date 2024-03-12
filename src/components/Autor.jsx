function Autor() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-center md:space-x-14">
          <div className="relative flex-shrink-0 w-48 h-48">
            <div className="absolute w-48 h-48 bg-gray-300 rounded-full -bottom-2 -right-1"></div>
            <img
              className="relative object-cover w-48 h-48 rounded-full"
              src="/assets/icono.png"
              alt=""
            />
          </div>

          <div className="mt-10 md:mt-0">
            <blockquote>
              <p className="text-xl text-black">
                Este proyecto ha sido cuidadosamente desarrollado utilizando las
                tecnologías de React y Tailwind CSS. La combinación de la
                eficiencia y flexibilidad de React con la capacidad de diseño
                ágil y estilización potente de Tailwind ha permitido crear una
                experiencia única y robusta. Desde la organización estructurada
                del código hasta el diseño estilizado y responsivo, la sinergia
                entre React y Tailwind ha sido clave en la materialización
                exitosa de este proyecto.
              </p>
            </blockquote>
            <p className="text-lg font-semibold text-black mt-7">
              José Manuel Garrido González
            </p>
            <p className="mt-1 text-base text-gray-600">
              Desarrollador Junior
              <div className="flex items-center">
                <a
                  href="https://github.com/killerzero337"
                  id="github-link"
                  className="flex items-center text-black"
                >
                  <img
                    src="/icons/github.svg"
                    alt="GitHub"
                    className="w-10 h-10 mr-2"
                  />
                  <p
                    id="Texto-Invitacion"
                    className="overflow-hidden border-r-2 border-white whitespace-nowrap ml-2"
                  >
                    Te invito a revisar mis repositorios
                  </p>
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Autor;
