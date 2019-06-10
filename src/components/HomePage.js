import React, { Component } from 'react';

export class HomePage extends Component {

    render() {
        const {
            authentication,
            history
        } = this.props;

        if (authentication && !authentication.loggedIn) {
            history.push("/login")
        }

        return (
            <div className="col-md-6 col-md-offset-3">
                <h2 align="center">Welcome! You have successfully logged in.</h2>
                <p align="center">
                // Add a redirection for logout
                </p>
            </div>
        );
    }
}
