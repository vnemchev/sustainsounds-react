import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../contexts/authContext';
import * as artistService from '../../../services/artistService';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [loadedUser, setLoadedUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (user.alias) {
            artistService
                .getOneArtist(user._id)
                .then(res => setLoadedUser(res))
                .catch(err => console.log(err));
        } else {
            artistService
                .getOneFan(user._id)
                .then(res => setLoadedUser(res))
                .catch(err => console.log(err));
        }
    }, []);

    return (
        <>
            {loadedUser.alias && <p>Alias: {loadedUser.alias}</p>}
            {loadedUser.imageUrl ? (
                <img src={loadedUser.imageUrl} alt="profile-pic"></img>
            ) : (
                <img
                    src="https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg"
                    alt="profile-pic"
                ></img>
            )}

            <p>E-mail: {loadedUser.email}</p>
            {loadedUser.genre && <p>Genre: {loadedUser.genre}</p>}
            {loadedUser.bio && <p>Bio: {loadedUser.bio}</p>}

            {loadedUser.eventsCreated && (
                <p>My events: {loadedUser.eventsCreated}</p>
            )}

            {loadedUser.eventsAttended && (
                <p>My events: {loadedUser.eventsAttended}</p>
            )}

            {user.alias && (
                <button onClick={() => navigate('/profile/edit')}>
                    Edit Profile
                </button>
            )}
        </>
    );
};

export default Profile;
