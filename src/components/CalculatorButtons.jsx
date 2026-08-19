function CalculatorButtons() {
  const buttons = [
    "7", "8", "9", "÷","4", "5", "6", "+",
    "1", "2", "3", "-",".", "0", "/", "*",
  ];

  return (
    <div className="grid grid-cols-4 gap-3">

      {buttons.map((button) => (
        <button
          key={button}
          className="h-16 rounded-xl bg-gray-100 shadow"
        >
          {button}
        </button>
      ))}

      
<div className="grid grid-cols-2 gap-3 col-span-4">
  <button className="h-16 rounded-xl bg-gray-100 shadow">
    Reset
  </button>

  <button className="h-16 rounded-xl bg-gray-100 shadow">
    =
  </button>
</div>

    </div>
  );
}

export default CalculatorButtons;