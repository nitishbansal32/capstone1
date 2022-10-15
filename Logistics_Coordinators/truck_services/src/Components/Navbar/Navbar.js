import styles from "./Navbar.module.css";
import Logo from "../../Images/Logo.png";
const Navbar = (props) => {
    return (
        <div className={styles.container}>
            <img src={props.Logo} alt="Logo" />
            <div className={styles.link_list}>
                <ul>
                    <li>
                        <a href>Services</a>{" "}
                    </li>
                    <li>
                        <a href>About</a>{" "}
                    </li>
                    <li>
                        <a href>Contact</a>{" "}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
