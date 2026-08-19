import Header from "../components/Header";
import Display from "../components/Display";
import CalculatorButtons from "../components/CalculatorButtons";
function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6">

         <Header />
        <Display />
      <CalculatorButtons/>

      </div>

    </div>
  );
}

export default Home;