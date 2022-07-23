const ArtistCard = ({ artist }) => {
    return (
        <div>
            <div className="card">
                <h3>{artist.alias}</h3>
                <h5>{artist.genre}</h5>
            </div>
        </div>
    );
};

export default ArtistCard;
