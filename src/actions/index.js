export function selectAppointmentTime(appointmentTime) {
    console.log(appointmentTime);
    return {
        type: 'ACTIVE_APPOINTMENT',
        payload: appointmentTime
    }
}