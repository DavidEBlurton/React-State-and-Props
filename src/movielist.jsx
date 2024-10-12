import React, { useState } from 'react';

const MoviesList = () => {
    // Hardcoded list of movies
    const initialMovies = [
        { title: 'Inception', description: 'A thief who steals corporate secrets through the use of dream-sharing technology.' },
        { title: 'The Matrix', description: 'A computer hacker learns about the true nature of his reality.' },
        { title: 'Interstellar', description: 'A team of explorers travel through a wormhole in space.' }
    ];

    const [movies, setMovies] = useState(initialMovies);
    const [showDetails, setShowDetails] = useState({});

    // Toggle details for a specific movie
    const toggleDetails = (index) => {
        setShowDetails((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    // Remove a movie from the list
    const removeMovie = (index) => {
        setMovies((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1>Favorite Movies</h1>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>
                        <span onClick={() => toggleDetails(index)} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                            {movie.title}
                        </span>
                        <button onClick={() => removeMovie(index)}>Remove</button>
                        {showDetails[index] && <p>{movie.description}</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;
