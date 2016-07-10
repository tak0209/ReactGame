import * as React from "react";

export interface GreetingProps { name: string }
export class Greeting extends React.Component<GreetingProps, {}> {
    render() {
        return <h1>Welcome {this.props.name} to React with hot sync!</h1>;
    }
}