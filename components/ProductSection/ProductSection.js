import Image from 'next/image';
import styles from "./product.module.css";

export default function ProductSection() {
    return (
        <div id="product">
            <div className={`${styles.productHeader} container`}>
                <h2 className={styles.productHeaderTitle}>Product</h2>
                <div className={styles.productHeaderSubtitle}>All the best</div>
            </div>
            <div className={`grid-container ${styles.productContainer}`}>
                <div className="grid-row">
                    <div className="grid-item grid-item_6x">
                        <div className={styles.productImage}>
                            <Image
                                src="/images/product.webp"
                                alt="Product"
                                layout="fill"
                            />
                        </div>
                    </div>
                    <div className="grid-item grid-item_6x">
                        <div className={`grid-content ${styles.productDescription}`}>
                            Our company is engaged in the production and sales of any electrical and construction equipment. From high-quality materials, we are ready to provide you with the best quotations on the market. The large number of regular customers is the main confirmation of this. We are willing to provide you with the most favorable cooperation conditions. Many of our old customers are from Europe. Perfect logistics helps deliver goods to any place in the world quickly and efficiently.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}