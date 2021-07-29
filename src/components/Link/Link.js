import styles from './Link.module.css'

const Link = ({ title, href }) => {
    return (
        <li className={styles['list-item']}>
            <a href={href} className={styles["header-link"]}> {title}</a>
        </li>

    )
}

export default Link;