import * as React from "react"

export interface UsersProps {
    usernames: string,
    selectionChangeHandler: any;
}

export default class Users extends React.Component<UsersProps, {}>
{
    render() {
        return (
            <div>
                Users:&nbsp;
                <select onChange={this.props.selectionChangeHandler } >
                    { this.renderListItems() }
                </select>
            </div>
        );
    }

    //built select options
    renderListItems() {
        var items = this.props.usernames.split(",");
        var selections: any = [];
        items.forEach(element => {
            selections.push(<option key={element.trim()} value={element.trim()}>{element.trim()}</option>);
        });

        return selections;
    }
}