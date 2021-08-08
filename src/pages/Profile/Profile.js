import { useState, useEffect } from 'react'

import PageWrapper from '../../components/PageWrapper/PageWrapper'
import Origamies from '../../components/Origamies/Origamies'

const Profile = ({
    history,
    match
}) => {

const [username, setUsername] = useState(null)
const [postsCount, setPostsCount] = useState(null)


const getUser = (userId) => {
    fetch(`http://localhost:9999/api/user?id=${userId}`)
    .then(res => res.json())
    .then(user => {
        setUsername(user.username)
        setPostsCount(user.posts)
    })
    .catch(err => history.push('/error'))
}
useEffect(() => {
    getUser(match.params.userId)
},[])

if(!username) {
    return (
        <PageWrapper>
            <div> Loading ...</div>
        </PageWrapper>
    )
}

    return (
        <PageWrapper>
            <div>

            </div>

            <Origamies length={3} />
        </PageWrapper>
    )
}

export default Profile