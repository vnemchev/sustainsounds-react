import { useNavigate } from 'react-router-dom';

import styles from './ArtistCard.module.css';

const ArtistCard = ({ artist }) => {
    const navigate = useNavigate();
    return (
        <div className={styles.card}>
            <h3>{artist.alias}</h3>

            <button onClick={() => navigate(`/artists/${artist._id}`)}>
                Details
            </button>
        </div>
    );
};

export default ArtistCard;
