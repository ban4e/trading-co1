import styles from "./header.module.css";

export default function AppHeader() {
    return (
        <header className="header container">
            <div className={`${styles.headerContainer}`}>
                <div className={styles.headerLogo}>
                    WING KA FOOK TRADING LIMITED <br />
                    Yongjiafu Trading Co., Ltd.
                </div>
                <div className={styles.headerMenu}>
                    <ul className={styles.headerNav}>
                        <li className={styles.headerNavItem}>
                            <a href="#" className={styles.headerNavLink}>first</a>
                        </li>
                        <li className={styles.headerNavItem}>
                            <a href="#product" className={styles.headerNavLink}>product</a>
                        </li>
                        <li className={styles.headerNavItem}>
                            <a href="#contacts" className={styles.headerNavLink}>contacts</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
