import * as React from 'react';

// Interface for compenent props
export interface ButtonProps {
    handleClick: any;
    increment: number;
}

export default class ScoreButton extends React.Component<ButtonProps, void>{
    constructor() {
        super();
    }

    render() {
        //code
        return (<button className="btn btn-lg btn-primary" type="button" onClick={this.props.handleClick}>{this.props.increment}</button>);
    }
} 