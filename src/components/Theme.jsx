// // function Theme({ theme, setTheme }) {
// //   const handleThemeChange = () => {
// //     setTheme((prev) => {
// //       if (prev === 3) {
// //         return 1;
// //       }

// //       return prev + 1;
// //     });
// //   };

// //   return (
// //     <div className="flex flex-col items-center gap-1">

// //       <p className="text-sm font-bold">
// //         {theme}
// //       </p>

// //       <button
// //         onClick={handleThemeChange}
// //         className="px-5 py-2 rounded-xl bg-gray-200 text-black font-bold"
// //       >
// //         Theme
// //       </button>

// //     </div>
// //   );
// // }

// // export default Theme;



// function Theme({ theme, setTheme }) {
//   const handleThemeChange = () => {
//     setTheme((prev) => {
//       if (prev === 3) {
//         return 1;
//       }

//       return prev + 1;
//     });
//   };

//   return (
//     <div className="flex flex-col items-center gap-2">

//       {/* 1 2 3 */}
//       <div className="flex justify-between w-20 text-sm font-bold">
//         <span>1</span>
//         <span>2</span>
//         <span>3</span>
//       </div>

//       {/* ONE BUTTON */}
//       <button
//         onClick={handleThemeChange}
//         className="w-20 h-6 bg-gray-300 rounded-full relative"
//       >
//         <span
//           className={`absolute top-1 w-4 h-4 bg-black rounded-full transition-all duration-300 ${
//             theme === 1
//               ? "left-1"
//               : theme === 2
//               ? "left-7"
//               : "left-[60px]"
//           }`}
//         ></span>
//       </button>

//     </div>
//   );
// }

// export default Theme;


function Theme({ theme, setTheme }) {
  const textColor =
    theme === 1
      ? "text-white"
      : theme === 2
        ? "text-black"
        : "text-[#F5C400]";
  const thembutton =
    theme === 1
      ? "bg-gray-800"
      : theme === 2
        ? "bg-gray-100"
        : "bg-[#111A4A]";

  const themcrcbutton =
    theme === 1
      ? "bg-[#C85407] text-white border-b-4 border-[#8F3A00]"
      : theme === 2
        ? "bg-[#C85407] text-white border-b-4 border-[#8F3A00]"
        : "bg-[#22D3EE] text-white border-b-4 border-[#0891B2]";
  const themlogik =

    theme === 1
      ? "left-1"
      : theme === 2
        ? "left-[22px]"
        : "left-[39px]";
  const themeButtons = [1, 2, 3];
  const themeNumbers = [1, 2, 3];

  return (
    <div className="flex flex-col items-center gap-2">


      <div className="flex justify-between w-14 text-sm font-bold">
        {themeNumbers.map((number) => (
          <p key={number} className={textColor}>
            {number}
          </p>
        ))}
      </div>

      <div className={`relative w-14 h-5 bg-gray-300 rounded-full ${thembutton}`}>

        {themeButtons.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setTheme(item)}
            className={`absolute top-0 h-full w-1/3 z-10 ${item === 1
                ? "left-0"
                : item === 2
                  ? "left-1/3"
                  : "right-0"
              }`}
          ></button>
        ))}

        <span
          className={`absolute top-1 w-3 h-3 rounded-full transition-all duration-300 ${themlogik} ${themcrcbutton}`}
        ></span>

      </div>

    </div>
  );
}

export default Theme;