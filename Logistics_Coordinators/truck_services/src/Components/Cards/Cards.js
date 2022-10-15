import styles from "./Cards.module.css";

const Card = (props) => {
    return (
        <>
            <div className={styles.card_container}>
                <img src={props.url} alt="" />
                <div className={styles.card_content}>
                    <h2>{props.title}</h2>
                    <p>{props.desc}</p>
                </div>
            </div>
        </>
    );
};

export default Card;
