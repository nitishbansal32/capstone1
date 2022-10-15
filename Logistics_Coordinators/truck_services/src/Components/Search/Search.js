import styles from "./Search.module.css";
import { useState } from "react";
import SearchIcon from "../../Images/Search.svg";

const Search = () => {
    const [state, setState] = useState(true);

    const SearchButtonHandler = (e) => {
        setState((prevState) => !prevState);
    };
    return (
        // <div className={styles.main_container}>
        <>
            {state && (
                <button className={styles.button} onClick={SearchButtonHandler}>
                    <img src={SearchIcon} alt="" />
                </button>
            )}
            {!state && <input className={styles.container} />}
            {/* </div> */}
        </>
    );
};

export default Search;
