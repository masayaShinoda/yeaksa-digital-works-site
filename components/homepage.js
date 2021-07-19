import { useState, useEffect } from "react"
import HomepageSlideshow from "./homepageSlideshow"
import styles from "../styles/homepage.module.css"

export default function Homepage() {
    useEffect(() => {
        var hero = document.getElementById('hero');

        var typewriter = new Typewriter(hero, {
            // loop: true,
            delay: 100,
            cursor: "",
        });

        typewriter.pauseFor(1500)
            .typeString('accessible.')
            .pauseFor(500)
            .deleteAll()
            .typeString('affordable.')
            .pauseFor(500)
            .deleteAll()
            .typeString('the norm.')
            .start();           
        }, 
    )

    return (
        <div className={styles.homepageContainer}>

            <section className={styles.heroSection} style={{overflow: `hidden`}}>
                <h1 style={{fontWeight: 400, lineHeight: 1.24}} className=" animate__animated animate__fadeInLeft">
                    Making good design <br /><span id="hero" className={styles.hero}>accessible</span>
                </h1>
                <HomepageSlideshow />
            </section>
            
            {/* <script async src="https://unpkg.com/typewriter-effect@2.3.1/dist/core.js"></script> */}
        </div>
    )
}