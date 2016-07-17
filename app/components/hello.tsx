import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

//this is the Hello component
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1 style={{ fontSize: 2 + 'em', backgroundColor: 'white' }}>
            Hi from {this.props.compiler} and {this.props.framework}.This is what it looks like</h1>;
    }
}   