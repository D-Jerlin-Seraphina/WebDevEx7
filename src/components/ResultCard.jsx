function ResultCard({ result }) {
  if (!result) return null;

  const { name, dailyGoal, total, remaining } = result;

  return (
    <div className="mt-4 p-3 border rounded bg-light">
      <h5>Results:</h5>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Daily Calorie Goal:</strong> {dailyGoal} kcal</p>
      <p><strong>Total Calories Consumed:</strong> {total} kcal</p>
      <p><strong>Remaining Calories:</strong> {remaining} kcal</p>

      <p
        className={`fw-bold ${
          remaining < 0 ? "text-danger" : "text-success"
        }`}
      >
        {remaining < 0
          ? "You exceeded your daily calorie goal!"
          : "You are within your daily goal!"}
      </p>
    </div>
  );
}

export default ResultCard;
