import image from '../../image/blue-origami-bird-flipped.png'
import styles from './Footer.module.css'
import Link from '../Link/Link'
import getNavigation from '../../utils/navigation'

const Footer = () => {
    const links = getNavigation();
    return (
        <footer className={styles.footer}>
            <div>
            {
                links.map(navElement => {
                    return (
                        <Link href={navElement.link} title={navElement.title} type="footer" />

                    )
                })
            }
            <img src={image}/>
            </div>
            <p className={styles.uni}>Soft Uni</p>
        </footer>
    )
}

export default Footer;