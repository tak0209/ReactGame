import * as React from 'react';
import * as $ from 'jquery';

// Interface for compenent state
export interface AvatarCardState {
    //i,e data: {'name' : string};
    data: any;
}

export interface AvatarCardProp {
    name: string;
}
export default class AvatarCard extends React.Component<AvatarCardProp, AvatarCardState>{
    constructor() {
        super();
        // set initial state
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        this.getUserInfo(this.props.name);
    }

    render() {
        //code
        return (
            <div>
                <img src={this.state.data.avatar_url} width={100} />
                <h3>{this.props.name}</h3>
                <hr/>
            </div>
        );
    }

    getUserInfo(name: string) {
        $.get("https://api.github.com/users/" + name, (response) => {
            this.setState({ data: response });
        })
    };
}