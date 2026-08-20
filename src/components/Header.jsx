// function Header() {
//   return (
//     <header className="flex justify-between items-center mb-8">
//       <h1 className="text-2xl font-bold">
//         CLC
//       </h1>

//       <button className="text-lg font-medium">
//         Theme
//       </button>
//     </header>
//   );
// }

// export default Header;
function Header({ theme }) {

  const textColor =
    theme === 1
      ? "text-white"
      : theme === 2
        ? "text-black"
        : "text-[#F5C400]";

  return (
    <header className="w-full flex justify-between items-center mb-6">

      <h1 className={`text-2xl font-bold ${textColor}`}>
        CLC
      </h1>

    </header>
  );
}

export default Header;