import React, { Component } from 'react';
import '../App.css';
import Form from '../components/Form';
import Input from '../components/Input';
import { selectAppointmentTime } from "../actions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

class AppointmentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTime: '',
            name: '',
            phone: '',
            popup: false,
            selectedTime: ''
        }
    }

    handleClick = (appointment) => {
        this.setState({
            popup: true,
            activeTime: appointment
        });
    };

    handleSubmission = (e) => {
        e.preventDefault();
        this.setState({
            popup: false,
            selectedTime: this.state.activeTime
        });
    };

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    closePopup = () => {
        this.setState({
            popup: false
        });
    };

    renderTimeSlots = () => {
        return this.props.appointmentTimes.map((appointment) => {
            return <p key={appointment.id}>
                        <a href="#"
                           onClick={() => this.handleClick(appointment)}
                           className={appointment.id === this.state.selectedTime.id ? 'selected' : '' }>
                            {appointment.time}
                        </a>
                    </p>
        });
    };


    togglePopup = () => {
        if(this.state.popup) {
            return (
                <Form onSubmit={this.handleSubmission}>
                    <span className="close-button" onClick={this.closePopup}>Close X</span>
                    <Input name="name" type="text" label="Name" value={ this.state.name } onChange={this.handleChange} />
                    <Input name="phone" type="tel" label="Phone" value={ this.state.phone } onChange={this.handleChange} />
                    <Input type="submit" value="Submit"/>
                </Form>
            );
        }
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to Appointment Board</h1>
                </header>
                <ul>
                    {this.renderTimeSlots()}
                </ul>
                {this.togglePopup()}
            </div>
        );
    }
}

AppointmentList.propTypes = {
    appointmentTimes: PropTypes.array
};

function mapStateToProps(state) {
    return {
        appointmentTimes: state.appointmentTimes
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectAppointmentTime: selectAppointmentTime
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentList);
