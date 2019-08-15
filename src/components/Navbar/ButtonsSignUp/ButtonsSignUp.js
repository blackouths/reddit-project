import React from 'react';
import './ButtonsSignUp.css';


class ButtonsSignUp extends React.Component {
    render() {
        return(
            <div>
            <button className="logIn-btn">{this.props.name1}</button>
            <button className="signUp-btn">{this.props.name2}</button>
            </div>
        )
    }
}

export default ButtonsSignUp;