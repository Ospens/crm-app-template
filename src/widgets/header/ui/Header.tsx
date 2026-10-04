import styles from "./Header.module.css"
import SearchIcon from "../../../assets/search.svg"
import Avatar from "../../../assets/avatar.png"


const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.search}>
                <img src={SearchIcon} alt="" />
            </div>
            <div className={styles.user}><img src={Avatar} alt="" /></div>
        </div>
    )
}

export default Header
