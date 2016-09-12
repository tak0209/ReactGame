import * as React from 'react';
import * as $ from 'jquery';

// Interface for compenent state
export interface ButtonState {
    //i,e data: {'name' : string};
    data: any;
}

export default class Button extends React.Component<void, ButtonState>{
    constructor() {
        super();
        // set initial state
        this.state = {
            data: { 'name' :'test' }
        }
    }

    render() {
        //code
        return (<button onClick={this.handleClick}>{this.state.data.name}</button>);
    }

    handleClick = () => {
        this.setState( {
            data : {'name': 'abc'}
        })
    }
}