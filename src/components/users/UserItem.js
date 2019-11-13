import React from "react";
import { Link } from 'react-router-dom'

const UserItem = ({ user: { avatar_url, login } }) => {

    return (
        <div className="card text-center">
            <img
                src={avatar_url}
                alt=""
                className="round-img"
                style={{ width: "60px" }}
            />
            <Link to={`/user/${login}`} >{login}</Link>
        </div>
    );

};



export default UserItem;
