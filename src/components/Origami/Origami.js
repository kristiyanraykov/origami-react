import styles from './Origami.module.css'

const Origami = ({
    description,
    author
}) => {
    return (
        <div className={styles.container}>
            <p className={styles.description}>
                {description}
            </p>
            <div className={styles['author-wrapper']}>
                <span className={styles.author}>
                    <small>Author:</small>
                    {author}
                </span>
            </div>
        </div>
    )
}

export default Origami;