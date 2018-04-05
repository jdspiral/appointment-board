import React from 'react';
import ReactDOM from 'react-dom';
import AppointmentList from './containers/AppointmentList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppointmentList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
