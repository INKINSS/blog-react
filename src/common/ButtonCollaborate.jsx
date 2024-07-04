import PropTypes from "prop-types";

const ButtonCollaborate = ({ color }) => {
  return (
    <button className={`border-2 border-${color} text-${color} py-3 px-4`}>
      Colaborar
    </button>
  );
};

ButtonCollaborate.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ButtonCollaborate;
