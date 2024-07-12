import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ButtonCollaborate = ({ color }) => {
  return (
    <Link
      to={"/collaborate"}
      className={`border-2 border-${color} text-${color} py-3 px-4`}
    >
      Colabora
    </Link>
  );
};

ButtonCollaborate.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ButtonCollaborate;
