function Header({ theme }) {

  const textColor =
    theme === 1
      ? "text-white"
      : theme === 2
        ? "text-black"
        : "text-[#F5C400]";

  return (
    <header className="w-full flex justify-between items-center  ">

      <h1 className={`text-2xl font-bold ${textColor}`}>
        calc
      </h1>

    </header>
  );
}

export default Header;