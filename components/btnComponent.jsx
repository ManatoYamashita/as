import Link from "next/dist/client/link";
import styles from "../styles/btnComponent.module.css";

export function Btn({ btn, tip }) {
    return (
        <div className={styles.wrap}>
            <button className={styles.button}>
                <span className={styles.tip}>{ tip }</span>
                <Link href="/about" className={styles.btn}>
                    { btn }
                </Link>
            </button>
        </div>
    )
}
