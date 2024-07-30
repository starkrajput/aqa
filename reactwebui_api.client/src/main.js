import { jsx as _jsx } from "react/jsx-runtime";
/*import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.tsx'
import './index.css';
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

//reportWebVitals();
*/
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
const container = document.getElementById('root');
if (container) {
    const root = createRoot(container); // Create a root.
    root.render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
}
