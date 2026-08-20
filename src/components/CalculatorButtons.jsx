// function CalculatorButtons({ onButtonClick }) {
//   const buttons = [
//     "7", "8", "9", "DEL",
//     "4", "5", "6", "+",
//     "1", "2", "3", "-",
//     ".", "0", "/", "*",
//   ];

//   return (
//     <div className="grid grid-cols-4 gap-3">

//       {buttons.map((button) => (
//         <button
//           key={button}
//           onClick={() => onButtonClick(button)}
//           className="h-16 rounded-xl bg-gray-100 shadow"
//         >
//           {button}
//         </button>
//       ))}

//       <div className="grid grid-cols-2 gap-3 col-span-4">

//         <button
//           onClick={() => onButtonClick("Reset")}
//           className="h-16 rounded-xl bg-gray-100 shadow"
//         >
//           Reset
//         </button>

//         <button
//           onClick={() => onButtonClick("=")}
//           className="h-16 rounded-xl bg-gray-100 shadow"
//         >
//           =
//         </button>

//       </div>

//     </div>
//   );
// }

// export default CalculatorButtons;



// function CalculatorButtons({ onButtonClick }) {
//   const buttons = [
//     "7", "8", "9", "DEL",
//     "4", "5", "6", "+",
//     "1", "2", "3", "-",
//     ".", "0", "/", "*",
//   ];

//   return (
//     <div className="grid grid-cols-4 gap-3">

//       {buttons.map((button) => (
//         <button
//           key={button}
//           onClick={() => onButtonClick(button)}
//           className="h-16 rounded-xl bg-gray-100 shadow"
//         >
//           {button}
//         </button>
//       ))}

//       <div className="grid grid-cols-2 gap-3 col-span-4">

//         <button
//           onClick={() => onButtonClick("Reset")}
//           className="h-16 rounded-xl bg-gray-100 shadow"
//         >
//           Reset
//         </button>

//         <button
//           onClick={() => onButtonClick("=")}
//           className="h-16 rounded-xl bg-gray-100 shadow"
//         >
//           =
//         </button>

//       </div>

//     </div>
//   );
// }

// export default CalculatorButtons;


// function CalculatorButtons({ onButtonClick }) {
//   const buttons = [
//     "7", "8", "9", "DEL",
//     "4", "5", "6", "+",
//     "1", "2", "3", "-",
//     ".", "0", "/", "*",
//   ];

//   return (
//     <div className="grid grid-cols-4 gap-3">

//       {buttons.map((button) => (
//         <button
//           key={button}
//           onClick={() => onButtonClick(button)}
//           className="h-16 rounded-xl bg-gray-100 shadow"
//         >
//           {button}
//         </button>
//       ))}

//       <div className="col-span-4 grid grid-cols-2 gap-3">
//         {["Reset", "="].map((button) => (
//           <button
//             key={button}
//             onClick={() => onButtonClick(button)}
//             className="h-16 rounded-xl bg-gray-100 shadow"
//           >
//             {button}
//           </button>
//         ))}
//       </div>

//     </div>
//   );
// }

// export default CalculatorButtons;



// function CalculatorButtons({ onButtonClick, theme }) {
//   const buttons = [
//     "7", "8", "9", "DEL",
//     "4", "5", "6", "+",
//     "1", "2", "3", "-",
//     ".", "0", "/", "*",
//     "Reset", "=",
//   ];

//   const normalButtonColor =
//   theme === 1
//     ? "bg-gray-100 text-black border-b-4 border-gray-500"
//     : theme === 2
//     ? "bg-white text-black border-b-4 border-gray-500"
//     : "bg-[#293B91] text-[#F5C400] border-b-4 border-[#A855F7]";

//   const actionButtonColor =
//     theme === 1
//       ? "bg-gray-500 text-white border-b-4 border-gray-700"
//       : theme === 2
//       ? "bg-blue-400 text-white border-b-4 border-blue-900 "
//       : "bg-[#7C3AED] text-white border-b-4 border-[#A855F7]";

//   return (
//     <div className="grid grid-cols-4 gap-3">

//       {buttons.map((button) => {

//         const isAction =
//           button === "DEL" ||
//           button === "Reset";

//         return (
//           <button
//             key={button}
//             onClick={() => onButtonClick(button)}
//             className={`
//               h-16 rounded-xl shadow font-bold
//               ${isAction ? actionButtonColor : normalButtonColor}
//               ${button === "Reset" || button === "=" ? "col-span-2" : ""}
//             `}
//           >
//             {button}
//           </button>
//         );
//       })}

//     </div>
//   );
// }

// export default CalculatorButtons;




function CalculatorButtons({ onButtonClick, theme }) {
  const buttons = [
    "7", "8", "9", "DEL",
    "4", "5", "6", "+",
    "1", "2", "3", "-",
    ".", "0", "/", "*",
    "Reset", "=",
  ];

  const normalButtonColor =
    theme === 1
      ? "bg-gray-100 text-black border-b-4 border-gray-500"
      : theme === 2
      ? "bg-white text-black border-b-4 border-gray-500"
      : "bg-[#293B91] text-[#F5C400] border-b-4 border-[#A855F7]";

  const actionButtonColor =
    theme === 1
      ? "bg-gray-500 text-white border-b-4 border-gray-700"
      : theme === 2
      ? "bg-blue-400 text-white border-b-4 border-blue-900"
      : "bg-[#7C3AED] text-white border-b-4 border-[#A855F7]";

  const equalButtonColor =
    theme === 1
      ? "bg-[#C85407] text-white border-b-4 border-[#8F3A00]"
      : theme === 2
      ? "bg-[#C85407] text-white border-b-4 border-[#8F3A00]"
      : "bg-[#22D3EE] text-white border-b-4 border-[#0891B2]";

  return (
    <div className="grid grid-cols-4 gap-3">

      {buttons.map((button) => {

        const isAction =
          button === "DEL" ||
          button === "Reset";

        const isEqual = button === "=";

        return (
          <button
            key={button}
            onClick={() => onButtonClick(button)}
            className={`
              h-16 rounded-xl shadow font-bold
              ${
                isEqual
                  ? equalButtonColor
                  : isAction
                  ? actionButtonColor
                  : normalButtonColor
              }
              ${
                button === "Reset" || button === "="
                  ? "col-span-2"
                  : ""
              }
            `}
          >
            {button}
          </button>
        );
      })}

    </div>
  );
}

export default CalculatorButtons;