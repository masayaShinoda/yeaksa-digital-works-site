import { NextSeo } from 'next-seo'
import Nav from "../components/nav.js"
import styles from "../styles/layout.module.css"

export default function Layout({ children, pageName }) {

    return (
        <div className={styles.container}>
            {pageName ? 
                <NextSeo 
                    title={`${pageName} | YeakSa Digital Works`}
                    description="Design agency based in Phnom Penh with an Esports niche."
                    keywords="design cambodia, designers in cambodia, graphics design cambodia, graphic design in cambodia, cambodian graphic designer, grapics design phnom penh, phnom penh graphic designers, phnom penh creative agency, phnom penh design aegency, design agency, design agency cambodia, design agency phnom penh, esports creative agency, esports design agency, digital marketing in cambodia, digital marketing phnom penh, digital marketing agency, digital marketing in phnom penh, e-sports cambodia, cambodian esports, cambodia esports, cambodia professional esports organization, esports organization in cambodia, khmer esports organization, yeaksa, yeaksa esports, yeaksa esports organization, photographer in phnom penh, photographer in cambodia, cambodia photography, photography agency, photography freelance, graphics design freelance, graphic design freelance, frontend web development in cambodia, frontend web development in phnom penh, phnom penh web developer, phnom penh web development, photography agency"
                /> 
                :   <NextSeo 
                        title="YeakSa Digital Works"
                        description="Professional esports organzation based in Phnom Penh, Cambodia."
                        keywords="design cambodia, designers in cambodia, graphics design cambodia, graphic design in cambodia, cambodian graphic designer, grapics design phnom penh, phnom penh graphic designers, phnom penh creative agency, phnom penh design aegency, design agency, design agency cambodia, design agency phnom penh, esports creative agency, esports design agency, digital marketing in cambodia, digital marketing phnom penh, digital marketing agency, digital marketing in phnom penh, e-sports cambodia, cambodian esports, cambodia esports, cambodia professional esports organization, esports organization in cambodia, khmer esports organization, yeaksa, yeaksa esports, yeaksa esports organization, photographer in phnom penh, photographer in cambodia, cambodia photography, photography agency, photography freelance, graphics design freelance, graphic design freelance, frontend web development in cambodia, frontend web development in phnom penh, phnom penh web developer, phnom penh web development, photography agency"
                    /> 
            }
            <Nav />
            <main>
                {children}
            </main>
        </div>
    )
}