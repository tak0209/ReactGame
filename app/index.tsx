import * as React from "react";
import * as ReactDOM from "react-dom";

import './main.scss';
import { Hello } from "./components/Hello";
import { Greeting } from "./components/Greeting";

ReactDOM.render(
    <Greeting name='sir' />,
    document.getElementById("welcome")
);

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);