import React from 'react';

const Anime = ({ anime }) => {
    return (
        <div style={{ marginBottom: 50 }}>
            <img src={anime.coverImage.medium} alt={anime.title.romaji} />
            {anime.title.romaji}
        </div>
    );
};

export default Anime;