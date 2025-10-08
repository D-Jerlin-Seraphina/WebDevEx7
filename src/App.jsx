import { useState } from "react";
import CalorieForm from "./components/CalorieForm";
import ResultCard from "./components/ResultCard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [result, setResult] = useState(null);

  const handleCalculation = (data) => {
    setResult(data);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Calorie Tracker App</h2>
      <CalorieForm onCalculate={handleCalculation} />
      <ResultCard result={result} />
    </div>
  );
}

export default App;
