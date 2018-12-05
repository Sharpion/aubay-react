import React, { Component } from 'react';
import LoginBox from './Components/LoginBox';
import WelcomeScreen from './Components/WelcomeScreen';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoginBox: true,
            failedAttempt: false
        };
        
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onSubmit(username, password) {
        if (username === "test" && password === "123") {
            this.setState({
                showLoginBox: false,
            });
        } else {
            this.setState({
                failedAttempt: true,
            });
            setTimeout(() => {
               this.setState({
                    failedAttempt: false,
                });
            }, 1000);
        }

    }

    render() {
        return (
            <div className="container">
                <header className="shadowed">
                    <h2>Aubay</h2>
                </header>
                <main>
                    <LoginBox failedAttempt={this.state.failedAttempt} visible={this.state.showLoginBox} onSubmit={this.onSubmit}/>
                    <WelcomeScreen visible={!this.state.showLoginBox} />
                </main>
                <footer>
                    <h4>Developed by Felipe Zanon do Nascimento</h4>
                </footer>
            </div>
        );
    }
}

export default App;
