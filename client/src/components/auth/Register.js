import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';

import * as authService from '../../services/authService';

const Register = () => {
    const { user, userLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [registerData, setRegisterData] = useState({
        email: '',
        password: '',
        repeatPassword: '',
        isArtist: false,
        alias: '',
    });

    const submitHandler = async e => {
        e.preventDefault();

        const { email, password, repeatPassword, isArtist, alias } =
            registerData;

        let userInfo = {
            email,
            password,
            repeatPassword,
        };

        if (isArtist) {
            userInfo.alias = alias;
        }

        authService.register(userInfo).then(res => {
            console.log(res);
            userLogin(res);
            navigate('/');
        });
    };

    const changeHandler = e => {
        setRegisterData(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const isArtist = e => {
        setRegisterData(state => ({
            ...state,
            isArtist: e.target.checked,
        }));
    };

    return (
        <>
            <form onSubmit={submitHandler}>
                <h1>Register</h1>

                <div>
                    <label htmlFor="reg-email">email: </label>
                    <input
                        type="email"
                        id="reg-email"
                        name="email"
                        value={registerData.email}
                        onChange={changeHandler}
                    ></input>
                </div>

                <div>
                    <label htmlFor="reg-password">password: </label>
                    <input
                        type="password"
                        id="reg-password"
                        name="password"
                        value={registerData.password}
                        onChange={changeHandler}
                    ></input>
                </div>

                <div>
                    <label htmlFor="repeatPassword">repeat password: </label>
                    <input
                        type="password"
                        id="repeatPassword"
                        name="repeatPassword"
                        value={registerData.repeatPassword}
                        onChange={changeHandler}
                    ></input>
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="artistReg"
                        name="artistReg"
                        checked={registerData.isArtist}
                        onChange={isArtist}
                    ></input>
                    <label htmlFor="artistReg">register as artist </label>
                </div>

                {registerData.isArtist && (
                    <div>
                        <label htmlFor="alias">alias: </label>
                        <input
                            type="text"
                            id="alias"
                            name="alias"
                            value={registerData.alias}
                            onChange={changeHandler}
                        ></input>
                    </div>
                )}

                <div>
                    <button type="submit">register</button>
                </div>

                <p>I don't have an account yet...</p>
            </form>
        </>
    );
};

export default Register;
