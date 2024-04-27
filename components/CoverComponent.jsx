import Image from "next/image";
import AmauImage from "../assets/amausyrup.webp";
import styles from "../styles/CoverComponent.module.css";
import CoverImage from "./CoverImage";

import coverGif from "../assets/cover.gif";
import coverWebp from "../assets/cover.webp";

export function Cover() {
    return (
        <div className={styles.wrap}>
            <div className={styles.main}>
                <CoverImage className={styles.background} gif={coverGif} poster={coverWebp} time={3500} repeat={false} />
                <div className={styles.imagewrap}>
                    <Image src={AmauImage} alt="天羽しろっぷ" className={styles.amau} />
                </div>
                <div className={styles.title}>
                    <h1 className={styles.maintitle}>
                        天羽しろっぷ
                    </h1>
                    <p className={styles.subtitle}>非公式ファンサイト</p>
                </div>
            </div>
        </div>
    )
}