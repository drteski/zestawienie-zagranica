const Wrapper = ({ children }) => {
  return (
    <div className="h-[100dvh] p-4 grid grid-cols-[200px_1fr] gap-4">
      {children}
    </div>
  );
};

export default Wrapper;
