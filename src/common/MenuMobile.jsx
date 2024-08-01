import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

const MenuMobile = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleClick = () => {
    setMenuVisible(!menuVisible);
  };

  const itemMenu = [
    { name: "inicio", url: "/" },
    { name: "Colabora", url: "/collaborate" },
    { name: "Descubre", url: "/blog" },
    { name: "GitHub", url: "https://github.com/INKINSS" },
  ];

  return (
    <header className="relative">
      <nav
        className={`fixed top-0 z-10 right-0 w-full h-full bg-white transform transition-transform duration-300 ease-in-out ${
          menuVisible ? "sm:translate-x-[20%] lg:translate-x-[65%] md:translate-x-[50%]" : "translate-x-full"
        }`}
      >
        <ul className="pt-14">
          {itemMenu.map((item) => (
            <li key={item.name} className="py-2 px-10">
              <Link className="hover:text-primary text-grayLight sm:text-[1.2rem] lg:text-[1.3rem]" to={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex justify-end">
        <MdArrowBackIos
          size={"2rem"}
          className={`m-5 cursor-pointer z-20 transform transition-transform duration-300 ease-in-out text-grayLight ${
            menuVisible ? "rotate-180 fixed" : "rotate-0 absolute"
          }`}
          onClick={handleClick}
        />
      </div>
    </header>
  );
};

export default MenuMobile;