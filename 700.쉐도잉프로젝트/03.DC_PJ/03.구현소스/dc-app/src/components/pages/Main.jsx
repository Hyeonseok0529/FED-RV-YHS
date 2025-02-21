// Mainpage Component : Main.jsx //

import Banner from '../modules/Banner';
import SecIntro from "../modules/SecIntro";

export default function Main(){

    // 리턴 코드구역 //
    return(
        <>
        <h1>Main</h1>
        {/* 1. Banner Component */}
        <Banner />
        {/* 2. Section Intro Component */}
        <SecIntro />
        </>
    );

} // Main Component //