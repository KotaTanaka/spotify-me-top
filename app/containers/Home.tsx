import { useLoaderData } from 'remix';

import { IHomeLoader } from '~/loaders/home';

const Home = () => {
  const { topArtists, topTracks } = useLoaderData<IHomeLoader>();

  return (
    <div className="pt-16 text-center">
      <h1 className="font-bold underline">Artist</h1>
      <ul>
        {topArtists.map((artist) => {
          return <li key={artist.id}>{artist.name}</li>;
        })}
      </ul>
      <h1 className="mt-16 font-bold underline">Track</h1>
      <ul>
        {topTracks.map((track) => {
          return <li key={track.id}>{track.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Home;
