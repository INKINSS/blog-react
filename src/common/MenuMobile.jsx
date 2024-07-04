import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";

const MenuMobile = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleClick = () => {
    setMenuVisible(!menuVisible);
  };

  const itemMenu = ["inicio", "contribuir", "colaborar", "sobre nosotros"];

  return (
    <header className="relative">
      <nav
        className={`fixed top-0 right-0 w-full h-full bg-white transform transition-transform duration-300 ease-in-out ${
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
      <MdArrowBackIos
        size={"2rem"}
        className={`m-5 absolute top-0 right-0 cursor-pointer ${
          menuVisible ? "rotate-180" : "rotate-0"
        } transform transition-transform duration-300 ease-in-out`}
        onClick={handleClick}
      />
    </header>
  );
};

export default MenuMobile;
