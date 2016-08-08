import * as React from "react";
import Card from "./card";
import Users from "./users";

export interface GreetingState { username: string }
export interface GreetingProps { names: string }

export class Greeting extends React.Component<GreetingProps, GreetingState> {
    constructor() {
        super();
        this.state = {
            username: ''
        }
    }

    selectionChange = (e:any) => {
        this.setState({ username: e.target.value });
    }

    render() {
        return (
            <div>
                <Users usernames={this.props.names} selectionChangeHandler ={this.selectionChange} />
                <h2>Welcome {this.state.username} to React with hot sync!</h2>
                <Card username={this.state.username} />
            </div>
        );
    }
}