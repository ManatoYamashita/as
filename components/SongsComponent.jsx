import React from 'react';
import styles from "../styles/SongsComponent.module.css";
import { Card } from "./cardComponent.jsx";
import { CircleAnim } from "./circleAnimComponent.jsx";

const cardData = [
    {
        title: "天羽しろっぷの自己紹介の歌",
        text: "作詞: 天羽しろっぷ / 作曲/編曲/MIX: ベルガ様 / 映像: 甘党様 / イラストレーター: 榎野ツカサ様, 宇津井怜眞様, 9egg9, ふち様, コック川崎様, 天井めろ様 ,出雲むじ様",
        url: "https://youtu.be/berNXBm95UY?si=c1Zl5kNKswhULYlE"
    },
    {
        title: "Whip! Syrup!! JUMP!!!",
        text: "歌: 天羽しろっぷ / 作詞作曲編曲MIX: ベルガ様 / イラスト: くるみつ様 / タイトルロゴ: しお様 / Live2D: 甘党様 / 映像: LEHNA様",
        url: "https://youtu.be/50aE-Grz9jQ?si=Z48ORAuyPxDrjBlD"
    },
    {
        title: "Eclipse",
        text: "歌: 天羽しろっぷ / 作曲・作詞・編曲 : イノウエケンイチ / Guitar : 大島健 / Mix,Mastering : がんばれまさしげ / Movie : 甘党 / Videographer : Su9miZ / とうてんちゃん / 原芽お蘭",
        url: "https://youtu.be/JGFgowRjiRY?si=bFM1sctvB_1HEu7K"
    },
];

export function Songs() {
    return (
        <div className={styles.wrap}>
            <div className={styles.paragraph}>
                <h2 className={styles.heading}>Songs</h2>
                <data className={styles.sub}>楽曲</data>
                <p className={styles.passage}>
                    天羽しろっぷオリジナルの楽曲を紹介します。楽曲の詳細は各リンク先をご覧ください。
                    専属サウンドクリエイターの<a href='https://twitter.com/bebe_beluga?s=21'><strong>ベルガ</strong></a>氏をはじめ、多くのクリエイターの方々によって制作されています。
                </p>
            </div>
            <div className={styles.songsarea}>
                {cardData.map((card, index) => (
                    <Card key={index} title={card.title} text={card.text} url={card.url} />
                ))}
            </div>
            <CircleAnim size={100} top={"-30vw"} left={"30vw"} />
        </div>
    );
}
