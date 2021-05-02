import styles from "./contact.module.css";

export default function ContactSection() {
    return (
        <div className={styles.contacts} id="contacts">
            <div className="grid-container">
                <div className="grid-row">
                    <div className="grid-item grid-item_6x">
                        <div className="grid-content">
                            <h2 className={styles.contactsTitle}>Contact us</h2>
                            <div className={styles.contactsNote}>Unit A, 38th Floor, 218 Yeung Uk Road, Tsuen Wan, Hong Kong</div>
                            <div className={styles.contactsNote}>wingkafook@gmail.com</div>
                        </div>
                    </div>
                    <div className="grid-item grid-item_6x">
                        <div className="grid-content">
                            <form className="grid-container">
                                <div className="grid-row grid-row_small">
                                    <div className="grid-item grid-item_6x mb-10">
                                        <input className="field" type="text" name="name" placeholder="Name" required />
                                    </div>
                                    <div className="grid-item grid-item_6x mb-10">
                                        <input className="field" type="text" name="email" placeholder="Email" required />
                                    </div>
                                    <div className="grid-item grid-item_6x mb-10">
                                        <input className="field" type="text" name="phone" placeholder="Phone" />
                                    </div>
                                    <div className="grid-item grid-item_6x mb-10">
                                        <input className="field" type="text" name="address" placeholder="Address" />
                                    </div>
                                    <div className="grid-item grid-item_12x mb-10">
                                        <input className="field" type="text" name="theme" placeholder="Theme" />
                                    </div>
                                    <div className="grid-item grid-item_12x">
                                        <textarea className="field" name="message" placeholder="Message" rows="5" />
                                    </div>
                                </div>
                                <button type="submit" className={styles.contactsSubmit}>
                                    <span>Send</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}