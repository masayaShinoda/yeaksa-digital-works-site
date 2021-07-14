import Link from "next/link"
import Logo from "../public/logo/logo-black-font.png"
import Image from 'next/image'
import styles from "../styles/nav.module.css"

export default function Nav() {
    return (
        <div className={styles.navbar}>
            <Link href="/">
                <a className={styles.logoLink}>
                    <Image src={Logo} placeholder="blur" alt="Logo" />

                </a>
            </Link>           
            
            <nav style={{opacity: 0}}>  {/* hide until website launch */}
                <Link href="/">Works</Link>
                <Link href="/">Contact</Link>
            </nav>

        </div>
    )
}