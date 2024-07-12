import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="flex justify-center my-8">
      <div className="flex items-center relative">
        <IoSearch className="ml-4 text-grayLight absolute" />
      </div>
      <input
        className="border-2 border-grayExtraLight h-[3rem] w-[16rem] text-grayLight text-[.9rem] text-center rounded-full py-2 px-10 focus:border-grayLight shadow-lg"
        type="text"
        placeholder="¿buscas algo?"
      />
    </div>
  );
};

export default Search;
