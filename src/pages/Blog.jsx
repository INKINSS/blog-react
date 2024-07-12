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
        <article className="px-10 pb-32">
          <h2 className="text-primary font-semibold text-[1.2rem]">
            Artículos recientes
          </h2>
          <article className="w-full flex gap-5">
            {loading ? (
              <p>Cargando...</p>
            ) : (
              data.map((item) => (
                <article
                  className="max-w-[23rem] shadow-card rounded-lg py-6 px-5 mt-10 flex flex-col justify-between"
                  key={item.id}
                  onClick={() => handleArticleClick(item.id)}
                >
                  <div>
                    <h3 className="font-bold text-[1.3rem] text-primary">{item.title}</h3>
                    <p className="text-grayLight font-normal mt-1 mb-3">
                      {item.description}
                    </p>
                  </div>

                  <section className="w-full flex gap-2 flex-wrap">
                    {item.tags.map((tag, index) => (
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
        </article>
      </main>
    </>
  );
};

export default Blog;
