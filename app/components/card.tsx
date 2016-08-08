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

    getUserInfo() {
        $.get("https://api.github.com/users/" + this.props.username, (response) => {
            this.setState({ data: response });
        })
    };

    // render get call when binded state change
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
                    <textarea rows="4" cols="120" value={JSON.stringify(this.state.data, null, '\t')}></textarea>
                </div>
            );
        }
        else {  //if username is selected then get user info
            if (this.props.username)
                this.getUserInfo();
        }

        return (<div>...</div>);
    }
}

