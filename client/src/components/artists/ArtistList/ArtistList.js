import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ArtistCard from '../ArtistCard/ArtistCard';
import * as userService from '../../../services/userService';

const ArtistList = () => {
    const navigate = useNavigate();
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        userService
            .getAllArtists()
            .then(result => setArtists(result))
            .catch(err => navigate('/404'));
    }, []);

    return (
        <>
            {artists.length > 0 ? (
                artists?.map(x => <ArtistCard key={x._id} artist={x} />)
            ) : (
                <h2>No artists yet...</h2>
            )}
        </>
    );
};

export default ArtistList;
