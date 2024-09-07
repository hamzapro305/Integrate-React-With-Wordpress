import React from "react";
import { createRoot } from "react-dom/client";

const AddSection = (
    id: string,
    Component: () => React.JSX.Element,
    testState = false
) => {
    const Element = document.getElementById(id);
    if (!Element) {
        if (testState) {
            console.warn(`Element with id ${Element} not exist!`);
        }
        return;
    }
    try {
        const root = createRoot(Element, {});
        root.render(<Component />);
    } catch (error) {
        console.log(`Injecting React in ${Element} cause error!`, error);
    }
};

export default AddSection;
