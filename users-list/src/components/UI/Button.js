import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      //nếu không tìm thấy type thì trả về button
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
