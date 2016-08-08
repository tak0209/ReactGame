import * as React from "react";
import * as $ from "jquery";

export interface cardProps {
    username: string
}

export interface cardState {
    data: any;
}
export default class Card extends React.Component<cardProps, cardState>{
    constructor() {
        super();
        // set initial state
        this.state = {
            data: {}
        }
    }

    renderUserInfo() {
        $.get("https://api.github.com/users/" + this.props.username, (response) => {
            this.setState({ data: response });
        })
    };

    //why this rendering got called twice
    render() {
        if (this.state.data.avatar_url) {
            var url = this.state.data.avatar_url;

            this.state.data.avatar_url = null;  //reset for next request

            return (
                <div>
                    <img src={url} width="80" />
                    <h3>Name: {this.state.data.login}</h3>
                    <h3>Created: {this.state.data.created_at}</h3>
                    <hr/>
                </div>
            );
        }
        else {
            if (this.props.username)
                this.renderUserInfo();
        }

        return (<div>...</div>);
    }
}

