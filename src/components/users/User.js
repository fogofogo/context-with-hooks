import React, { useEffect, useContext } from 'react'
import Spinner from '../layout/Spinner'
import Repos from '../repos/Repos'
import GithubContext from '../../context/gihub/githubContext'

const User = ({ match }) => {

    const githubContext = useContext(GithubContext)
    const {getUser, getRepos, repos} = githubContext;

    useEffect(() => {
        getUser(match.params.login)
        getRepos(match.params.login)
        // eslint-disable-next-line
    }, [])

    const { name, avatar_url, bio, blog} = githubContext.user;

    if (githubContext.loading) return <Spinner />

    return (
        <div>
            {name}
            <img
                src={avatar_url}
                alt=""
                className="round-img"
                style={{ width: "60px" }}
            />
            <p>{bio}</p>
            <p>{blog}</p>

            <Repos repos={repos} />
        </div>
    )

}

export default User
