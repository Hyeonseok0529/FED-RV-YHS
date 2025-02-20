// 상단영역 컴포넌트 : MainArea.jsx //

import { Outlet } from "react-router-dom";
// Outlet Component is 리액트 라우터

export default function MainArea(){

    // 리턴 코드구역 //
    return(
       <main className="cont">
        <Outlet />
       </main>
    );

} // MainArea Component //