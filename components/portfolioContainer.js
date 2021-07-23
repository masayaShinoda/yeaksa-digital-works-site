import GfxPortf from "./gfxPortf"
import WebPortf from "./webPortf"
import PhotoPortf from "./photoPortf"
import styles from "../styles/portfContainer.module.css"

export default function PortfolioContainer({ selection }) {
    return (
        <div className={styles.portfContainer}>
            {selection && 
                <>
                    {
                        selection == "gfx" ? <GfxPortf />  
                        : selection == "web" ? <WebPortf />  
                        : selection == "photo" ? <PhotoPortf /> 
                        : null
                    }            
                </>
            }                
        </div>
    )
}