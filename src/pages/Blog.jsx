import MenuMobile from "../common/MenuMobile";
import Logo from "../common/Logo";
import Search from "../common/Search";
import { useEffect, useState } from "react";
import FetchData from "../services/FetchData";

const Blog = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await FetchData();
        setData(result);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <MenuMobile />
      <main className="mt-20">
        <Logo />
        <Search />
        <h2>artículos recientes</h2>
        <article>
          {data ? (
            data.map((item) => (
              <section key={item.title}>
                <h3>{item.title}</h3>
              </section>
            ))
          ) : (
            <p>Cargando...</p> // Mensaje o componente de carga
          )}
        </article>
      </main>
    </>
  );
};

export default Blog;
