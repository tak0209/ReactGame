import * as React from 'react';
import * as $ from 'jquery';
import AnswerFrame from "./AnswerFrame";
import ButtonFrame  from "./ButtonFrame";
import NumbersFrame from "./NumbersFrame";
import StarsFrame from "./StarsFrame";

// Interface for compenent state
export interface GameState {
    //i,e data: {'name' : string};
    numberOfStars?: number;
    selectedNumber?: number[];
}

export default class Game extends React.Component<void, GameState>{
    constructor() {
        super();
        // set initial state
        this.state = {
            numberOfStars: Math.floor(Math.random() * 9) + 1,
            selectedNumber: [ 2, 5]
        }
    }

    selectNumberHandle = (pickedNumber: number) =>{
        var newSelectedNumbers: number[] = this.state.selectedNumber;
        newSelectedNumbers.push(pickedNumber);
        this.setState({ selectedNumber: newSelectedNumbers });
    }

    render() {
        //code
        return (
            <div id='game'>
                <h1>Game</h1>
                <hr />
                <div>
                    <StarsFrame numberOfStars = {this.state.numberOfStars} />
                    <ButtonFrame />
                    <AnswerFrame selectedNumbers = {this.state.selectedNumber} />
                    <NumbersFrame selectNumberHandle = {this.selectNumberHandle} />
                </div>
            </div>
        );
    }
}