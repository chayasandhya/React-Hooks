import React, { useState, useCallback } from "react";
import "./App.css";
import Title from "./Components/Title";
import Button from "./Components/Button";
import Count from "./Components/Count";

function App() {
  const [ageCount, setAge] = useState(25);
  const [salaryCount, setSalary] = useState(50000);

  let incrementAge = useCallback(() => {
    setAge(ageCount + 1);
  }, [ageCount]);

  let incrementSalary = useCallback(() => {
    setSalary(salaryCount + 1000);
  }, [salaryCount]);

  return (
    <div>
      <Title />
      <Count text="Age" count={ageCount} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salaryCount}></Count>
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default App;
