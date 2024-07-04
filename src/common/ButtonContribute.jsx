import PropTypes from "prop-types";

const ButtonContribute = ({ color }) => {
  return (
    <button className={`border-2 border-${color} text-${color} py-3 px-4`}>
      Contribuir
    </button>
  );
};

ButtonContribute.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ButtonContribute;
