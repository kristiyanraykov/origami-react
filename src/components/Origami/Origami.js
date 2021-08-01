import styles from './Origami.module.css'
import logo from '../../image/blue-origami-bird.png'

const Origami = ({
    description,
    author
}) => {
    return (
        <div className={styles.container}>

            <img className={styles['origami-image']} src={logo}/>
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