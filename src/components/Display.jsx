// function Display({ display }) {
//   return (
//     <div className="w-full min-h-24 bg-gray-100 rounded-xl mb-6 px-4 py-3 flex items-center justify-end overflow-hidden">
//       <p className="text-3xl font-bold break-all text-right">
//         {display || "0"}
//       </p>
//     </div>
//   );
// }

// export default Display;

function Display({ display, theme }) {
  const displayColor =
    theme === 1
      ? "bg-black text-white"
      : theme === 2
        ? "bg-white text-black"
        : "bg-[#111A4A] text-[#F5C400]"

  return (
    <div
      className={`w-full h-24 rounded-xl mb-6 px-4 flex items-center justify-end overflow-hidden ${displayColor}`}
    >
      <p className="text-3xl font-bold break-all text-right">
        {display || "0"}
      </p>
    </div>
  );
}

export default Display;