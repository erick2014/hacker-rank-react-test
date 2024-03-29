import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';

export class LoginPage extends Component {
    constructor(props) {
        super(props);

        // reset login status

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidUpdate(prevProps){
        if(!prevProps.authentication.loggedIn && this.props.authentication.loggedIn){ 
            this.props.history.push("/");
        }
    }

    handleChange(e,fieldName) {
        this.setState({[fieldName]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        const {username,password} = this.state;
        this.setState({submitted:true})
        this.props.login(username,password)
    }
    
    render() {

        const {
            username, 
            password, 
            submitted 
        } = this.state;
        
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form">
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            className="form-control username" 
                            name="username" 
                            onChange={(e)=> this.handleChange(e,'username')} 
                        />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            name="password"
                            onChange={(e)=> this.handleChange(e,'password')} 
                            />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={this.handleSubmit}>Login</button>
                        <Link to="/signup" className="btn btn-link"> Register</Link> 
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    authentication: state.authentication
})

const mapDispatchToProps = {
    login: userActions.login
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage)

// export { LoginPage as TestLoginPage };
