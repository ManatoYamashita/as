import styles from "../styles/cardComponent.module.css";



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
            {/* <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg> */}
            {videoId ? (
                <img src={thumbnailUrl} alt="YouTube Thumbnail" className={styles.image} />
            ) : (
                <p>Invalid YouTube URL</p>
            )}
            <div className={styles.card__content}>
                <p className={styles.card__title}>{title}
                </p><p className={styles.card__description}>{text}</p>
            </div>
        </a>
    );
}

export default Card;