import Logo from "../common/Logo";
import MenuMobile from "../common/MenuMobile";
import ButtonBackPage from "../common/ButtonBackPage";
import useFetchData from "../hooks/useFetchData";
import { formatDate } from "../utils/formatDate";
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
          <article className="mt-20 lg:px-[14rem] lg:mb-[5rem] ssm:px-5">
            <Logo />
            <div className="mt-16 lg:px-20 ssm:px-5 flex flex-col">
              <h1 className="text-primary text-[2rem] font-bold">
                {data.detail.title}
              </h1>
              <div className="flex gap-2">
                <span className="text-grayLight text-[.9rem] font-light">
                  {formatDate(data.user.publishDate)}
                </span>
                <span className="text-grayLight text-[.9rem] font-light">
                  {data.user.nickname}
                </span>
                <span className="text-grayLight text-[.9rem] font-light">
                  {data.user.username}
                </span>
              </div>
              <p className="text-grayLight mt-10">{data.detail.introduction}</p>
              <section className="flex flex-col space-y-5 mt-5">
                <div>
                  <h2 className="text-primary text-[1.3rem] font-bold">
                    {data.content.title_content_1}
                  </h2>
                  <p className="text-grayLight mt-3">
                    {data.content.content_1}
                  </p>
                </div>
                <div>
                  <h2 className="text-primary text-[1.3rem] font-bold">
                    {data.content.title_content_2}
                  </h2>
                  <p className="text-grayLight mt-3">
                    {data.content.content_2}
                  </p>
                </div>
                <div>
                  <h2 className="text-primary text-[1.3rem] font-bold">
                    {data.content.title_content_3}
                  </h2>
                  <p className="text-grayLight mt-3">
                    {data.content.content_3}
                  </p>
                </div>
                <div>
                  <h2 className="text-primary text-[1.3rem] font-bold">
                    {data.content.title_content_4}
                  </h2>
                  <p className="text-grayLight mt-3">
                    {data.content.content_4}
                  </p>
                </div>
                <div>
                  <h2 className="text-primary text-[1.3rem] font-bold">
                    {data.content.title_conclution}
                  </h2>
                  <p className="text-grayLight mt-3">
                    {data.content.conclution}
                  </p>
                </div>
              </section>
            </div>
            <div className="flex justify-center my-10">
              <ButtonBackPage />
            </div>
          </article>
        </>
      )}
    </article>
  );
};

export default DetailArticle;
