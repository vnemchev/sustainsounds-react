import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import * as userService from '../../../services/userService';

import styles from './ArtistDetails.module.css';

const ArtistDetails = () => {
    const navigate = useNavigate();
    const { artistId } = useParams();
    const [artist, setArtists] = useState({});

    useEffect(() => {
        userService
            .getOneArtistDetailed(artistId)
            .then(res => setArtists(res))
            .catch(err => navigate('/404'));
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.artistContainer}>
                <div className={styles.infoContainer}>
                    <img src={artist.imageUrl} alt="profile-pic"></img>

                    <h1 className={styles.artisName}>{artist.alias}</h1>

                    <h2>{artist.genre}</h2>

                    <h3 className={styles.description}>{artist.bio}</h3>

                    <ul className={`${styles.eventsContainer} list-group`}>
                        {artist.eventsCreated?.map(x => (
                            <Link
                                key={x._id}
                                className={styles.link}
                                to={`/events/${x._id}`}
                            >
                                <li
                                    style={{
                                        color: 'black',
                                        backgroundColor: '#79A984',
                                    }}
                                    className="list-group-item"
                                >
                                    {x.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ArtistDetails;
