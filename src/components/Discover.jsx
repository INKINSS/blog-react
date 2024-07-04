import ButtonContribute from "../common/ButtonContribute";

const Discover = () => {
  return (
    <section className="py-5 px-5">
      <h3 className="text-primary text-[1.5rem] font-semibold mb-4">
        Descubre
      </h3>
      <p className="text-grayLight text-center">
        Descubre temas de tu interés explorando filtros y categorías que
        faciliten la búsqueda y navegación, permitiéndote encontrar información
        relevante de manera eficiente y precisa.
      </p>
      <div className="flex justify-center py-5">
        <ButtonContribute color="grayLight" />
      </div>
    </section>
  );
};

export default Discover;
