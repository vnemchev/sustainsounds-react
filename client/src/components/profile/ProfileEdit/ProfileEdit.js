import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../contexts/authContext';
import * as userService from '../../../services/userService';

import styles from '../../../App.module.css';

const ProfileEdit = () => {
    const navigate = useNavigate();
    const { user, aliasUpdate } = useContext(AuthContext);
    const [loadedUser, setLoadedUser] = useState({
        alias: '',
        genre: '',
        bio: '',
        imageUrl: '',
    });

    useEffect(() => {
        userService
            .getOneArtist(user._id)
            .then(res => {
                setLoadedUser(state => ({ ...state, ...res }));
            })
            .catch(err => navigate('/404'));
    }, []);

    const changeHandler = e => {
        setLoadedUser(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const submitHandler = e => {
        e.preventDefault();

        userService
            .editArtist(user._id, loadedUser)
            .then(res => {
                aliasUpdate(res.alias);
                console.log(res);
                localStorage.setItem(
                    'user',
                    JSON.stringify({
                        alias: res.alias,
                        email: user.email,
                        accessToken: user.accessToken,
                        _id: user._id,
                        eventsAttended: user.eventsAttended,
                    }),
                );
                navigate('/profile');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler}>
                <h1 className={`${styles.heading} ${styles.editHeading}`}>
                    Edit Profile
                </h1>

                <div className="form-group">
                    <label htmlFor="alias">alias: </label>
                    <input
                        className="form-control"
                        type="text"
                        id="alias"
                        name="alias"
                        value={loadedUser.alias}
                        onChange={changeHandler}
                    ></input>

                    <label htmlFor="genre">genre: </label>
                    <input
                        className="form-control"
                        type="text"
                        id="genre"
                        name="genre"
                        value={loadedUser.genre}
                        onChange={changeHandler}
                    ></input>

                    <label htmlFor="bio">bio: </label>
                    <textarea
                        className="form-control"
                        rows={6}
                        id="bio"
                        name="bio"
                        value={loadedUser.bio}
                        onChange={changeHandler}
                    ></textarea>

                    <label htmlFor="imageUrl">image: </label>
                    <input
                        className="form-control"
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={loadedUser.imageUrl}
                        onChange={changeHandler}
                    ></input>
                </div>

                <div>
                    <button type="submit" className="btn-secondary">
                        Confirm
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProfileEdit;
