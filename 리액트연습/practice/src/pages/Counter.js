import React, { useState } from "react";

const Counter = () => {
  const [num, setNumber] = useState(0);

  const increase = () => {
    setNumber(num + 1);
    // num = num + 1; 과 같다.
    // 하지만 반드시 setNumber 변수를 사용해줘야 관리를 할 수 있다.
  };

  const decrease = () => {
    setNumber(num - 1);
  };

  // const num = 0; 과 같다.
  return (
    <div>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <p>{num}</p>
    </div>
  );
};

export default Counter;