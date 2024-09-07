import React from "react";

const App = () => {
    return (
        <div className="content">
            <span>Hamza Siddiqui</span>
            <button
                onClick={() => {
                    alert("Something Just like This!");
                }}
            >
                Run React In Wordpress
            </button>
        </div>
    );
};

export default App;
