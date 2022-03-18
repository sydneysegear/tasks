import React from "react";
import "./App.css";

import { Quizzer } from "./quizzer/Quizzer";
import { HideComponents } from "./HideComponents";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <div>
                <Quizzer></Quizzer>
            </div>
            <div>
                <HideComponents></HideComponents>
            </div>
        </div>
    );
}

export default App;
