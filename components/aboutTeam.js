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
                    <div className={styles.div1}>
                        <Image src="/images/maya-no-bg_result.webp" width="300" height="300" alt="Masaya Portrait" />
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
                    <div className={styles.div2}>
                    <Image src="/images/dekin-no-bg_result.webp" width="300" height="300" alt="Dekin Portrait" />
                        <span>
                            <h2>Chao Sokyoukin</h2>
                            <small>
                                Manager & Digital Marketing
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
                    <div className={styles.div3}>
                    <Image src="/images/thira-balloon_result.webp" width="300" height="300" alt="Tinin Portrait" />
                        <span>
                            <h2>Thira Tinin</h2>
                            <small>
                                Graphic Designer & 3D Artist
                            </small>
                        </span>
                        <span className={styles.socialContainer}>
                            <a href="https://www.behance.net/thiratinin">
                                <Image src="/100w/behance.png" width="80" height="80" alt="Behance" />
                            </a>
                            <a href="https://t.me/thiratinin">
                               <Image src="/100w/telegram.png" width="80" height="80" alt="Telegram" />
                            </a>
                        </span>
                    </div>
                </div>

            </Fade>
        </div>
    )
}