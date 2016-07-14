import * as React from "react";

class timerState {
    secondsElapsed: number;
    bgColor: string;
    caption: string;
}

export class Timer extends React.Component<void, timerState>{
    interval: number;
    isTimerOn: boolean;
    constructor() {
        super();
        // set initial state
        this.state = {
            secondsElapsed: 100,
            bgColor: 'white',
            caption: 'off'
        };
        this.isTimerOn = true;
    }

    tick = () => {
        this.setState({ secondsElapsed: this.state.secondsElapsed + 1, bgColor: 'white', caption: 'off' });
    };

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
        //setInterval(()=>{ this.setState({secondsElapsed: this.state.secondsElapsed + 1}) }, 1000);
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    };

    handleClick = () => {
        if (this.isTimerOn) {
            clearInterval(this.interval);
            this.setState({ secondsElapsed: this.state.secondsElapsed, bgColor: 'lightgrey', caption: 'on' });
        }
        else {
            this.interval = setInterval(this.tick, 1000);
            this.setState({ secondsElapsed: this.state.secondsElapsed, bgColor: 'white', caption: 'off' });
        }
        this.isTimerOn = !this.isTimerOn;
    }

    render() {
        return (
            <div style={{ fontSize: 2 + 'em', backgroundColor: this.state.bgColor }}>Seconds Elapsed: {this.state.secondsElapsed}
                <span style={{ paddingLeft: '15px' }} ></span>
                <button class="btn btn-lg btn-primary" type="button" onClick={this.handleClick}>{this.state.caption}</button>
            </div>
        );
    }
}