import React from 'react';

const Form = (props) => {

    return (
        <div  className="form-container">
            <form {...props}>
                {props.children}
            </form>
        </div>
    )
}

export default Form;