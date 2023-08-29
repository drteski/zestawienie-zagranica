const CountryTableContainer = ({ children, country }) => {
  return (
    <div className="flex border border-primary rounded-md mb-4">
      <div className="bg-foreground text-xl font-bold text-primary-foreground flex flex-col gap-8 items-center justify-center w-[200px]">
        {country}
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default CountryTableContainer;
