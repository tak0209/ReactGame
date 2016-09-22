import * as React from 'react';
import * as $ from 'jquery';

// Interface for compenent props
export interface AnswerFrameProps {
    selectedNumbers: number[]
}

export default class AnswerFrame extends React.Component<AnswerFrameProps, void>{
    constructor() {
        super();
    }

    render() {
        //code
        var ans: Object[] = [];
        this.props.selectedNumbers.map((n)=>{
            ans.push(<span>{n}</span>); 
        })
        return (
            <div id='answer-frame'>
                <div className='well'>
                {ans}
                </div>
            </div>
        );
    }
}