import InputForm from "./InputForm";
import TouristCard from "./TouristCard";

InputForm;
const SearchForm = () => {
  return (
    <section className="w-full">
      <header className="py-10 md:py-16 lg:py-20 px-4 md:px-8 lg:px-10 flex flex-col justify-center items-center space-y-4 md:space-y-6 lg:space-y-7">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-sky-500 text-center">
          เที่ยวไหนดี
        </h1>
        <InputForm />
        <h1 className="text-sm md:text-base lg:text-lg text-gray-500 text-center">
          หาที่เที่ยวแล้วไปกันเลยยย !!!
        </h1>
      </header>

      <main className="px-4 md:px-8 lg:px-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 lg:gap-10 px-4 md:px-6 lg:px-10 py-6 md:py-8 lg:py-10 bg-gray-100 rounded-xl shadow-xl mb-6 md:mb-8 lg:mb-10">
          <TouristCard />
        </div>
      </main>
    </section>
  );
};

export default SearchForm;
