const Wrapper = ({ children }) => {
  return (
    <div className="h-[100dvh] p-4 grid grid-cols-[var(--column-width)_1fr] relative transition-all duration-500">
      {children}
    </div>
  );
};

export default Wrapper;
