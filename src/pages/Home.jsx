import { useState } from "react";
import Header from "../components/Header";
import Display from "../components/Display";
import CalculatorButtons from "../components/CalculatorButtons";

function Home() {
  const [display, setDisplay] = useState("");

  const handleButtonClick = (value) => {

  // Reset
  if (value === "Reset") {
    setDisplay("");
    return;
  }

  // Delete last character
  if (value === "DEL") {
    setDisplay((prev) => prev.slice(0, -1));
    return;
  }

  // Equal
  if (value === "=") {
    try {
      const expression = display.replace("÷", "/");
      const result = eval(expression);

      setDisplay(String(result));
    } catch {
      setDisplay("Error");
    }

    return;
  }

  // Numbers + operators
  setDisplay((prev) => prev + value);
};

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6">

        <Header />

        <Display display={display} />

        <CalculatorButtons
          onButtonClick={handleButtonClick}
        />

      </div>
    </div>
  );
}

export default Home;