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
                <h1 className={styles.title}>
                    天羽しろっぷ
                    <p className={styles.subtitle}>非公式ファンサイト</p>
                </h1>
                {/* <nav className={styles.nav}>
                    <ul>
                        <li>
                            <Scroll to="section1" smooth={true} duration={500} offset={-100}>
                                最新情報
                            </Scroll>
                        </li>
                        <li>
                            <Scroll to="section2" smooth={true} duration={500} offset={-100}>
                                活動
                            </Scroll>
                        </li>
                        <li>
                            <Scroll to="section3" smooth={true} duration={500} offset={-100}>
                                お知らせ
                            </Scroll>
                        </li>
                    </ul>
                </nav> */}
            </div>
        </div>
    )
}