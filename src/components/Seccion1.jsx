function Seccion1() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 w-screen mt-[5vh] sm:mt-[-20vh] md:mt-[0] place-content-center">
      {/* Columna con la foto */}
      <div className="h-full bg-cover bg-center ">
        {/* Agrega la imagen de fondo */}
        <img
          src="/assets/blog-post-1.jpg"
          alt="Descripción de la imagen"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex items-center bg-white p-10 md:p-9">
        <div>
          <h2 className=" text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl lg:leading-tight">
            Arquitectura con Enfoque en las Personas
          </h2>
          <p className="text-gray-700">
            La Arquitectura centrada en las personas va más allá de lo estético.
            Crea espacios que inspiran y satisfacen necesidades humanas. Cada
            detalle se elige con cuidado para equilibrar funcionalidad y
            emoción, mejorando la calidad de vida. Es más que estructuras; es
            contar historias a través de espacios que se convierten en refugios,
            fomentando la conexión humana y contribuyendo a la narrativa
            colectiva de la sociedad.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Seccion1;
