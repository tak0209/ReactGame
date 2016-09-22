import * as React from 'react';
import * as $ from 'jquery';

// Interface for compenent state
export interface NumberFrameProps {
    //i,e data: {'name' : string};
    selectNumberHandle: any;
}

export default class NumbersFrame extends React.Component<NumberFrameProps, void>{
    constructor() {
        super();
    }

    render() {
        var selectingNumber = this.props.selectNumberHandle;
        var num: Object[] = [];
        for (var i = 1; i <= 9; i++) {
            //num.push(<span className='number' onClick={selectingNumber.bind(null,i)}>{i}</span>);
            num.push(<span className='number' onClick={(i)=>{this.props.selectNumberHandle(i)}}>{i}</span>);
        }
        return (
            <div id='num-frame'>
                <div className='well'>
                    {num}
                </div>
            </div>
        );
    }
}