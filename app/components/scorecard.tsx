import * as React from 'react';

export interface ScoreCardProps {
    score : number
}

export default class ScoreCard extends React.Component<ScoreCardProps, void>{
    constructor() {
        super();
        // set initial state
        // this.state = {
        //     data: { 'name' :'test' }
        // }
    }

    render() {
        //code
        return (<label>{this.props.score}</label>);
    }
}