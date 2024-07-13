import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to={"/"}
      className="text-primary block mt-8 mb-4 text-[2rem] font-bold text-center"
    >
      llcomment
    </Link>
  );
};

export default Logo;
