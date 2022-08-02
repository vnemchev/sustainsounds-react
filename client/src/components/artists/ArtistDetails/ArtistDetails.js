import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as userService from '../../../services/userService';

const ArtistDetails = () => {
    const { artistId } = useParams();
    const [artist, setArtists] = useState({});

    useEffect(() => {
        userService
            .getOneArtist(artistId)
            .then(res => setArtists(res))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <div className="card">
                <h3>{artist.alias}</h3>
                <h5>{artist.genre}</h5>
                <h5>{artist.bio}</h5>
            </div>
        </>
    );
};

export default ArtistDetails;
