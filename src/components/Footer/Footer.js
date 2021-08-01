import image from '../../image/blue-origami-bird-flipped.png'
import styles from './Footer.module.css'
import Link from '../Link/Link'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
            <Link href="#" title="Going to 1" type="footer"/>
            <Link href="#" title="Going to 2" type="footer"/>
            <Link href="#" title="Going to 3" type="footer"/>
            <img src={image}/>
            </div>
            <p className={styles.uni}>Soft Uni</p>
        </footer>
    )
}

export default Footer;