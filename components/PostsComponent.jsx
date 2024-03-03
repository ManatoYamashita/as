import Link from "next/link";
import { Text } from "../pages/[id].jsx";
import styles from "../styles/PostsComponent.module.css";

import {Btn} from "./btnComponent.jsx";

export function Posts({ posts }) {
    return (
        <div className={styles.wrap}>
            <h2 className={styles.heading}>News</h2>
            <data className={styles.sub}>お知らせ</data>
            <ul className={styles.posts}>
            {posts.map((post) => {
                const date = new Date(post.last_edited_time).toLocaleString(
                "en-US",
                {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                }
                );
                return (
                <li key={post.id} className={styles.post}>
                    <h3 className={styles.postTitle}>
                    <Link href={`/${post.id}`}>
                        <Text text={post.properties.Name ? post.properties.Name.title : 'タイトルなし'} />
                    </Link>
                    </h3>
                    
                    <p className={styles.postDescription}>{date}</p>
                </li>
                );
            })}
            </ul>
            <Btn btn="もっと見る" tip="じゃーーんぷ！" to="/about" />
        </div>
    );
}