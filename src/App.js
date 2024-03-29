import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { PrivateRoute } from './PrivateRoute.js';
import { history } from './helpers';
import { alertActions, userActions } from './actions';

// @components
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {

        });
    }

    renderAlertMessage() {
        const {
            alert: { type, message },
            clearAlert
        } = this.props;

        if (!type) {
            return null;
        }

        return (
            <div className={'alert ' + type}>
                {message}.
                <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    onClick={clearAlert}
                >&times;</button>
            </div>
        )
    }

    render() {
        return (
            <div className="container">
                {this.renderAlertMessage()}
                <div className="col-sm-8 col-sm-offset-2">
                    <Switch>
                        <Route exact path="/" render={() => <HomePage {...this.props} />} />
                        <Route exact path="/signup" component={RegisterPage} />
                        <Route exact path="/login" component={LoginPage} />
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    authentication: state.authentication,
    alert: state.alert
})

const mapDispatchToProps = {
    clearAlert: alertActions.clear,
    logout: userActions.logout
}


export default connect(mapStateToProps, mapDispatchToProps)(App);