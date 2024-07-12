import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ButtonContribute = ({ color }) => {
  return (
    <Link
      to={"/blog"}
      className={`border-2 border-${color} text-${color} py-3 px-4`}
    >
      Descubre
    </Link>
  );
};

ButtonContribute.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ButtonContribute;
