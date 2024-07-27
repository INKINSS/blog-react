import MenuMobile from "../common/MenuMobile";
import Logo from "../common/Logo";
import Search from "../common/Search";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import ButtonBackPage from "../common/ButtonBackPage";

const Blog = () => {
  const url = import.meta.env.VITE_URL_BACKEND;
  const { data, error } = useFetchData(`${url}`);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [storedData, setStoredData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("blogData");
    if (storedData) {
      setStoredData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    if (data) {
      setLoading(false);
      localStorage.setItem("blogData", JSON.stringify(data));
    }
  }, [data]);

  const handleArticleClick = (id) => {
    navigate(`/article/${id}`);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <MenuMobile />
      <main className="mt-20 w-full">
        <Logo />
        <Search />
        <h2 className="text-primary px-10 font-semibold text-[1.2rem] flex justify-start">
          Artículos recientes
        </h2>
        <article className="px-10 pb-16 flex justify-center flex-wrap">
          {loading ? (
            <p>Cargando...</p>
          ) : (
            (storedData || data).map((item) => (
              <article
                className="shadow-card rounded-lg py-6 px-5 mt-10 w-[14rem] max-w-[15rem] md:w-1/3 lg:w-1/4 xl:w-1/5 mx-5 hover:shadow-hoverCard transform duration-300 cursor-pointer"
                key={item.id}
                onClick={() => handleArticleClick(item.id)}
              >
                <div>
                  <h3 className="font-bold text-[1.3rem] text-primary">
                    {item.detail.title}
                  </h3>
                  <p className="text-grayLight font-normal mt-1 mb-3">
                    {item.detail.description}
                  </p>
                </div>

                <section className="w-full flex gap-2 flex-wrap">
                  {item.detail.tags &&
                    item.detail.tags.map((tag, index) => (
                      <span
                        className="text-[.85rem] font-light block border border-primary text-primary rounded-full px-3 py-1 hover:text-white hover:bg-primary transform duration-300"
                        key={`${item.id}-${index}`}
                      >
                        {tag}
                      </span>
                    ))}
                </section>
              </article>
            ))
          )}
        </article>
        <div className="flex justify-center pb-10">
          <ButtonBackPage />
        </div>
      </main>
    </>
  );
};

export default Blog;