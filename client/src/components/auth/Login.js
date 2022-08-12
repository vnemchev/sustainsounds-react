import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/authContext';
import * as authService from '../../services/authService';
import styles from '../../App.module.css';

const Login = () => {
    const navigate = useNavigate();
    const { userLogin } = useContext(AuthContext);

    const [error, setError] = useState('');
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
            .catch(err => {
                setError(err.message);
            });
    };

    const changeHandler = e => {
        setLoginData(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler}>
                <h1 className={styles.heading}>Log in</h1>

                {error.length > 0 && <p>E-mail or password incorrect!</p>}

                <div className={`${styles.myFormGroup} form-group`}>
                    <label htmlFor="login-email">e-mail: </label>
                    <input
                        className="form-control"
                        type="email"
                        id="login-email"
                        name="email"
                        value={loginData.email}
                        onChange={changeHandler}
                    ></input>

                    <label htmlFor="login-password">password: </label>
                    <input
                        className="form-control"
                        type="password"
                        id="login-password"
                        name="password"
                        value={loginData.password}
                        onChange={changeHandler}
                    ></input>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn-secondary">
                        Log In
                    </button>
                </div>

                <Link to={'/register'}>I don't have an account yet...</Link>
            </form>
        </div>
    );
};

export default Login;
