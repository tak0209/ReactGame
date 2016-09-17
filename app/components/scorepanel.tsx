import * as React from 'react';
import MyButton from './ScoreButton';
import MyScoreCard from './ScoreCard';

// Interface for compenent state
export interface ScorePanelState {
    counter: number;
}

// Interface for component props
export interface ScorePanelProps {
    incrementStep: number;
}

export default class ScorePanel extends React.Component<ScorePanelProps, ScorePanelState>{
    constructor() {
        super();
        // set initial state
        this.state = {
            counter: 0
        }
    }

    render() {
        //code
        return (
            <div>
                <MyButton handleClick={this.handleClick} increment={this.props.incrementStep}></MyButton>
                <MyScoreCard score={this.state.counter}></MyScoreCard>
            </div>
        );
    }

    handleClick = () => {
        this.setState({
            counter: this.state.counter + this.props.incrementStep
        })
    }
}