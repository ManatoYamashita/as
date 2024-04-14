import styles from '../styles/FooterComponent.module.css';

export function Footer() {
    return (
        <footer className={styles.wrap}>
            <div className={styles.footer_back} >
            </div>

            <div className={styles.container}>
                <div className={styles.footer_inner}>
                <div className={styles.c_footer}>
                    <div className={styles.layout}>
                    <div className={`${styles.layout_item} ${styles.w_50} ${styles.left}`}>
                        <div className={styles.newsletter}>
                        <h3 className={styles.newsletter_title}>
                            このWebサイトは非公式です。
                            <small>This website is unofficial.</small>
                        </h3>
                        <p>このWebサイトは非公式です。Newsのセクションを更新していただける有志の方を募集しております。（notionが使えれば運用可能）</p>
                        </div>
                    </div>

                    {/* <div className={`${styles.layout_item} ${styles.w_25} ${styles.middle}`}>
                        <nav className={styles.c_nav_tool}>
                        <h4 className={styles.c_nav_tool_title}>Menu</h4>
                        <ul className={styles.c_nav_tool_list}>
                            <li>
                            <a href="/collections/all" className={styles.c_link}>Shop All</a>
                            </li>

                            <li>
                            <a href="/pages/about-us" className={styles.c_link}>About Us</a>
                            </li>

                            <li>
                            <a href="/blogs/community" className={styles.c_link}>Community</a>
                            </li>
                            <li>
                            <a href="#" className={styles.c_link}>Vibes</a>
                            </li>
                        </ul>
                        </nav>

                    </div> */}

                    {/* <div className={`${styles.layout_item} ${styles.w_25} ${styles.right}`}>
                        <nav className={styles.c_nav_tool}>
                        <h4 className={styles.c_nav_tool_title}>Support</h4>
                        <ul className={styles.c_nav_tool_list}>

                            <li className={styles.c_nav_tool_item}>
                            <a href="/pages/shipping-returns" className={styles.c_link}>Shipping &amp; Returns</a>
                            </li>

                            <li className={styles.c_nav_tool_item}>
                            <a href="/pages/help" className={styles.c_link}>Help &amp; FAQ</a>
                            </li>

                            <li className={styles.c_nav_tool_item}>
                            <a href="/pages/terms-conditions" className={styles.c_link}>Terms &amp; Conditions</a>
                            </li>

                            <li className={styles.c_nav_tool_item}>
                            <a href="/pages/privacy-policy" className={styles.c_link}>Privacy Policy</a>
                            </li>

                            <li className={styles.c_nav_tool_item}>
                            <a href="/pages/contact" className={styles.c_link}>Contact</a>
                            </li>

                            <li className={styles.c_nav_tool_item}>
                            <a href="/account/login" className={styles.c_link}>
                                Login
                            </a>
                            </li>
                        </ul>
                        </nav>

                    </div> */}
                    </div>
                    <div className={`${styles.layout} ${styles.c_2}`}>
                    <div className={`${styles.layout_item} ${styles.w_50}`}>
                        {/* <ul className={styles.flex}>
                        <li>
                            <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M12 6.654a6.786 6.786 0 0 1 2.596 5.344A6.786 6.786 0 0 1 12 17.34a6.786 6.786 0 0 1-2.596-5.343A6.786 6.786 0 0 1 12 6.654zm-.87-.582A7.783 7.783 0 0 0 8.4 12a7.783 7.783 0 0 0 2.728 5.926 6.798 6.798 0 1 1 .003-11.854zm1.742 11.854A7.783 7.783 0 0 0 15.6 12a7.783 7.783 0 0 0-2.73-5.928 6.798 6.798 0 1 1 .003 11.854z" />
                            </svg>
                        </li>
                        <li>
                            <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M1 4h22v2H1V4zm0 14h22v2H1v-2zm18.622-3.086l-.174-.87h-1.949l-.31.863-1.562.003c1.005-2.406 1.75-4.19 2.236-5.348.127-.303.353-.457.685-.455.254.002.669.002 1.245 0L21 14.912l-1.378.003zm-1.684-2.062h1.256l-.47-2.18-.786 2.18zM7.872 9.106l1.57.002-2.427 5.806-1.59-.001c-.537-2.07-.932-3.606-1.184-4.605-.077-.307-.23-.521-.526-.622-.263-.09-.701-.23-1.315-.419v-.16h2.509c.434 0 .687.21.769.64l.62 3.289 1.574-3.93zm3.727.002l-1.24 5.805-1.495-.002 1.24-5.805 1.495.002zM14.631 9c.446 0 1.01.138 1.334.267l-.262 1.204c-.293-.118-.775-.277-1.18-.27-.59.009-.954.256-.954.493 0 .384.632.578 1.284.999.743.48.84.91.831 1.378-.01.971-.831 1.929-2.564 1.929-.791-.012-1.076-.078-1.72-.306l.272-1.256c.656.274.935.361 1.495.361.515 0 .956-.207.96-.568.002-.257-.155-.384-.732-.702-.577-.317-1.385-.756-1.375-1.64C12.033 9.759 13.107 9 14.63 9z" />
                            </svg>
                        </li>
                        <li>
                            <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M15 17a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zM2 2h4v20H2V2z" />
                            </svg>
                        </li>
                        <li>
                            <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-6v2h2v-2h1a2.5 2.5 0 0 0 2-4 2.5 2.5 0 0 0-2-4h-1V6h-2v2H8v8h3zm-1-3h4 a.5.5 0 1 1 0 1h-4v-1zm0-3h4 a.5.5 0 1 1 0 1h-4v-1z" />
                            </svg>
                        </li>
                        <li>
                            <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 0 0-.794.68l-.04.22-.63 3.993-.032.17a.804.804 0 0 1-.794.679H7.72a.483.483 0 0 1-.477-.558L7.418 21h1.518l.95-6.02h1.385c4.678 0 7.75-2.203 8.796-6.502zm-2.96-5.09c.762.868.983 1.81.752 3.285-.019.123-.04.24-.062.36-.735 3.773-3.089 5.446-6.956 5.446H8.957c-.63 0-1.174.414-1.354 1.002l-.014-.002-.93 5.894H3.121a.051.051 0 0 1-.05-.06l2.598-16.51A.95.95 0 0 1 6.607 2h5.976c2.183 0 3.716.469 4.523 1.388z" />
                            </svg>
                        </li>
                        </ul> */}
                    </div>
                    <div className={`${styles.layout_item} ${styles.w_25}`} style={{display: 'flex', justifyContent: 'end', alignItems: 'center'}}>
                        {/* <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm1 10h3l-4-4-4 4h3v4h2v-4z" />
                        </svg> */}
                        <p><strong>Contact</strong>: arisetoarukagaku[at]gmail.com（[at]を@に読み替えてください。）</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className={styles.footer_copyright}>
                <p>&copy; 2024 AmauSyrup.net</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;