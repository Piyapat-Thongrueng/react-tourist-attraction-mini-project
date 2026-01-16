import taipei101 from "../assets/image.png";

const TouristCard = () => {
  return (
    <>
      {/* รูปภาพหลักทางซ้าย - Mobile: full width, Tablet/Desktop: 4 columns */}
      <div className="col-span-1 md:col-span-4">
        <img
          src={taipei101}
          alt="รีสอร์ท"
          className="w-full h-48 md:h-64 lg:h-full object-cover rounded-lg"
        />
      </div>

      {/* เนื้อหาทางขวา - Mobile: full width, Tablet/Desktop: 7 columns */}
      <div className="col-span-1 md:col-span-6 flex flex-col space-y-2 md:space-y-5">
        {/* หัวข้อ */}
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
          คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี? อ่านจบครบที่เดียว!
        </h2>

        {/* คำอธิบาย */}
        <p className="text-sm md:text-base text-gray-600 line-clamp-2 md:line-clamp-3">
          เวนว่างนั่นเที่ยวเกาะช้างกัน พร้อมทำกิจกรรมต่าง ๆ เช่น เที่ยวน้ำตก
          ล่องเรือชมปลาดาว ขี่ช้างท่องป่า
          <span className="text-blue-500 underline cursor-pointer ml-1 hover:text-blue-700">
            อ่านต่อ
          </span>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 md:gap-3 text-sm md:text-base">
          <span className="text-gray-500 underline cursor-pointer hover:text-gray-700">
            หมวด:
          </span>
          <span className="text-gray-500 underline cursor-pointer hover:text-gray-700">
            เกาะ
          </span>
          <span className="text-gray-500 underline cursor-pointer hover:text-gray-700">
            ทะเล
          </span>
          <span className="text-gray-500 underline cursor-pointer hover:text-gray-700">
            จุดชมวิว
          </span>
          <span className="text-gray-500 underline cursor-pointer hover:text-gray-700">
            ธรรมชาติ
          </span>
          <span className="text-gray-500">และ</span>
          <span className="text-gray-500 underline cursor-pointer hover:text-gray-700">
            ตราด
          </span>
        </div>

        {/* รูปภาพย่อย 3 รูป */}
        <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-7 pt-3 md:pt-4 lg:pt-5">
          <img
            src={taipei101}
            alt="ชายหาด"
            className="w-full h-20 md:h-24 lg:h-full object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
          />
          <img
            src={taipei101}
            alt="น้ำตก"
            className="w-full h-20 md:h-24 lg:h-full object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
          />
          <img
            src={taipei101}
            alt="จุดชมวิว"
            className="w-full h-20 md:h-24 lg:h-full object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
          />
        </div>
      </div>

      {/* ไอคอนลิงก์ทางขวาสุด - Mobile: absolute top-right, Desktop: 1 column */}
      <div className="col-span-2 flex items-end md:items-end justify-end">
      
        <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-blue-400 bg-white md:bg-transparent flex items-center justify-center hover:bg-blue-50 transition-colors shadow-md md:shadow-none">
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default TouristCard;
