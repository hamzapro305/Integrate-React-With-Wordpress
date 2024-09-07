import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";

window.addEventListener("DOMContentLoaded", () => {
    const root = createRoot(document.getElementById("HS_REACT"), {});
    root.render(<App />);
});
