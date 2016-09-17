import * as React from 'react';
import * as $ from 'jquery';

// Interface for compenent state
export interface CounterState {
    //i,e data: {'name' : string};
    counter: number;
}

export default class Counter extends React.Component<void, CounterState>{
    constructor() {
        super();
        // set initial state
        this.state = {
            counter: 0
        }
    }

    render() {
        //code
        return (<button onClick={this.handleClick}>{this.state.counter}</button>);
    }

    handleClick = () => {
        this.setState( {
            counter : this.state.counter + 1
        })
    }
}