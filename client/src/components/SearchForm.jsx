import InputForm from "./InputForm";
import TouristCard from "./TouristCard";
import axios from "axios";
import { useState, useEffect } from "react";

const SearchForm = () => {
  const [placeList, setPlaceList] = useState([]);
  const [searchText, setSearchText] = useState("");

  //   ฟังก์ชันสำหรับดึงข้อมูลสถานที่ทั้งหมด
  const fetchAllPlaces = async () => {
    try {
      const response = await axios.get("http://localhost:4001/trips?keywords=");
      setPlaceList(response.data.data);
    } catch (error) {
      console.error("ผิดพลาดในการดึงข้อมูลสถานที่:", error);
    }
  };

  //   ฟังก์ชันสำหรับจัดการการค้นหา
  const handleSearch = async (searchKeyword) => {
    try {
      const response = await axios.get(
        `http://localhost:4001/trips?keywords=${searchKeyword}`
      );
      setPlaceList(response.data.data);
    } catch (error) {
      console.error("ผิดพลาดในการดึงข้อมูลสถานที่:", error);
    }
  };

  //   ฟังก์ชันสำหรับจัดการการคลิกแท็ก(AI ช่วยเขียน)
  const handleTagClick = (tag) => {
    if (searchText.includes(tag)) {
      return;
    }

    let newText = "";

    if (searchText === "") {
      newText = tag;
    } else {
      newText = searchText + " " + tag;
    }

    setSearchText(newText);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    fetchAllPlaces();
  }, []);

  return (
    <section className="w-full">
      <header className="py-10 md:py-16 lg:py-20 px-4 md:px-8 lg:px-10 flex flex-col justify-center items-center space-y-4 md:space-y-6 lg:space-y-7">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-sky-500 text-center">
          เที่ยวไหนดี
        </h1>
        {/* ส่ง props เป็นฟังก์ชัน handleSearch และ state */}
        <InputForm
          onSearch={handleSearch}
          searchText={searchText}
          setSearchText={setSearchText}
        />
        <h1 className="text-sm md:text-base lg:text-lg text-gray-500 text-center">
          หาที่เที่ยวแล้วไปกันเลยยย !!!
        </h1>
      </header>

      <main className="px-4 md:px-8 lg:px-10">
        {placeList.map((place) => (
          <div
            key={place.eid}
            className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 lg:gap-10 px-4 md:px-6 lg:px-10 py-6 md:py-8 lg:py-10 bg-gray-100 rounded-xl shadow-xl mb-6 md:mb-8 lg:mb-10"
          >
            {/* ส่ง props เป็น state object place แต่ละตัวลงไปให้ TouristCard */}
            <TouristCard place={place} onTagClick={handleTagClick} />
          </div>
        ))}
      </main>
    </section>
  );
};

export default SearchForm;
