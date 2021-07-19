import Layout from "../components/layout"
import Image from "next/image"
import { useState, useEffect } from "react"
import styles from "../styles/portfolio.module.css"
import leftTriangle from "../public/svg/impossible-triangle-left.svg"
import bottomTriangle from "../public/svg/impossible-triangle-bottom.svg"
import rightTriangle from "../public/svg/impossible-triangle-right.svg"

export default function Portfolio() {
    const [activeSelection, setActiveSelection] = useState(null);

    useEffect(() => {
        if(activeSelection == "gfx") {
            document.querySelector("#leftTriangle").classList.add(`${styles.active}`)
            document.querySelector("#bottomTriangle").classList.remove(`${styles.active}`)            
            document.querySelector("#rightTriangle").classList.remove(`${styles.active}`)            

        }
        if(activeSelection == "web") {
            document.querySelector("#rightTriangle").classList.add(`${styles.active}`)    
            document.querySelector("#bottomTriangle").classList.remove(`${styles.active}`)            
            document.querySelector("#leftTriangle").classList.remove(`${styles.active}`)           
        }
        if(activeSelection == "photo") {
            document.querySelector("#bottomTriangle").classList.add(`${styles.active}`) 
            document.querySelector("#leftTriangle").classList.remove(`${styles.active}`)            
            document.querySelector("#rightTriangle").classList.remove(`${styles.active}`)              
        }
        console.log(activeSelection)
    }, [activeSelection])


    return (
        <Layout>
            <div className={styles.portfolioContainer}>
                <h1 style={{textAlign: `center`}}>Portfolio</h1>
                <div className={styles.textTriangle}>
                    <span onClick={() => setActiveSelection("gfx")}>Graphic Design</span>
                    <span onClick={() => setActiveSelection("web")}>Web Design</span>
                    <span onClick={() => setActiveSelection("photo")}>Photography</span>

                </div>
                <div className={styles.selectionTriangle}>
                    <Image className={styles.triangle} layout="fill" id="leftTriangle" src={leftTriangle} alt="leftTriangle" />
                    <Image className={styles.triangle} layout="fill" id="bottomTriangle" src={bottomTriangle} alt="bottomTriangle" />
                    <Image className={styles.triangle} layout="fill" id="rightTriangle" src={rightTriangle} alt="rightTriangle" />

                </div>
            </div>

        </Layout>
    )
}