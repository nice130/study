import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text}){
    return <button className={styles.btn}>테스트버틑</button>;
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button;