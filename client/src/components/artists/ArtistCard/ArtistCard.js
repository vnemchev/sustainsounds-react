import { useNavigate } from 'react-router-dom';

import styles from '../../Card.module.css';

const ArtistCard = ({ artist }) => {
    const navigate = useNavigate();
    return (
        <div
            className={`${styles.card} ${styles.artistCard}`}
            onClick={() => navigate(`/artists/${artist._id}`)}
        >
            <img
                src={artist.imageUrl}
                className={styles.artistPic}
                alt={artist.alias}
            ></img>

            <h2 className={styles.eventName}>{artist.alias}</h2>
        </div>
    );
};

export default ArtistCard;
