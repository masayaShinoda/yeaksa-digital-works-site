import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Logo from '../public/logo/logo-black-font.png'
import Image from 'next/image'
import styles from '../styles/nav.module.css'

export default function Nav() {
    const router = useRouter();
    console.log(router.pathname)

    return (
        <div className={styles.navbar} style={{overflow: `hidden`}}>
            <Link href="/">
                <a className={styles.logoLink + ` animate__animated animate__slideInLeft`}>
                    <Image src={Logo} placeholder="blur" alt="Logo" />
                </a>
            </Link>           
            
            <nav className=" animate__animated animate__slideInRight">
                <Link href="/portfolio">
                    <a className={router.pathname === "/portfolio" ? `${styles.active}` : ""}>Portfolio</a>
                </Link>
                <Link href="/contact">
                    <a className={router.pathname === "/contact" ? `${styles.active}` : ""}>Contact</a>                    
                </Link>
            </nav>

        </div>
    )
}