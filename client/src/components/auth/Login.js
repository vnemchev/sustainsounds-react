import { useState } from 'react';
import * as userService from '../../services/userService';

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const submitHandler = async e => {
        e.preventDefault();

        const { email, password } = loginData;

        // const createdUser = await userService.login(loginData);

        console.log(email, password);
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
                    <label htmlFor="email">email: </label>
                    <input
                        type="email"
                        id="login-email"
                        name="email"
                        value={loginData.email}
                        onChange={changeHandler}
                    ></input>
                </div>

                <div>
                    <label htmlFor="password">password: </label>
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
