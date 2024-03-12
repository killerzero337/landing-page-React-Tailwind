function About() {
  return (
    <section className="py-10 bg-transparent sm:py-16 lg:py-24">
      <div className="flex flex-col px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 justify-center items-center">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            ¿Quiénes somos?
          </h2>
          <div className="mt-4">
            <img src="/assets/lobo-claro.png" alt="" className="mx-auto" />
          </div>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-white">
            En Kastell, no simplemente diseñamos espacios; creamos experiencias
            que trascienden lo ordinario. Somos un equipo apasionado de
            diseñadores de interiores comprometidos con la transformación de
            entornos y la creación de ambientes que cuentan historias.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt=""
            />
          </div>

          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 1 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-yellow-500 md:mt-10">
                Nuestra Misión
              </h3>
              <p className="mt-4 text-base text-gray-200">
                Impulsados por la creatividad y la innovación, nuestra misión es
                llevar el diseño de interiores a nuevos horizontes. Nos
                esforzamos por superar las expectativas de nuestros clientes,
                dando vida a sus visiones y creando espacios que reflejen su
                personalidad y estilo de vida.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 2 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-yellow-500 md:mt-10">
                Enfoque Colaborativo
              </h3>
              <p className="mt-4 text-base text-gray-200">
                La colaboración es el corazón de nuestro proceso creativo.
                Trabajamos estrechamente con nuestros clientes, comprendiendo
                sus sueños y necesidades, para co-crear espacios que no solo
                satisfacen, sino que también sorprenden. Nos esforzamos por
                construir relaciones sólidas basadas en la confianza y la
                transparencia.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 3 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-yellow-500 md:mt-10">
                Experiencia y Trayectoria
              </h3>
              <p className="mt-4 text-base text-gray-200">
                Con años de experiencia en la industria, hemos acumulado un
                portafolio diverso de proyectos exitosos. Desde residencias
                privadas hasta espacios comerciales y corporativos, nuestro
                legado se construye sobre la base de la excelencia y la
                satisfacción del cliente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
