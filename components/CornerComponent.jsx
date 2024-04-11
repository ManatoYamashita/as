import styles from "../styles/Corner.module.css";
import logo from "../assets/amausyrup-logo-white.webp";
import Image from "next/image";

export function Corner() {
    return (
        <div className={styles.wrap}>
            <div className={styles.head}>
                <Image src={logo} alt="logo" className={styles.logo}></Image>
                <a href="https://www.youtube.com/@syrupchan0" target="_blank" className={styles.youtube}>
                    <span className={styles.circle1}><p className={styles.yt}>YouTube</p></span>
                </a>
            </div>
            <div className={styles.bottom}>
                <a href="https://twitter.com/syrupchan0/bio" target="_blank" className={styles.xcom}>
                    <span className={styles.circle2}><p className={styles.x}>X</p></span>
                </a>
                <a href="https://twitter.com/syrupchan0/bio" target="_blank" className={styles.fanbox}>
                    <span className={styles.circle3}><p className={styles.fb}>fanbox</p></span>
                </a>
            </div>
        </div>
    );
}

export default Corner;