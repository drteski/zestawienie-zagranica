const CountryTableContainer = ({ children, country }) => {
  return (
    <div className="flex border border-primary/5 rounded-md mb-4">
      <div className="grid grid-rows-[40.5px_1fr_40.5px] grid-cols-1 items-center justify-between overflow-hidden text-xl font-bold border-r text-foreground  w-[200px]">
        <div className="h-[40.5px] w-full bg-primary/5"></div>
        <div className="flex h-full items-center justify-center">{country}</div>
        <div className="h-[40.5px] w-full bg-primary/5"></div>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default CountryTableContainer;
