import Link from "next/dist/client/link";
import styles from "../styles/AboutComponent.module.css";

import { Btn } from "./btnComponent.jsx";

import Image from "next/image";
import SatouImage from "../assets/satou.PNG";

export function About() {
    return (
        <div className={styles.wrap}>
            <h2 className={styles.heading}>About</h2>
            <data className={styles.sub}>天羽しろっぷとは</data>
            <p className={styles.passage}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque est veritatis voluptatem id perferendis illo delectus fugit? Quasi, dolores, ab eos facilis ut vel veniam obcaecati quas iusto officiis iste?</p>
            <Image src={SatouImage} alt="佐藤あま" />
            <Btn btn="変身" tip="こんろぷー" to="/" />
        </div>
    );
}