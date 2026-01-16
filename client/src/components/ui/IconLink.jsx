const IconLink = ({ copyClick }) => {
  return (
    <>
      <button
        onClick={copyClick}
        className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-blue-400 bg-white md:bg-transparent flex items-center justify-center hover:bg-blue-50 transition-colors shadow-md md:shadow-none"
      >
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
    </>
  );
};

export default IconLink;
