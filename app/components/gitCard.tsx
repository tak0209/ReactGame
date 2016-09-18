import * as React from 'react';
import ACard from "./AvatarCard";
import AddCardButton from "./AddCardButton";


// Interface for compenent state
export interface GitCardState {
    //i,e data: {'name' : string};
    cards: Array<string>;
}

export default class GitCard extends React.Component<void, GitCardState>{
    constructor() {
        super();
        // set initial state
        this.state = {
            cards: Array<string>()
        }
    }

    render() {
        var cards = this.state.cards.map((user: string) => {
            return (<ACard key={user} name={user} />);
        });
        return (
            <div>
                <AddCardButton addUserHandler={this.handleClick} />
                <div>
                    {cards}
                </div>
            </div>
        );
    }

    handleClick = (username: string) => {
        //need to push array to cards first
        this.state.cards.push(username);
        this.setState({
            cards: this.state.cards
        })
    }
}