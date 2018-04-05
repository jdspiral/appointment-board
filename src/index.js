import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppointmentList from './containers/AppointmentList';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import rootReducer from "./reducers";
import { createStore } from 'redux';

ReactDOM.render(
    <Provider store={createStore(rootReducer)}>
        <AppointmentList />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
