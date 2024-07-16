const ButtonBackPage = () => {
  return (
    <button
      className="text-center bg-white hover:bg-primary hover:text-white transform duration-200 rounded-full border-2 border-primary px-7 py-2"
      onClick={() => window.history.back()}
    >
      Volver
    </button>
  );
};

export default ButtonBackPage;
