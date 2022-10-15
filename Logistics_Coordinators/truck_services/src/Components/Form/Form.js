import styles from "./Form.module.css";
import ArrowIcon from "../../Images/ArrowIcon.svg";

const Form = (props) => {
    return (
        <div className={styles.container}>
            <form action="">
                <div className={styles.input_container}>
                    <input placeholder={props.inputVal1} type="text" />
                    <img src={ArrowIcon} alt="" />
                    <input placeholder={props.inputVal2} type="text" />
                </div>
                <div className={styles.title_input_container}>
                    <h2>{props.title} </h2>
                    <div className={styles.input_container}>
                        <input placeholder={props.inputVal3} type="text" />
                        <input placeholder={props.inputVal4} type="text" />
                        <input placeholder={props.inputVal5} type="text" />
                    </div>
                </div>
                <button> {props.buttonVal} </button>
            </form>
        </div>
    );
};

export default Form;
