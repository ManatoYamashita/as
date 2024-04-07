import Image from "next/image";
import AmauImage from "../assets/amausyrup.webp";
import logo from "../assets/amausyrup-logo-white.webp";
import styles from "../styles/CoverComponent.module.css";
import CoverImage from "./CoverImage";

import coverGif from "../assets/cover.gif";
import coverWebp from "../assets/cover.webp";

export function Cover() {
    return (
        <div className={styles.wrap}>
            <div className={styles.main}>
                <CoverImage className={styles.background} gif={coverGif} poster={coverWebp} time={3300} repeat={false} />
                <Image src={AmauImage} alt="天羽しろっぷ" className={styles.amau} />
                <h1 className={styles.title}>
                    天羽しろっぷ
                </h1>
                <Image src={logo} alt="logo" className={styles.logo}></Image>
                <span className={styles.circle1}></span>
                <p className={styles.youtube}>YouTube</p>
            </div>
        </div>
    )
}