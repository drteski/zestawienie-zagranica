const CountryTableContainer = ({ children, country }) => {
  return (
    <div className="flex border border-gray-400 rounded-md mb-4">
      <div className="border-r border-gray-400 text-xl font-bold text-gray-600 flex flex-col gap-8 items-center justify-center w-[200px]">
        {country}
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default CountryTableContainer;
