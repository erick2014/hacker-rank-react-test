import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';

export class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e,fieldName) {
        this.setState({[fieldName]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        const {username,password} = this.state;
        const {register,history} = this.props;
        
        this.setState({submitted:true})
        
        register({username,password})
        history.push("/login")
    }
    
    render() {
        const { user, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <form name="form">
                    <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            className="form-control username" 
                            name="username" 
                            onChange={(e)=> this.handleChange(e,'username')} 
                        />
                        {submitted && !user.username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            name="password"
                            onChange={(e)=> this.handleChange(e,'password')} 
                        />
                        {submitted && !user.password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={this.handleSubmit}>Register</button>
                        <Link to="/login" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    registration: state.registration
})

const mapDispatchToProps = {
    register: userActions.register
}

export default connect(mapStateToProps,mapDispatchToProps)(RegisterPage)

