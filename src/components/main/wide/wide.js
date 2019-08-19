import React from 'react';
import arrowUp from '../wide/arrowUp.png';
import arrowDown from '../wide/arrowDown.png';
import './wide.css';

class Wide extends React.Component {
    render() {
        return (
            <div className="wide-box">
                <div className="wide-box-left">
                    <div className="wide-box-left-arrow-up"><img src={arrowUp} alt="" /></div>
                    <div className="wide-box-left-rating">{this.props.ratings}</div>
                    <div className="wide-box-left-arrow-down"><img src={arrowDown} alt="" /></div>
                </div>
                <div className="wide-box-right">
                    <div className="wide-box-right-top">
                        <div className="wide-box-field">r/{this.props.field}</div>
                    </div>
                    <div className="wide-box-right">
                        <div className="wide-box-main-info"><h3>{this.props.info}</h3></div>
                    </div>
                    <div className="wide-box-right-bottom">
                        <div className="wide-box-right-bottom-comments">{this.props.comments}</div>
                        <div className="wide-box-right-bottom-share">{this.props.shares}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Wide