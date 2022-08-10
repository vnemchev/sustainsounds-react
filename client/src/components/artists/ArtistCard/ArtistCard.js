import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ artist }) => {
    const navigate = useNavigate();
    return (
        <div className="card">
            <h3>{artist.alias}</h3>

            <button onClick={() => navigate(`/artists/${artist._id}`)}>
                Details
            </button>
        </div>
    );
};

export default ArtistCard;
