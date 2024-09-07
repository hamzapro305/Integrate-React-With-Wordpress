import App from "./App";
import AddSection from "AddSection";

try {
    process.env.NODE_ENV;
} catch (e) {
    var process = { env: { NODE_ENV: "production" } };
}

window.addEventListener("DOMContentLoaded", () => {
    // HS_REACT Section
    AddSection("HS_REACT", App);
});
