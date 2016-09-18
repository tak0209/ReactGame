import * as React from 'react';

// Interface for compenent props
export interface AddCardButtonProp {
    addUserHandler: any;
}

export default class AddCardButton extends React.Component<AddCardButtonProp, void>{
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <input placeholder={'git user name'} width={'300px'} ref={'userName'} />
                <button onClick={this.handleClick}>{'Add'}</button>
                <br />
            </div>
        );
    }

    //typing the refs for typescript
    refs: {
        [key: string]: Element;
        userName: HTMLInputElement;
    }

    handleClick = () => {
        this.props.addUserHandler(this.refs.userName.value);
    }   
}