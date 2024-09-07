import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";

window.addEventListener("DOMContentLoaded", () => {

    // HS_REACT Section
    const root = createRoot(document.getElementById("HS_REACT"), {});
    root.render(<App />);

});
