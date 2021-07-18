import Link from "next/link"
import Logo from "../public/logo/logo-black-font.png"
import Image from 'next/image'
import styles from "../styles/nav.module.css"

export default function Nav() {
    return (
        <div className={styles.navbar}>
            <Link href="/">
                <a className={styles.logoLink + ` animate__animated animate__slideInLeft`}>
                    <Image src={Logo} placeholder="blur" alt="Logo" />

                </a>
            </Link>           
            
            <nav className=" animate__animated animate__slideInRight">
                <Link href="/">Works</Link>
                <Link href="/contact">Contact</Link>
            </nav>

        </div>
    )
}