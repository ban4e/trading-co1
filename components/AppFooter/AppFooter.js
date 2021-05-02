import styles from "./footer.module.css";


export default () => {
    return (
        <footer className={styles.footer}>
            ©{new Date().getFullYear()} WING KA FOOK TRADING LIMITED
        </footer>
    )
}
