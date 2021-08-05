import styles from './ShareThoughts.module.css'
import Title from '../../components/Title/Title'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import SubmitButton from '../../components/Button/SubmitButton'
import Origamies from '../../components/Origamies/Origamies'

const ShareThoughtsPage = () => {
    return (
        <PageWrapper>
            <Title title='Share Your Thoughts...' />
            <div className={styles.container}>
                <div>
                    <textarea className={styles.textarea}></textarea>

                </div>
                <div>
                    <SubmitButton title={'Submit'} />

                </div>

            </div>
            <Origamies length={3}/>
        </PageWrapper>
    )
}

export default ShareThoughtsPage
