import Link from '../Link/Link'
import styles from './Aside.module.css'
import getNavigation from '../../utils/navigation'

const Aside = () => {
    const links = getNavigation();
    return (
            <aside className={styles.aside}>
            {
                links.map(navElement => {
                    return (
                        <Link href={navElement.link} title={navElement.title} type="aside" />

                    )
                })
            }
            </aside>
    )
}

export default Aside;