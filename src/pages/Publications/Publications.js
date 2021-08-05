import styles from './Publications.module.css'

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Title from '../../components/Title/Title';
import Origamies from '../../components/Origamies/Origamies';

const Publications = () => {


  return (
    <PageWrapper>
      <Title title='Publications' />
      <Origamies />

    </PageWrapper>

  )
}


export default Publications;
