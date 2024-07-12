import MenuMobile from "../common/MenuMobile";
import Logo from "../common/Logo";
import Search from "../common/Search";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";

const Blog = () => {
  const { data, error } = useFetchData("http://localhost:3000"); // Llamamos a useFetchData directamente
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setLoading(false);
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
      <main className="mt-20">
        <Logo />
        <Search />
        <article className="px-10">
          <h2 className="text-primary font-semibold text-[1.2rem]">
            Artículos recientes
          </h2>
          <article className="w-full">
            {loading ? (
              <p>Cargando...</p>
            ) : (
              data.map((item) => (
                <article
                  className="max-w-[13rem] min-h-[20rem] shadow-card rounded-lg py-6 px-5 mt-10"
                  key={item.id}
                  onClick={() => handleArticleClick(item.id)}
                >
                  <h3 className="font-bold text-[1.5rem]">{item.title}</h3>
                  <p className="text-grayLight font-normal mt-1 mb-3">
                    {item.description}
                  </p>
                  <section className="w-full flex gap-2 flex-wrap">
                    {data.map((item) =>
                      item.tags.map((tag, index) => (
                        <span
                          className="text-sm block border border-grayExtraLight rounded-full px-3"
                          key={`${item.id}-${index}`}
                        >
                          {tag}
                        </span>
                      ))
                    )}
                  </section>
                </article>
              ))
            )}
          </article>
        </article>
      </main>
    </>
  );
};

export default Blog;
