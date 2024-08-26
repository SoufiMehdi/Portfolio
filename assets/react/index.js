import React from "react";
import App from "./Components/app"
import {createRoot} from "react-dom/client";

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);