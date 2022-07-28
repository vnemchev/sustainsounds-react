import { useState } from 'react';
import * as authService from '../../services/authService';

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const submitHandler = async e => {
        e.preventDefault();

        const loggedUser = await authService.login(loginData);

        console.log(loggedUser);
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

                <p>I already have an account!</p>
            </form>
        </>
    );
};

export default Login;
