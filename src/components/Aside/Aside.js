import Link from '../Link/Link'
import styles from './Aside.module.css'

const Aside = () => {
    return (
        <aside >
            <nav className={styles.aside}>
                <Link href="#" title="Going to 1" type="aside"/>
                <Link href="#" title="Going to 2" type="aside"/>
                <Link href="#" title="Going to 3" type="aside"/>
            </nav>
        </aside>
    )
}

export default Aside;