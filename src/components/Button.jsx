import PropTypes from "prop-types";
const Button = (props) => {
  return (
    <a
      href={props.href}
      className={`h-10 px-6 font-semibold rounded-md bg-${props.bgColor} text-${props.textColor}`}
    >
      {props.children}
    </a>
  );
};
Button.propTypes = {
  children: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  href: PropTypes.string,
};

export default Button;
