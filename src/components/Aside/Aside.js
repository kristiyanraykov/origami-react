import Link from '../Link/Link'
import styles from './Aside.module.css'

const Aside = () => {
    return (
            <nav className={styles.aside}>
                <Link href="#" title="Going to 1" type="aside"/>
                <Link href="#" title="Going to 2" type="aside"/>
                <Link href="#" title="Going to 3" type="aside"/>
            </nav>
    )
}

export default Aside;