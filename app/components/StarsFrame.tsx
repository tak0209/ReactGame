import * as React from 'react';
import * as $ from 'jquery';

// Interface for compenent props
export interface StarsFrameProps {
    numberOfStars: number
}

export default class StarsFrame extends React.Component<StarsFrameProps, void>{
    constructor() {
        super();
    }

    render() {
        var numberOfStars = this.props.numberOfStars;
        var stars: Object[] = [];
        for (var i = 0; i < numberOfStars; i++) {
            stars.push(<span key={i} className='glyphicon glyphicon-star'></span>);
        }
        return (
            <div id='stars-frame'>
                <div className='well'>
                    {stars}
                </div>
            </div>
        );
    }
}