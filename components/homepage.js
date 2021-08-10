import { useState, useEffect } from "react"
import HomepageSlideshow from "./homepageSlideshow"
import AboutTeam from "./aboutTeam"
import styles from "../styles/homepage.module.css"

export default function Homepage() {
    return (
        <div className={styles.homepageContainer}>

            <section className={styles.heroSection} style={{overflow: `hidden`}}>
                <h1 style={{fontWeight: 400, lineHeight: 1.24}} className=" animate__animated animate__fadeInLeft">
                    Making good design <br /><span id="hero" className={styles.hero}>the norm</span>
                </h1>
                <HomepageSlideshow />
            </section>
                <AboutTeam />
            
            {/* <script async src="https://unpkg.com/typewriter-effect@2.3.1/dist/core.js"></script> */}
        </div>
    )
}