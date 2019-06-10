import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ authentication, history, logout }) => {

    if (authentication && !authentication.loggedIn) {
        history.push("/login")
    }

    return (
        <div className="col-md-6 col-md-offset-3">
            <h2 align="center">Welcome! You have successfully logged in.</h2>
            <p align="center">
                <Link to="/login" className="btn btn-link" onClick={logout}>Logout</Link>
            </p>
        </div>
    );
}

export default HomePage;
