import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import EventCard from '../../events/EventCard/EventCard';
import * as userService from '../../../services/userService';
import styles from './Profile.module.css';

const Profile = () => {
    const navigate = useNavigate();
    const [loadedUser, setLoadedUser] = useState({});
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if (user.alias) {
            userService
                .getOneArtistDetailed(user._id)
                .then(res => setLoadedUser(res))
                .catch(err => navigate('/404'));
        } else {
            userService
                .getOneFanDetailed(user._id)
                .then(res => setLoadedUser(res))
                .catch(err => navigate('/404'));
        }
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.profileContainer}>
                <div className={styles.infoContainer}>
                    {loadedUser.imageUrl ? (
                        <img src={loadedUser.imageUrl} alt="profile-pic"></img>
                    ) : (
                        <img
                            src="https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg"
                            alt="profile-pic"
                        ></img>
                    )}
                    {loadedUser.alias && <h1>Alias: {loadedUser.alias}</h1>}

                    {loadedUser.genre && <h2>Genre: {loadedUser.genre}</h2>}
                    <h3>E-mail: {loadedUser.email}</h3>
                    {loadedUser.bio && (
                        <p className={styles.bio}>{loadedUser.bio}</p>
                    )}
                </div>
                <div className={styles.btnBox}>
                    {user.alias && (
                        <button
                            className="btn-secondary"
                            style={{ marginLeft: '60px' }}
                            onClick={() => navigate('/profile/edit')}
                        >
                            Edit Profile
                        </button>
                    )}
                </div>
            </div>
            <div className={styles.eventsContainer}>
                {loadedUser?.eventsCreated?.length > 0 ? (
                    <>
                        <h2 className={styles.bottomHeading}>
                            My created events:
                        </h2>

                        <div>
                            {loadedUser.eventsCreated.map(e => (
                                <EventCard key={e._id} event={e} />
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        {loadedUser.alias && (
                            <h2 className={styles.bottomHeading}>
                                No events created yet...
                            </h2>
                        )}
                    </>
                )}

                {loadedUser?.eventsAttended?.length > 0 ? (
                    <>
                        <h2 className={styles.bottomHeading}>
                            My attended events:
                        </h2>
                        <div>
                            {loadedUser.eventsAttended.map(e => (
                                <EventCard key={e._id} event={e} />
                            ))}
                        </div>
                    </>
                ) : (
                    <h2 className={styles.bottomHeading}>
                        No events attended yet...
                    </h2>
                )}
            </div>
        </div>
    );
};

export default Profile;
