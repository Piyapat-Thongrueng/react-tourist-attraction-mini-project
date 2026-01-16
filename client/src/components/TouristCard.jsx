import IconLink from "./ui/IconLink";


const TouristCard = ({ place, onTagClick }) => {

    // ฟังก์ชันสำหรับคัดลอกลิงก์ไปยังคลิปบอร์ด (AI ช่วยเขียน)
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("คัดลอกลิงก์แล้ว!");
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const handleCopyLink = () => {
    copyToClipboard(place.url);
  };

  return (
    <>
      {/* รูปภาพหลักทางซ้าย */}
      <div className="col-span-1 md:col-span-4">
        <img
          src={place.photos[0]}
          alt={place.title}
          className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg"
        />
      </div>

      {/* เนื้อหาทางขวา */}
      <div className="col-span-1 md:col-span-6 flex flex-col space-y-2 md:space-y-5">
        {/* หัวข้อ */}
        <a
          href={place.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg md:text-xl lg:text-2xl font-bold"
        >
          {place.title}
        </a>

        {/* คำอธิบาย */}
        <p className="text-sm md:text-base text-gray-600 line-clamp-2 md:line-clamp-3">
          {place.description.slice(0, 100) +
            (place.description.length > 100 ? "..." : "")}
          <a
            href={place.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 cursor-pointer ml-1 hover:text-green-700"
          >
            อ่านต่อ
          </a>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 md:gap-3 text-sm md:text-base">
          <p className="text-gray-500 cursor-pointer hover:text-gray-700">
            หมวด:
          </p>
          {place.tags.map((tag, index) => (
            <button
              key={index}
              onClick={() => onTagClick(tag)}
              className="cursor-pointer hover:bg-sky-300 px-5 bg-sky-200 text-sky-700 rounded-full"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* รูปภาพย่อย 3 รูป */}
        <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-7 pt-3 md:pt-4 lg:pt-5">
          {place.photos.slice(1, 4).map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-full h-20 md:h-24 lg:h-full object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* ไอคอนลิงก์ทางขวาสุด */}
      <div className="col-span-1 md:col-span-2 flex items-end md:items-end justify-end">
        <IconLink copyClick={handleCopyLink} />
      </div>
    </>
  );
};

export default TouristCard;
