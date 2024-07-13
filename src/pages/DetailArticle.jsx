import Logo from "../common/Logo";
import MenuMobile from "../common/MenuMobile";
import useFetchData from "../hooks/useFetchData";
import { useParams } from "react-router-dom";

const DetailArticle = () => {
  const { id } = useParams();
  const { data, error } = useFetchData(`http://localhost:3000/article/${id}`);

  if (error) {
    return <div>Error, pagina no encontrada: {error.message}</div>;
  }

  return (
    <article>
      {!data ? (
        <span>cargando</span>
      ) : (
        <>
          <MenuMobile />
          <article className="mt-20 lg:px-[10rem] ssm:px-5">
            <Logo />
            <div className="mt-16 lg:px-20 ssm:px-5 flex flex-col">
              <h1 className="text-primary text-[2rem] text-center font-bold lg:mb-16 sm:mb-5">
                {data.title}
              </h1>
              <section className="my-6">
                <h2 className="text-primary text-[1.6rem] font-bold">
                  Introducción
                </h2>
                <p className="text-[1.2rem] text-grayLight font-normal">
                  {data.introduction}
                </p>
              </section>
              <section className="my-6">
                <h2 className="text-primary text-[1.6rem] font-bold">
                  {data.title_content_1}
                </h2>
                <p className="text-[1.2rem] text-grayLight font-normal">
                  {data.content_1}
                </p>
              </section>
              <section className="my-6">
                <h2 className="text-primary text-[1.6rem] font-bold">
                  {data.title_content_2}
                </h2>
                <p className="text-[1.2rem] text-grayLight font-normal">
                  {data.content_2}
                </p>
              </section>
              <button onClick={() => window.history.back()}>Volver</button>
            </div>
          </article>
        </>
      )}
    </article>
  );
};

export default DetailArticle;
