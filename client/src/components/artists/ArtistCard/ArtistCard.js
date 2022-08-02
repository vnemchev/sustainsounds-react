import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ artist }) => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="card">
                <h3>{artist.alias}</h3>
            </div>
            <div>
                <button onClick={() => navigate(`/artists/${artist._id}`)}>
                    Details
                </button>
            </div>
        </div>
    );
};

export default ArtistCard;
