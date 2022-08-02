import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import EventCard from '../../events/EventCard/EventCard';
import { AuthContext } from '../../../contexts/authContext';
import * as userService from '../../../services/userService';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [loadedUser, setLoadedUser] = useState({
        alias: '',
        genre: '',
        bio: '',
        imageUrl: '',
    });
    const navigate = useNavigate();

    useEffect(() => {
        if (user.alias) {
            userService
                .getOneArtistDetailed(user._id)
                .then(res => setLoadedUser(res))
                .catch(err => console.log(err));
        } else {
            userService
                .getOneFanDetailed(user._id)
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
                <div>
                    My created events:
                    {loadedUser.eventsCreated.map(e => (
                        <EventCard key={e._id} event={e} />
                    ))}
                </div>
            )}

            {loadedUser.eventsAttended && (
                <div>
                    My attended events:
                    {loadedUser.eventsAttended.map(e => (
                        <EventCard key={e._id} event={e} />
                    ))}
                </div>
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
