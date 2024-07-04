import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";

const MenuMobile = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleClick = () => {
    setMenuVisible(!menuVisible);
  };

  const itemMenu = [
    "inicio",
    "Colabora",
    "Descubre",
    "sobre nosotros",
    "GitHub",
  ];

  return (
    <header>
      <nav
        className={`fixed top-0 right-0 w-full h-screen bg-white transform transition-transform duration-300 ease-in-out ${
          menuVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="pt-14">
          {itemMenu.map((item) => (
            <li className="py-2 px-10" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex justify-end">
        <MdArrowBackIos
          size={"2rem"}
          className={`m-5 flex cursor-pointer ${
            menuVisible ? "rotate-180" : "rotate-0"
          } ${
            menuVisible ? "fixed" : "block"
          } transform transition-transform duration-300 ease-in-out`}
          onClick={handleClick}
        />
      </div>
    </header>
  );
};

export default MenuMobile;
