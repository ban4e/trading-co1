import Image from 'next/image';
import styles from "./promo.module.css";

export default function PromoSection() {
    return (
        <div className={styles.promo}>
            <Image
                src="/images/promo.webp"
                alt="Promo"
                layout="fill"
            />
            <div className={styles.promoContent}>
                <h1 className={styles.promoTitle}>«WING KA FOOK TRADING LIMITED»</h1>
                <div className={styles.promoSubtitle}>Foreign Exchange Trading</div>
                <div className={styles.promoNote}>Quality electrical equipment supplier</div>
            </div>
        </div>
    )
}