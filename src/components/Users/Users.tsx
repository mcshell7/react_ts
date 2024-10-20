import React, {useEffect, useState} from 'react';
import {getUsers} from "../../services/api.service";
import User from "../User/User";
import {IUser} from "../../models/IUser";



const Users = () => {

    const [users, setUsers] = useState<IUser[]>([])
    
    useEffect(() => {
        getUsers().then(data => setUsers(data));
    }, [])

    return (
        <div>
            {users.map((item) => (<User item={item} key={item.id}/>))}
        </div>
    );
};

export default Users;
