import Layout from "../components/layout"
import { useState, useEffect } from "react"
import styles from "../styles/portfolio.module.css"

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
                    <img className={styles.triangle} id="leftTriangle" src="/svg/impossible-triangle-left.svg" alt="" />
                    <img className={styles.triangle} id="bottomTriangle" src="/svg/impossible-triangle-bottom.svg" alt="" />
                    <img className={styles.triangle} id="rightTriangle" src="/svg/impossible-triangle-right.svg" alt="" />

                </div>
            </div>

        </Layout>
    )
}