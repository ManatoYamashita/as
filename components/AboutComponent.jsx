import { useState } from "react";
import styles from "../styles/AboutComponent.module.css";
import Btn2 from "./btn2Component.jsx";
import Image from "next/image";
import SatouImage from "../assets/satou.PNG";
import AmauImage from "../assets/amau.webp";

export function About() {
    const [currentImage, setCurrentImage] = useState(SatouImage);
    const [currentName, setCurrentName] = useState("佐藤あま");

    const toggleImage = () => {
        setCurrentImage(currentImage === SatouImage ? AmauImage : SatouImage);
        setCurrentName(currentName === "佐藤あま" ? "天羽しろっぷ" : "佐藤あま");
    };

    return (
        <div className={styles.wrap}>
            <div className={styles.paragraphs}>
                <h2 className={styles.heading}>About</h2>
                <data className={styles.sub}>天羽しろっぷとは</data>
                <p className={styles.passage}>
                天羽しろっぷ(あまうしろっぷ)とはお菓子の食べ過ぎで天界から追放された天使年齢300歳の天使系Vtuberである。(死んでる設定)<br />
                <strong>個人勢のバーチャルYouTuber</strong>。
                「<strong>天ぷらぁ</strong>」というファンダムを持ち、ファンマークとして「🧁໒꒱· ﾟ」を採用している。<br />
                <strong>「身バレ」</strong>をお家芸としており、Googleサジェストにはスリーサイズが提案される。<br />
                </p>
                <small>キャラクターデザイン: <a href='https://twitter.com/ebimau_e'><strong>えびまう</strong></a></small>

                <div className={styles.chardetail}>
                    <h3 className={styles.name}>{currentName}</h3>
                    <Btn2 text="変身!" onClick={toggleImage} />
                </div>
            </div>
            <div className={styles.charactor}>
                <Image src={currentImage} alt="キャラクター" className={styles.image} />
            </div>
        </div>
    );
}
