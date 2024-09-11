import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';

const entryPoint = document.getElementById('root');
ReactDOM.createRoot(entryPoint).render(<App />);
//ReactDOM.createRoot(entryPoint).render(React.createElement(App)); -> jsx 미사용 but 알고는 있어야 함
