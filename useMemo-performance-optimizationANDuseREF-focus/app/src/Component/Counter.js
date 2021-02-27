import React, { useState, useMemo } from "react";

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementCounterOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementCounterTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return counterOne % 2 == 0;
  }, [counterOne]);

  return (
    <div>
      <button onClick={incrementCounterOne}>
        Increment CounterOne - {counterOne}
      </button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={incrementCounterTwo}>
        Increment CounterTwo - {counterTwo}
      </button>
    </div>
  );
}

export default Counter;
