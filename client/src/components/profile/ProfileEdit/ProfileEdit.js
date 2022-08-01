import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../contexts/authContext';
import * as userService from '../../../services/userService';

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
                console.log(loadedUser);
            })
            .catch(err => console.log(err));
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
                navigate('/profile');
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <form onSubmit={submitHandler}>
                <h1>Edit Profile</h1>

                <div>
                    <label htmlFor="alias">alias: </label>
                    <input
                        type="text"
                        id="alias"
                        name="alias"
                        value={loadedUser.alias}
                        onChange={changeHandler}
                    ></input>
                </div>

                <div>
                    <label htmlFor="genre">genre: </label>
                    <input
                        type="text"
                        id="genre"
                        name="genre"
                        value={loadedUser.genre}
                        onChange={changeHandler}
                    ></input>
                </div>

                <div>
                    <label htmlFor="bio">bio: </label>
                    <textarea
                        id="bio"
                        name="bio"
                        value={loadedUser.bio}
                        onChange={changeHandler}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="imageUrl">image: </label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={loadedUser.imageUrl}
                        onChange={changeHandler}
                    ></input>
                </div>

                <div>
                    <button type="submit">Create</button>
                </div>
            </form>
        </>
    );
};

export default ProfileEdit;
