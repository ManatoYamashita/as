import Link from "next/dist/client/link";
import styles from "../styles/HeaderComponent.module.css";

export function Header() {
    return (
        <div className={styles.wrap}>
            
            <ul className={styles.nav}>
                <li className={styles.li}>
                    <Link href="/">
                        Home
                    </Link>
                    <span className={styles.rb}>ホーム</span>
                </li>
                <li className={styles.li}>
                    <Link href="/about">
                        About
                    </Link>
                    <span className={styles.rb}>天羽しろっぷとは</span>
                </li>
                <li className={styles.li}>
                    <Link href="/contact">
                        Links
                    </Link>
                    <span className={styles.rb}>各種リンク</span>
                </li>
            </ul>
        </div>
    );
}