import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Bootstrap from "bootstrap";

import './main.scss';
import { Hello } from "./components/Hello";
import { Greeting } from "./components/Greeting";
import { Timer } from "./components/Clock";

ReactDOM.render(
    <Greeting names='odetocode, tak0209, project365' />,
    document.getElementById("welcome")
);

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);

ReactDOM.render(
    <Timer />,
    document.getElementById("timerPlace")
);