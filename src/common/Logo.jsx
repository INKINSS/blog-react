import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex justify-center">
      <Link
        to={"/"}
        className="text-primary inline-block mt-8 mb-4 text-[2rem] lg:text-[3.5rem] font-bold text-center"
      >
        llcomment
      </Link>
    </div>
  );
};

export default Logo;
