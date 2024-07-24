import ButtonBackPage from "../common/ButtonBackPage";

const Page404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <article className="shadow-card rounded-lg py-6 px-5 mt-10 w-[14rem] max-w-[15rem] md:w-1/3 lg:w-1/4 xl:w-1/5 mx-5 hover:shadow-hoverCard transform duration-300 cursor-pointer mb-10">
        <div>
          <h3 className="font-bold text-[1.3rem] text-primary">
            ¿Qué significa el error 404?
          </h3>
          <p className="text-grayLight font-normal mt-1 mb-3">
            El error 404 indica que la página que estás buscando no se encuentra disponible. Pero tranquilo, puedes regresar de donde veniste.
          </p>
        </div>

        <section className="w-full flex gap-2 flex-wrap">
          <span className="text-[.85rem] font-light block border border-primary text-primary rounded-full px-3 py-1 hover:text-white hover:bg-primary transform duration-300">
            HTTP
          </span>
          <span className="text-[.85rem] font-light block border border-primary text-primary rounded-full px-3 py-1 hover:text-white hover:bg-primary transform duration-300">
            404
          </span>
        </section>
      </article>
      <ButtonBackPage />
    </div>
  );
};

export default Page404;
