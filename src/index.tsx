import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './components/App/App';
import { HashRouter } from 'react-router-dom';
import './index.css';
import './styles/variables';
import './styles/themes';


const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>
);
