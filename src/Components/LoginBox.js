import React, { Component } from 'react';
import './LoginBox.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'

library.add(faLock);

class LoginBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
    }
    updateUsername(e) {
        this.setState(
            {
                username:e.target.value
            }
        )
    }
    updatePassword(e) {
        this.setState(
            {
                password:e.target.value
            }
        )
    }
    
    onLoginSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.username, this.state.password);
    }
    
    render () {
        if (this.props.visible) {
            return (
                <div id="login-box" className={this.props.failedAttempt ? 'shake shadowed' : 'shadowed'}>
                    <header className="login-box-header">
                        <div className="text">
                            <h4>Log in to our site</h4>
                            <h6>Enter username and password to log on.</h6>

                        </div>
                        <div className="lock">
                            <FontAwesomeIcon icon="lock" size="3x" />
                        </div>
                    </header>
                    <div class="form-fields">
                        <form id="login-form" onSubmit={this.onLoginSubmit}>
                            <input id="username" 
                                type="text" 
                                placeholder="USERNAME" 
                                role="form" 
                                value={this.state.username}
                                onChange={this.updateUsername}
                                autoFocus/>
                            <input id="password" 
                                type="password" 
                                placeholder="PASSWORD" 
                                role="form" 
                                value={this.state.password}
                                onChange={this.updatePassword}/>
                            <button id="button" 
                                type="submit" 
                                disabled={!this.state.username || !this.state.password}>Sign in</button>
                        </form>
                        <h6 className="signup">Don't have an account? <a href="#" title="Sign up link">Sign up here.</a></h6>
                    </div>
                </div>
            )
        } else return null;
    }
}

export default LoginBox;