import Layout from "../components/layout"
import Image from "next/image"
import { useState, useEffect } from "react"
import PortfolioContainer from "../components/portfolioContainer"
import styles from "../styles/portfolio.module.css"
import left from "../public/1x/left-01.png"
import bottom from "../public/1x/bottom-01.png"
import right from "../public/1x/right-01.png"
// import leftTriangle from "../public/svg/impossible-triangle-left.svg"
// import bottomTriangle from "../public/svg/impossible-triangle-bottom.svg"
// import rightTriangle from "../public/svg/impossible-triangle-right.svg"

export default function Portfolio() {
    const [activeSelection, setActiveSelection] = useState(null);

    useEffect(() => {
        if(activeSelection == "gfx") {
            document.querySelector("#leftTriangle").classList.add(`${styles.active}`)
            document.querySelector("#bottomTriangle").classList.remove(`${styles.active}`)            
            document.querySelector("#rightTriangle").classList.remove(`${styles.active}`)            
            document.querySelector("#selectionTriangle").classList.add(`${styles.active}`)
            document.querySelector("#textTriangle").classList.add(`${styles.active}`)
            document.querySelector("#portfolioTitle").textContent = "Graphic Design"
            document.querySelector("#backBtn").classList.toggle("inactive")

        }
        if(activeSelection == "web") {
            document.querySelector("#rightTriangle").classList.add(`${styles.active}`)    
            document.querySelector("#bottomTriangle").classList.remove(`${styles.active}`)            
            document.querySelector("#leftTriangle").classList.remove(`${styles.active}`)      
            document.querySelector("#selectionTriangle").classList.add(`${styles.active}`)
            document.querySelector("#textTriangle").classList.add(`${styles.active}`)
            document.querySelector("#portfolioTitle").textContent = "Web Design & Development"
            document.querySelector("#backBtn").classList.toggle("inactive")

        }
        if(activeSelection == "photo") {
            document.querySelector("#bottomTriangle").classList.add(`${styles.active}`) 
            document.querySelector("#leftTriangle").classList.remove(`${styles.active}`)            
            document.querySelector("#rightTriangle").classList.remove(`${styles.active}`)   
            document.querySelector("#selectionTriangle").classList.add(`${styles.active}`)
            document.querySelector("#textTriangle").classList.add(`${styles.active}`)
            document.querySelector("#portfolioTitle").textContent = "Photography"
            document.querySelector("#backBtn").classList.toggle("inactive")

        }
        if(activeSelection == "inactive") {
            document.querySelector("#bottomTriangle").classList.remove(`${styles.active}`) 
            document.querySelector("#leftTriangle").classList.remove(`${styles.active}`)            
            document.querySelector("#rightTriangle").classList.remove(`${styles.active}`)   
            document.querySelector("#selectionTriangle").classList.remove(`${styles.active}`)
            document.querySelector("#textTriangle").classList.remove(`${styles.active}`)
            document.querySelector("#portfolioTitle").textContent = "Portfolio"
            document.querySelector("#backBtn").classList.toggle("inactive")

        }
        console.log(activeSelection)
    }, [activeSelection])


    return (
        <Layout>
            <div className={styles.portfolioContainer}>
                <span className="upperDiv">
                    <button
                        onClick={() => {
                            setActiveSelection("inactive")
                        }}
                        id="backBtn"
                        className="inactive"
                    >
                        &#8249; Back
                    </button>
                    <h1 style={{textAlign: `center`}} id="portfolioTitle" className="animate__animated animate__slideInRight">Portfolio</h1>
                </span>                
                {activeSelection && 
                    <PortfolioContainer selection={activeSelection} />
                }

                <div
                    className={styles.selectionTriangle + ` animate__animated animate__rotateIn animate__delay-1s`}
                    id="selectionTriangle"
                >
                    <Image className={styles.triangle} layout="fill" id="leftTriangle" src={left} alt="leftTriangle" />
                    <Image className={styles.triangle} layout="fill" id="bottomTriangle" src={bottom} alt="bottomTriangle" />
                    <Image className={styles.triangle} layout="fill" id="rightTriangle" src={right} alt="rightTriangle" />
                </div>
                <div 
                    className={styles.textTriangle + ` animate__animated animate__rollIn animate__delay-1s`}
                    id="textTriangle"
                >
                    <span 
                        onClick={() => setActiveSelection("gfx")}
                    >
                        Graphic Design
                    </span>
                    <span 
                        onClick={() => setActiveSelection("web")}
                    >
                        Web Design
                    </span>
                    <span 
                        onClick={() => setActiveSelection("photo")}
                    >
                        Photography
                    </span>
                </div>
            </div>

        </Layout>
    )
}