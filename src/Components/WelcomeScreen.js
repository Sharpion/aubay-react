import React, { Component } from 'react';
import './WelcomeScreen.css';

class WelcomeScreen extends Component {
    render () {
        if (this.props.visible) {
            return (
                <div id="welcome-screen">
                    <h1>Welcome, Mr. Test!</h1>
                    <h2>You are the greatest user in the galaxy!</h2>
                </div>
            );
        } else return null;
    }
}

export default WelcomeScreen;