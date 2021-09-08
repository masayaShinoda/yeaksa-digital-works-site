import Image from "next/image"
import Fade from 'react-reveal/Fade'; // Importing Fade effect
import styles from "../styles/aboutTeam.module.css"

export default function AboutTeam() {
    return (
        <div className={styles.container}>
            <Fade left>
                <h1 style={{minHeight: `0`, margin: `0 auto`}}>Meet the Team</h1>
            </Fade>
            <Fade bottom cascade>
                <div className={styles.staffContainer}>
                    <div className={styles.staffContent}>
                        <Image src="/images/maya-no-bg_result.webp" width="300" height="300" alt="Masaya Shida" />
                        <span>
                            <h2>Shida Masaya</h2>
                            <small>
                                Frontend Web Dev. & Graphic Design
                            </small>
                        </span>                        
                        <span className={styles.socialContainer}>
                            <a href="https://github.com/masayaShinoda">
                               <Image src="/100w/github.png" width="80" height="80" alt="GitHub" />
                            </a>
                            <a href="https://t.me/shinoda17">
                               <Image src="/100w/telegram.png" width="80" height="80" alt="Telegram" />
                            </a>
                        </span>
                    </div>
                    <div className={styles.staffContent}>
                        <Image src="/images/dekin-no-bg_result.webp" width="300" height="300" alt="Chao Sokyoukin" />
                        <span>
                            <h2>Chao Sokyoukin</h2>
                            <small>
                                VFX & Graphic Design
                            </small>
                        </span>
                        <span className={styles.socialContainer}>
                            <a href="https://t.me/yeaksa_dekin">
                               <Image src="/100w/telegram.png" width="80" height="80" alt="Telegram" />
                            </a>
                            <a href="mailto:sokyoukin@gmail.com">
                               <Image src="/100w/email.png" width="80" height="80" alt="Email" />
                            </a>                               
                        </span>
                    </div>
                    <div className={styles.staffContent}>
                        <Image src="/images/soth-no-bg.webp" width="300" height="300" alt="Sokhon Keovisoth" />
                        <span>
                            <h2>Sokhon Keovisoth</h2>
                            <small>
                                Technical Assistant
                            </small>
                        </span>
                        <span className={styles.socialContainer}>
                            <a href="https://t.me/sothss">
                               <Image src="/100w/telegram.png" width="80" height="80" alt="Telegram" />
                            </a>
                            <a href="mailto:keovisothsokhon@gmail.com">
                               <Image src="/100w/email.png" width="80" height="80" alt="Email" />
                            </a>
                        </span>
                    </div>
                    <div className={styles.staffContent}>
                        <Image src="/images/JACK_result.webp" width="300" height="300" alt="Dekin Portrait" />
                        <span>
                            <h2>Jack</h2>
                            <small>
                                Videographer and Video Editor
                            </small>
                        </span>
                        <span className={styles.socialContainer}>
                            <a href="https://t.me/jackkuy">
                               <Image src="/100w/telegram.png" width="80" height="80" alt="Telegram" />
                            </a>
                            <a href="mailto:sunjack223344@gmail.com">
                               <Image src="/100w/email.png" width="80" height="80" alt="Email" />
                            </a>                               
                        </span>
                    </div>
                </div>
                <p className={styles.teamDescription}>
                    From the creative team behind <a href="https://yeaksa-esports.com">YeakSa Esports</a>, we aim to utilize our skills to help your business achieve a quality online presence.
                </p>
            </Fade>
        </div>
    )
}