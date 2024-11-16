import React, {useEffect} from 'react';
import {login} from "../services/api.services";

const LoginPage = () => {

    useEffect(() => {
        login({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 30
        }).then(value => console.log(value));
    }, []);


    return (
        <div>

        </div>
    );
};

export default LoginPage;