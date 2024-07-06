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
    <header className="relative">
      <nav
        className={`fixed top-0 z-10 right-0 w-full h-full bg-white transform transition-transform duration-300 ease-in-out ${
          menuVisible ? "translate-x-[20%]" : "translate-x-full"
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
