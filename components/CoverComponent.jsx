import Link from "next/dist/client/link";
import Image from "next/image";
import AmauImage from "../assets/amausyrup.webp";
import styles from "../styles/CoverComponent.module.css";

export function Cover() {
    return (
        <div className={styles.wrap}>
            <div className={styles.main}>
                <Image src={AmauImage} alt="天羽しろっぷ" className={styles.amau} />
                <h1 className={styles.msg}>
                    みんなに<strong className={styles.strong}>元気</strong>を<br />
                    お届け！！
                </h1>
            </div>
        </div>
    )
}