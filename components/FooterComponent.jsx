import styles from '../styles/FooterComponent.module.css';

export function Footer() {
    return (
        <footer className={styles.wrap}>
            <div className={styles.footer_back} ></div>

            <div className={styles.container}>
                <div className={styles.footer_inner}>
                <div className={styles.c_footer}>
                    <div className={styles.layout}>
                    <div className={`${styles.layout_item} ${styles.w_50} ${styles.left}`}>
                        <div className={styles.newsletter}>
                        <h1 className={styles.newsletter_title}>
                            このWebサイトは非公式です。<br />
                            <small className={styles.title_en}>This website is unofficial.</small>
                        </h1>
                        <p>このWebサイトは非公式です。Newsのセクションを更新していただける有志の方を募集しております。（notionが使えれば運用可能）</p>
                        </div>
                    </div>

                    </div>
                    <div className={`${styles.layout} ${styles.c_2}`}>
                    <div className={`${styles.layout_item} ${styles.w_50}`}>
                    </div>
                    <div className={`${styles.layout_item} ${styles.w_25}`} >
                        <p><strong>Contact</strong>: arisetoarukagaku[at]gmail.com（[at]を@に読み替えてください。）</p>
                    </div>

                    </div>
                    <p className={styles.copy_sp}>&copy; 2024 AmauSyrup.net</p>

                </div>
                </div>
                <div className={styles.copy_pc}>
                    <p>&copy; 2024 AmauSyrup.net</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer;