import { useEffect, useState } from 'react';
import ArtistCard from '../ArtistCard/ArtistCard';
import * as userService from '../../../services/userService';

const ArtistList = () => {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        userService
            .getAllArtists()
            .then(result => setArtists(result))
            .catch(err => alert(err.message));
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
