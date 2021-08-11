import styles from "../styles/homepageSlideshow.module.css"

export default function HomepageSlideshow() {
    
    return (
        <div className={styles.slideshow} id="slideshow">
            <div className={styles.slideWrapper}>
                <div className={styles.slide + ` animate__animated animate__fadeInUp`} title="Brand identity works done by YeakSa Digital" >
                    
                </div>
            </div>
        </div>
    )
}