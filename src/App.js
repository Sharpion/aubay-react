import React, { Component } from 'react';
import LoginBox from './Components/LoginBox';
import WelcomeScreen from './Components/WelcomeScreen';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoginBox: true
        };
        
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onSubmit(username, password) {
        if (username === "test" && password === "123") {
            this.setState(
                {
                    showLoginBox:false
                }
            )
        }

    }

    render() {
        return (
            <div className="container">
                <header className="shadowed">
                    <h2>Aubay</h2>
                </header>
                <main>
                    <LoginBox visible={this.state.showLoginBox} onSubmit={this.onSubmit}/>
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
