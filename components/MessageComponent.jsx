import {useEffect} from "react";
import styles from "../styles/MessageComponent.module.css";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function Message() {

    useEffect(() => {
        gsap.config({ trialWarn: false });
        gsap.registerPlugin(ScrollTrigger);
        gsap.to("#container", {
        "--target": "0%",
        ease: "none",
        scrollTrigger: {
            trigger: "#container",
            // markers: {
            // startColor: "yellow",
            // endColor: "#42a6e0",
            // fontSize: "14px"
            // },
            start: "top top",
            end: "+=1000",
            pin: true,
            scrub: 1
        }
        });
    }, []);

    return (
        <main id="container" className={styles.container}>
            <h1 className={styles.h1}>AmauSyrup.net <span className={styles.span}>is underconstraction bro!</span> </h1>
        </main>
    )
}

export default Message;