import React from 'react';
import './ButtonsIcon.css'


class ButtonsIcon extends React.Component {
    render() {
        return(
            <button className="icon-btn" id={this.props.id}></button>
        )
    }
}

export default ButtonsIcon; 