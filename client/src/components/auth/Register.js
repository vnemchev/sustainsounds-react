import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/authContext';
import * as authService from '../../services/authService';
import styles from '../../App.module.css';

const Register = () => {
    const navigate = useNavigate();
    const { userLogin } = useContext(AuthContext);

    const [errors, setErrors] = useState({});
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

        if (password.length < 4) {
            setErrors(state => ({
                ...state,
                password,
                repeatPassword,
            }));
        }

        if (password !== repeatPassword) {
            return;
        }

        let userInfo = {
            email,
            password,
            repeatPassword,
        };

        if (isArtist) {
            userInfo.alias = alias;
        }

        authService
            .register(userInfo)
            .then(res => {
                userLogin(res);
                navigate('/');
            })
            .catch(err =>
                setErrors(state => ({ ...state, registerError: err.message })),
            );
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

    const minLength = (e, bound) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: registerData[e.target.name].length < bound,
        }));
    };

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler}>
                <h1 className={styles.heading}>Sign Up</h1>

                {errors.registerError && (
                    <p className={styles.note}>Wrong e-mail or password!</p>
                )}

                <div className={`${styles.myFormGroup} form-group`}>
                    <label htmlFor="reg-email">e-mail: </label>
                    <input
                        className="form-control"
                        type="email"
                        id="reg-email"
                        name="email"
                        value={registerData.email}
                        onChange={changeHandler}
                        onBlur={e => minLength(e, 9)}
                    ></input>
                    {errors.email && (
                        <p className={styles.note}>
                            Email must be at least 9 symbols!
                        </p>
                    )}

                    <label htmlFor="reg-password">password: </label>
                    <input
                        className="form-control"
                        type="password"
                        id="reg-password"
                        name="password"
                        value={registerData.password}
                        onChange={changeHandler}
                        onBlur={e => minLength(e, 4)}
                    ></input>
                    {errors.password && (
                        <p className={styles.note}>
                            Password must be at least 4 symbols!
                        </p>
                    )}

                    <label htmlFor="repeatPassword">repeat password: </label>
                    <input
                        className="form-control"
                        type="password"
                        id="repeatPassword"
                        name="repeatPassword"
                        value={registerData.repeatPassword}
                        onChange={changeHandler}
                    ></input>
                </div>

                <div className={`${styles.myFormGroup} form-group`}>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="artistReg"
                        name="artistReg"
                        checked={registerData.isArtist}
                        onChange={isArtist}
                    ></input>
                    <label htmlFor="artistReg" className="form-check-label">
                        register as artist
                    </label>
                </div>

                {registerData.isArtist && (
                    <div className={`${styles.myFormGroup} form-group`}>
                        <label htmlFor="alias">alias: </label>
                        <input
                            className="form-control"
                            type="text"
                            id="alias"
                            name="alias"
                            value={registerData.alias}
                            onChange={changeHandler}
                            onBlur={e => minLength(e, 4)}
                        ></input>
                        {errors.alias && (
                            <p className={styles.note}>
                                Alias must be at least 4 symbols!
                            </p>
                        )}
                    </div>
                )}

                <div>
                    <button type="submit" className="btn-secondary">
                        Sign Up
                    </button>
                </div>

                <Link to={'/login'}>I already have an account!</Link>
            </form>
        </div>
    );
};

export default Register;
