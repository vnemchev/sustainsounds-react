import { useState } from 'react';
import * as userService from '../services/userService';

export const Register = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        repeatPassword: '',
        alias: '',
    });

    const submitHandler = async e => {
        e.preventDefault();
        const { email, password, repeatPassword, alias } = userData;

        let userInfo = {
            email,
            password,
            repeatPassword,
        };

        if (alias) {
            userInfo.alias = alias;
        }
        const createdUser = await userService.create(userInfo);
        console.log(createdUser);
    };

    const changeHandler = e => {
        setUserData(userData => ({
            ...userData,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            <form onSubmit={submitHandler}>
                <h1>Register</h1>

                <div>
                    <label htmlFor="email">email: </label>
                    <input type="email" id="email" name="email" value={userData.email} onChange={changeHandler}></input>
                </div>

                <div>
                    <label htmlFor="password">password: </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={userData.password}
                        onChange={changeHandler}
                    ></input>
                </div>

                <div>
                    <label htmlFor="repeatPassword">repeat password: </label>
                    <input
                        type="text"
                        id="repeatPassword"
                        name="repeatPassword"
                        value={userData.repeatPassword}
                        onChange={changeHandler}
                    ></input>
                </div>

                <div>
                    <input type="checkbox" id="artistReg" name="artistReg"></input>
                    <label htmlFor="artistReg">register as artist </label>
                </div>

                <div>
                    <label htmlFor="alias">alias: </label>
                    <input type="text" id="alias" name="alias" value={userData.alias} onChange={changeHandler}></input>
                </div>

                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </>
    );
};
