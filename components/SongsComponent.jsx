import Link from "next/dist/client/link";
import styles from "../styles/SongsComponent.module.css";

import { Card } from "./cardComponent.jsx";

export function Songs() {
    return (
        <div className={styles.wrap}>
            <h2 className={styles.heading}>Songs</h2>
            <data className={styles.sub}>楽曲</data>
            <p className={styles.passage}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque est veritatis voluptatem id perferendis illo delectus fugit? Quasi, dolores, ab eos facilis ut vel veniam obcaecati quas iusto officiis iste?</p>
            
            <div className={styles.songsarea}>
                <Card title="song1" imgUrl="https://via.placeholder.com/150" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque est veritatis voluptatem id perferendis illo delectus fugit? Quasi, dolores, ab eos facilis ut vel veniam obcaecati quas iusto officiis iste?"  url="https://www.youtube.com/watch?v=1"></Card>
                <Card title="song2" imgUrl="https://via.placeholder.com/150" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque est veritatis voluptatem id perferendis illo delectus fugit? Quasi, dolores, ab eos facilis ut vel veniam obcaecati quas iusto officiis iste?"  url="https://www.youtube.com/watch?v=2"></Card>
                <Card title="song3" imgUrl="https://via.placeholder.com/150" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque est veritatis voluptatem id perferendis illo delectus fugit? Quasi, dolores, ab eos facilis ut vel veniam obcaecati quas iusto officiis iste?"  url="https://www.youtube.com/watch?v=3"></Card>
            </div>

        </div>
    );
}