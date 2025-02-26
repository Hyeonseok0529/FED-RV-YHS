import React, { useState } from "react";

const Input2 = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const {name, email, tel} = inputs;

  const onChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;

    inputs[id] = value;
    // => 위에처럼 하면 상태관리가 되지 않는다.
    // 자스에서 객체 , 배열은 힙 메모리에 관리가 된다.
    // 실제 변수 선언 시점에서는 블록에 대한 참조 주소만 가지고 있음.
    // => 상태를 직접 바꾸면 리액트에서는 변경사항을 알지 못한다.
    // => 따라서 리액트에서 인지할 수 있는 값으로 입력해야 함.
    setInputs({
      ...inputs,
      // name: "",
      // email: "",
      // tel: ""
      [id]: value,
    });

  };

  return (
    <div>
      <div>
        <label>이름</label>
        <input type="text" id="name" value={name} onChange={onChange} />
      </div>
      <div>
        <label>이메일</label>
        <input type="email" id="email" value={email} onChange={onChange} />
      </div>
      <div>
        <label>전화번호</label>
        <input type="tel" id="tel" value={tel} onChange={onChange} />
      </div>
      <p>이름: {name}</p>
      <p>이메일: {email}</p>
      <p>전화번호: {tel}</p>
    </div>
  );
};

export default Input2;
