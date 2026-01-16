const InputForm = () => {
  return (
    <form className="w-full px-4 md:px-0 md:w-10/12 lg:w-8/12 flex flex-col md:flex-row justify-center items-stretch md:items-center gap-3 md:gap-5 lg:gap-7">
      <input
        type="text"
        placeholder="ค้นหาที่เที่ยวได้เลย..."
        className="w-full md:flex-1 p-3 md:p-4 lg:p-5 text-base md:text-lg lg:text-xl border border-gray-400 rounded-lg md:rounded-xl lg:rounded-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
      />
      <button
        type="submit"
        className="w-full md:w-auto px-6 md:px-7 py-3 md:py-5 bg-gray-300 rounded-lg text-base md:text-lg lg:text-xl hover:bg-gray-400 active:bg-gray-500 transition-colors"
      >
        ค้นหา
      </button>
    </form>
  );
};

export default InputForm;
