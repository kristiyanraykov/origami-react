import styles from './Register.module.css'

import { useState, useEffect, useContext } from 'react';

import Title from '../../components/Title/Title';
import SubmitButton from '../../components/Button/SubmitButton';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Input from '../../components/Input/Input';
import authenticate from '../../utils/authenticate';
import UserContext from '../../Context';

const Register = ({
    history
}) => {
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')
    let [rePassword, setRePassword] = useState('')

    const userContext = useContext(UserContext)

    const onChange = (event, type) => {
        switch (type) {
            case 'username':
                setUsername(event)
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

    const handleSubmit = async (e) => {
        e.preventDefault()
        e.preventDefault()
        await authenticate('http://localhost:9999/api/user/register', {
            username, password 
        }, (user) => {
            userContext.logIn(user)
            history.push('/')
        }, (e) => {
            console.log('Error');
            console.log(e);
        }
        )

    }


return (
    <PageWrapper>
        <form className={styles.container} onSubmit={handleSubmit}>
            <Title title={'Register'} />
            <Input
                value={username}
                onChange={(e) => onChange(e.target.value, 'username')}
                label='Username'
                id='username'
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
        </form>

    </PageWrapper>
)
}

export default Register;
