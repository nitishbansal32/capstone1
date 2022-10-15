import styles from "./Footer.module.css";

import FooterLogo from "../../Images/FooterLogo.svg";
import Copyright from "../../Images/Copyright.svg";

const Footer = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <img src={FooterLogo} alt="" className={styles.footer_logo} />

                <ul className={styles.list1}>
                    <li>About Us</li>
                    <li>Avail Services</li>
                </ul>
                <ul className={styles.list2}>
                    <li>
                        <img src={props.contactIcon} alt="" />
                        <span>{props.contactNo}</span>
                    </li>
                    <li>
                        <img src={props.emailIcon} alt="" />
                        <span>{props.email}</span>
                    </li>
                </ul>
            </div>
            <img className={styles.copyright} src={Copyright} alt="" />
        </div>
    );
};

export default Footer;
