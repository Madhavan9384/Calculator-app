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


function CalculatorButtons({ onButtonClick }) {
  const buttons = [
    "7", "8", "9", "DEL",
    "4", "5", "6", "+",
    "1", "2", "3", "-",
    ".", "0", "/", "*",
  ];

  return (
    <div className="grid grid-cols-4 gap-3">

      {buttons.map((button) => (
        <button
          key={button}
          onClick={() => onButtonClick(button)}
          className="h-16 rounded-xl bg-gray-100 shadow"
        >
          {button}
        </button>
      ))}

      <div className="col-span-4 grid grid-cols-2 gap-3">
        {["Reset", "="].map((button) => (
          <button
            key={button}
            onClick={() => onButtonClick(button)}
            className="h-16 rounded-xl bg-gray-100 shadow"
          >
            {button}
          </button>
        ))}
      </div>

    </div>
  );
}

export default CalculatorButtons;