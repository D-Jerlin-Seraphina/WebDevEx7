import { useState } from "react";

function CalorieForm({ onCalculate }) {
  const [name, setName] = useState("");
  const [dailyGoal, setDailyGoal] = useState("");
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");
  const [snacks, setSnacks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      !name ||
      !dailyGoal ||
      !breakfast ||
      !lunch ||
      !dinner ||
      !snacks
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (
      dailyGoal <= 0 ||
      breakfast < 0 ||
      lunch < 0 ||
      dinner < 0 ||
      snacks < 0
    ) {
      alert("Please enter positive numbers only.");
      return;
    }

    const total =
      parseInt(breakfast) +
      parseInt(lunch) +
      parseInt(dinner) +
      parseInt(snacks);
    const remaining = parseInt(dailyGoal) - total;

    onCalculate({ name, dailyGoal, total, remaining });
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow-lg">
      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Daily Calorie Goal:</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter daily calorie goal"
          value={dailyGoal}
          onChange={(e) => setDailyGoal(e.target.value)}
        />
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Breakfast Calories:</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter breakfast calories"
            value={breakfast}
            onChange={(e) => setBreakfast(e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">Lunch Calories:</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter lunch calories"
            value={lunch}
            onChange={(e) => setLunch(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Dinner Calories:</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter dinner calories"
            value={dinner}
            onChange={(e) => setDinner(e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">Snacks Calories:</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter snacks calories"
            value={snacks}
            onChange={(e) => setSnacks(e.target.value)}
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Calculate Calories
      </button>
    </form>
  );
}

export default CalorieForm;
