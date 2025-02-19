import React from 'react';
import ReactDOM from 'react-dom/client';

// 메인 페이지용 css
import './css/main.scss';


// Select Root //
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

// Redering Root //
root.render(
  <>
    <h1>
      <b>Hello React!</b>
      <span>"span"</span>
    </h1>
  </>
);