import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter,Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './helpers';
import App  from './App';

import { configureFakeAPI } from './helpers';

configureFakeAPI();


const MyApp = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Provider>
);

render(<MyApp />,document.getElementById('app'));
