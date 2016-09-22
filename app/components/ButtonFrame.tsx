import * as React from 'react';
import * as $ from 'jquery';

// Interface for compenent state
export interface ButtonFrameState {
    //i,e data: {'name' : string};
    data: any;
}

export default class ButtonFrame extends React.Component<void, ButtonFrameState>{
    constructor() {
        super();
        // set initial state
        this.state = {
            data: { 'name' :'test' }
        }
    }

     render() {
        //code
        return (
            <div id='button-frame'>
                <div className='well'>
                =
                </div>
            </div>
        );
    }

    handleClick = () => {
        this.setState( {
            data : {'name': 'abc'}
        })
    }
}