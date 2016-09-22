import * as React from 'react';
import * as $ from 'jquery';

// Interface for compenent state
export interface NumberFrameProps {
    selectNumberHandle(pickednumber: number): void
}

export default class NumbersFrame extends React.Component<NumberFrameProps, void>{
    constructor() {
        super();
    }

    render() {
        var selectingNumber = this.props.selectNumberHandle;
        var num: Object[] = [];
        for (var i = 1; i <= 9; i++) {
            num.push(<span className='number' onClick={selectingNumber.bind(null,i)}>{i}</span>);
            //num.push(<span className='number' onClick={()=>{this.props.selectNumberHandle(i)}}>{i}</span>);
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