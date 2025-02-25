import React, { useState } from "react";

const Input2 = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    tel: ""
  })

  const onChange = (e) => {
    const value = e.target.value;
    const 
  };

  return (
    <div>
      <div>
        <label>이름</label>
        <input type="text" value={name} onChange={onChange}/>
      </div>
      <div>
        <label>이메일</label>
        <input type="email" value={email} onChange={onChange}/>
      </div>
      <div>
        <label>전화번호</label>
        <input type="tel" value={tel} onChange={onChange}/>
      </div>
      <br />
      <p>{txtValue}</p>
    </div>
  );
};

export default Input2;
