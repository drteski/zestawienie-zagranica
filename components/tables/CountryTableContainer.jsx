const CountryTableContainer = ({ children, country }) => {
  return (
    <div className="flex border border-primary/5 rounded-md overflow-clip mb-4">
      <div className="grid grid-rows-[48.5px_1fr_32px] grid-cols-1 items-center justify-between overflow-clip text-normal font-bold text-foreground w-[100px]">
        <div className="sticky z-50 top-0 h-[48.5px] w-full bg-gray-200"></div>
        <div className="flex relative z-0 h-full items-center justify-center border-r">
          {country}
        </div>
        <div className="h-[32px] w-full bg-primary"></div>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default CountryTableContainer;
