import styles from "./Services.module.css";
import Form from "../../Components/Form/Form";

const Services = () => {
    return (
        <div className={styles.container}>
            <h1>Avail Services</h1>
            <Form
                inputVal1="Location"
                inputVal2="Destination"
                inputVal3="Cargo Size"
                inputVal4="Email"
                inputVal5="Contact Number"
                title="Details"
                buttonVal="Get a quote"
            />
        </div>
    );
};

export default Services;
