import { useEffect, useState } from 'react';
import ArtistCard from '../ArtistCard/ArtistCard';
import * as artistService from '../../../services/artistService';

const ArtistList = () => {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        artistService
            .getAll()
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
