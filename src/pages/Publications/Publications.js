import styles from './Publications.module.css'

import { useContext } from 'react';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Title from '../../components/Title/Title';
import Origamies from '../../components/Origamies/Origamies';
import UserContext from '../../Context';

const Publications = () => {

  return (
    <PageWrapper>
      <Title title='Publications' />
      <Origamies />

    </PageWrapper>

  )
}


export default Publications;
