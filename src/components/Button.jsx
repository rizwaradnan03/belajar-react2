import React from "react";
import PropTypes from 'prop-types';
const Button = (props) => {
    return(
        <button className={`h-10 px-6 font-semibold rounded-md bg-${props.bgColor} text-${props.textColor}`} type="submit">
          {props.children}
        </button>
    );
}
Button.propTypes = {
    children: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
};

export default Button;