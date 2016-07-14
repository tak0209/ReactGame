import * as React from "react";

class elapsedState {
    secondsElapsed: number;
}
export class Timer extends React.Component<void, elapsedState>{
    interval : any;
    constructor() {
        super();
        // set initial state
        this.state = { secondsElapsed: 100 };
    }

    tick = () => {
        {
            this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
        }
    };

    componentDidMount() {
       this.interval = setInterval(this.tick, 1000);
        //setInterval(()=>{ this.setState({secondsElapsed: this.state.secondsElapsed + 1}) }, 1000);
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    };

    render() {
        return (
            <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
        );
    }
}