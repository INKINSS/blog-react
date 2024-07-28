import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Logo from "../common/Logo";
import MenuMobile from "../common/MenuMobile";

const DetailArticle = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const url = import.meta.env.VITE_URL_BACKEND;
    fetch(`${url}article/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <MenuMobile />
      <Logo />
      <div className="lg:px-[20rem] ssm:px-[3rem]">
        <h1 className="text-primary text-[2rem] text-center font-bold">{data.detail.title}</h1>
        <p className="text-grayLight text-[1.1rem] mt-10">
          {data.detail.introduction}
        </p>
        <section className="flex flex-col space-y-5 mt-5">
          <div>
            <h2 className="text-primary text-[1.5rem] font-bold">
              {data.content.title_content_1}
            </h2>
            <p className="text-grayLight mt-3 text-[1.1rem]">
              {data.content.content_1}
            </p>
          </div>
          <div>
            <h2 className="text-primary text-[1.5rem] font-bold">
              {data.content.title_content_2}
            </h2>
            <p className="text-grayLight mt-3 text-[1.1rem]">
              {data.content.content_2}
            </p>
          </div>
          <div>
            <h2 className="text-primary text-[1.5rem] font-bold">
              {data.content.title_content_3}
            </h2>
            <p className="text-grayLight mt-3 text-[1.1rem]">
              {data.content.content_3}
            </p>
          </div>
          <div>
            <h2 className="text-primary text-[1.5rem] font-bold">
              {data.content.title_content_4}
            </h2>
            <p className="text-grayLight mt-3 text-[1.1rem]">
              {data.content.content_4}
            </p>
          </div>
          <div>
            <p className="text-grayLight mt-3 text-[1.1rem]">
              {data.content.conclution}
            </p>
          </div>
          <div className="flex justify-center py-16">
            <button
              className="bg-white w-24 text-primary border-2 border-primary font-semibold py-2 px-5 rounded-full hover:bg-primary hover:text-white transform duration-150"
              onClick={() => window.history.back()}
            >
              Volver
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DetailArticle;
