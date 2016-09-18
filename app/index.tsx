import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Bootstrap from "bootstrap";

import './main.scss';
import Greeting from "./components/Greeting";
import WhatTimer  from "./components/Clock";
// import MyButton from "./components/Button";
import MyCounter from "./components/Counter";
import MyScorePanel from "./components/ScorePanel";
import GCard from "./components/gitCard";

ReactDOM.render(
    <Greeting names='aboodman, odetocode, shanselman, tak0209, project365' />,
    document.getElementById("welcome")
);

ReactDOM.render(
    <WhatTimer />,
    document.getElementById("timerPlace")
);

ReactDOM.render(
    <MyCounter />,
    document.getElementById('counterId')
);

ReactDOM.render(
    <div>
        <MyScorePanel incrementStep={5} />
        <MyScorePanel incrementStep={10} />
        <MyScorePanel incrementStep={100} />
    </div>,
    document.getElementById('scorePanelId')
);

ReactDOM.render(
    <GCard  />,
    document.getElementById('gitCardId')
);