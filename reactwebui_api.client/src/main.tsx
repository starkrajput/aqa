

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';



const container = document.getElementById('root');

if (container) {
    const root = createRoot(container); // Create a root.
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
