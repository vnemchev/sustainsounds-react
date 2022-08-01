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
        <div>
            {artists?.map(x => (
                <ArtistCard key={x._id} artist={x} />
            ))}
        </div>
    );
};

export default ArtistList;
