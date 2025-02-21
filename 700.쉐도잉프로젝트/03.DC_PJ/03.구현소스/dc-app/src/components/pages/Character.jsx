// DC.com 캐릭터 페이지 컴포넌트 - Character.jsx

import React from 'react';
import Banner from '../modules/Banner';

function Character(props) {
    return (
        <div>
            <h1>Character Page</h1>
            {/* 1. Banner Component */}
            <Banner />
        </div>
    );
}

export default Character;