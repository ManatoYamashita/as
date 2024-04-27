import styles from "../styles/cardComponent.module.css";
import Image from "next/image";

export function Card({title, text, url}) {
    // YouTubeの動画IDをURLから抽出する関数
    function extractVideoId(url) {
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[7].length == 11) ? match[7] : false;
    }

    const videoId = extractVideoId(url);
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    return(
        <a className={styles.card} href={url}>
            {videoId ? (
                <Image src={thumbnailUrl} alt="YouTube Thumbnail" className={styles.image} width={480} height={360} />
            ) : (
                <p>Error! Couldn't bring Images from YouTube</p>
            )}
            <div className={styles.card__content}>
                <p className={styles.card__title}>{title}</p>
                <p className={styles.card__description}>{text}</p>
            </div>
        </a>
    );
}

export default Card;