import { useState } from "react";
import Header from "../components/Header";
import Display from "../components/Display";
import CalculatorButtons from "../components/CalculatorButtons";
import Theme from "../components/Theme";

function Home() {
  const [display, setDisplay] = useState("");
  const [theme, setTheme] = useState(1);
  const handleButtonClick = (value) => {

    if (value === "Reset") {
      setDisplay("");
      return;
    }

    if (value === "DEL") {
      setDisplay((prev) => prev.slice(0, -1));
      return;
    }

//     if (value === "=") {

//   if (display === "") {
//     return;
//   }

//   try {
//     const expression = display;
//     const result = eval(expression);

//     setDisplay(String(result));
//   } catch {
//     setDisplay("Error");
//   }

//   return;
// }


if (value === "=") {
  if (display === "") {
    return;
  }

  try {
    const numbers = display.split(/([+\-*])/);

    let result = Number(numbers[0]);

    for (let i = 1; i < numbers.length; i += 2) {
      const operator = numbers[i];
      const nextNumber = Number(numbers[i + 1]);

      if (operator === "+") {
        result = result + nextNumber;
      }

      if (operator === "-") {
        result = result - nextNumber;
      }

      if (operator === "*") {
        result = result * nextNumber;
      }

      if (operator === "/") {
        result = result / nextNumber;
      }
    }

    setDisplay(String(result));
  } catch {
    setDisplay("Error");
  }

  return;
}


    if (["+", "-", "*", "/", "."].includes(value)) {
      setDisplay((prev) => {

        if (prev === "") {
          return prev;
        }

        if (["+", "-", "*", "/", "."].includes(prev.slice(-1))) {
          return prev.slice(0, -1) + value;
        }

        return prev + value;
      });

      return;
    }

    setDisplay((prev) => prev + value);
  };
  const buttonbgColor =
    theme === 1
      ? "bg-gray-800"
      : theme === 2
        ? "bg-gray-100"
        : "bg-[#111A4A]";

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-6 ${theme === 1
          ? "bg-gray-500"
          : theme === 2
            ? "bg-white"
            : "bg-black"
        }`}
    >

      <div className="w-full max-w-md">

        <div className="flex justify-between items-center mb-6">

          <Header theme={theme} />

          <Theme
            theme={theme}
            setTheme={setTheme}
          />

        </div>

        <Display
          display={display}
          theme={theme}
        />
        <div className={`${buttonbgColor} rounded-2xl p-5`}>
          <CalculatorButtons
            onButtonClick={handleButtonClick}
            theme={theme}
          />

        </div>
      </div>
    </div>
  );
}

export default Home;

// bg-white rounded-3xl shadow-xl p-6



//  if (value === "=") {
//   if (display === "") {
//     return;
//   }

//   try {
//     const expression = display;
//     const result = eval(expression);

//     setDisplay(String(result));
//   } catch {
//     setDisplay("Error");
//   }

//   return;
// }