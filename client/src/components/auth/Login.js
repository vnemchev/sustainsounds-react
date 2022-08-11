import { useState, useContext } from 'react';

import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';

import * as authService from '../../services/authService';

const Login = () => {
    const navigate = useNavigate();
    const { userLogin } = useContext(AuthContext);
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const submitHandler = async e => {
        e.preventDefault();

        authService
            .login(loginData)
            .then(res => {
                if (res !== undefined) {
                    userLogin(res);
                    navigate('/');
                }
            })
            .catch(err => console.log(err));
    };

    const changeHandler = e => {
        setLoginData(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            <form onSubmit={submitHandler}>
                <h1>Login</h1>

                <div>
                    <label htmlFor="login-email">email: </label>
                    <input
                        type="email"
                        id="login-email"
                        name="email"
                        value={loginData.email}
                        onChange={changeHandler}
                    ></input>
                </div>

                <div>
                    <label htmlFor="login-password">password: </label>
                    <input
                        type="password"
                        id="login-password"
                        name="password"
                        value={loginData.password}
                        onChange={changeHandler}
                    ></input>
                </div>

                <div>
                    <button type="submit">Login</button>
                </div>

                <Link to={'/register'}>I don't have an account yet...</Link>
            </form>
        </>
    );
};

export default Login;
