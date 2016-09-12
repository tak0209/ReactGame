import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Bootstrap from "bootstrap";

import './main.scss';
import Greeting from "./components/Greeting";
import WhatTimer  from "./components/Clock";
import MyButton from "./components/Button";

ReactDOM.render(
    <Greeting names='aboodman, odetocode, shanselman, tak0209, project365' />,
    document.getElementById("welcome")
);

ReactDOM.render(
    <WhatTimer />,
    document.getElementById("timerPlace")
);

ReactDOM.render(
    <MyButton />,
    document.getElementById('buttonId')
);