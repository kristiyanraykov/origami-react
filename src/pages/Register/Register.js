import styles from './Register.module.css'

import { useState, useEffect } from 'react';

import Title from '../../components/Title/Title';
import SubmitButton from '../../components/Button/SubmitButton';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Input from '../../components/Input/Input';

const Register = () => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [rePassword, setRePassword] = useState('')

    const onChange = (event, type) => {
        switch (type) {
            case 'email':
                setEmail(event)
                break;
            case 'password':
                setPassword(event)
                break;
            case 'rePassword':
                setRePassword(event)
                break;
            default:
                return null;
        }
    }

    return (
        <PageWrapper>
            <div className={styles.container}>
                <Title title={'Register'} />
                <Input
                    value={email}
                    onChange={(e) => onChange(e.target.value, 'email')}
                    label='Email'
                    id='email'
                />
                <Input
                    value={password}
                    onChange={(e) => onChange(e.target.value, 'password')}
                    label='Password'
                    id='password'
                />
                <Input
                    value={rePassword}
                    onChange={(e) => onChange(e.target.value, 'rePassword')}
                    label='Re-Password'
                    id='re-password'
                />
                <SubmitButton title={'Register'} />
            </div>

        </PageWrapper>
    )
}

export default Register;
