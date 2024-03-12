import About from "./About";
function info() {
  return (
    <section className="py-10 bg-black/70 sm:py-16 lg:py-24" id="Sobre-Nosotros">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
            Nuestros trabajadores mas experimentados
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-xl text-white">
            Estamos orgullosos de contar con un equipo que no solo cumple con
            las expectativas, sino que las supera, brindando resultados
            excepcionales y construyendo un estándar de calidad que nos
            distingue.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-8 sm:grid-cols-3 md:mt-16 lg:gap-x-12">
          <div>
            <img
              className="w-full md:h-[50vh] "
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-1.jpg"
              alt=""
            />
          </div>

          <div>
            <img
              className="w-full md:h-[50vh] "
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-2.jpg"
              alt=""
            />
          </div>

          <div>
            <img
              className="w-full md:h-[50vh] rounded-lg"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-3.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <About />
    </section>
  );
}

export default info;
