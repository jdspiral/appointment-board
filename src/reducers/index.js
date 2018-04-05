import { combineReducers } from 'redux';
import AppointmentTimesReducer from './reducer_appointments';

const rootReducer = combineReducers({
    appointmentTimes: AppointmentTimesReducer
});

export default rootReducer;