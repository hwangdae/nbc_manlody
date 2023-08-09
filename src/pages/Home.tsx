import React, { useState, useEffect } from 'react';

const SpotifyComponent: React.FC = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [albumTracks, setAlbumTracks] = useState<any[]>([]);

  useEffect(() => {
    // Extract access token from URL hash
    const hashParams = new URLSearchParams(window.location.hash.substr(1));
    const token = hashParams.get('access_token');

    if (token) {
      setAccessToken(token);
    }
  }, []);

  const fetchAlbumTracks = async () => {
    if (accessToken) {
      const playlist_id = '3cEYpjA9oz9GiPac4AsH4n'; // Replace with actual album ID

      const response = await fetch(`
      https://api.spotify.com/v1/playlists/${playlist_id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const data = await response.json();
      setAlbumTracks(data.items);
    }
  };

  return (
    <div>
      <h1>Spotify Album Tracks Example</h1>
      {accessToken ? (
        <div>
          <button onClick={fetchAlbumTracks}>Fetch Album Tracks</button>
          <ul>
            {albumTracks?.map((track, index) => (
              <li key={index}>
                {track.name} - {track.artists[0].name}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <a href="https://accounts.spotify.com/authorize?client_id=f3a48d1e185a40c492a0e4565f1b913e&response_type=token&redirect_uri=http://localhost:3000&scope=user-read-private%20user-read-email">
          Log in with Spotify
        </a>
      )}
    </div>
  );
};

export default SpotifyComponent;