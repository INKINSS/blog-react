import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="flex justify-center my-8">
      <div className="flex items-center relative">
        <IoSearch className="ml-4 text-grayLight absolute" />
      </div>
      <input
        className="border-2 border-grayLight text-grayLight text-[.8rem] text-center rounded-full py-2 px-6 focus:border-grayLight shadow-lg"
        type="text"
        placeholder="¿buscas algo?"
      />
    </div>
  );
};

export default Search;
