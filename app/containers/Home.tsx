import { useMemo, useState } from 'react';
import { useLoaderData } from 'remix';

import ArtistList from '~/components/routes/ArtistList';
import TrackList from '~/components/routes/TrackList';
import { IHomeLoader } from '~/loaders/home';

const Home = () => {
  const { topArtists, topTracks } = useLoaderData<IHomeLoader>();

  const [activeType, setActiveType] = useState<'tracks' | 'artists'>('tracks');

  const activeList = useMemo<JSX.Element>(() => {
    switch (activeType) {
      case 'tracks':
        return <TrackList tracks={topTracks} />;
      case 'artists':
        return <ArtistList artists={topArtists} />;
    }
  }, [activeType, topTracks, topArtists]);

  return (
    <div className="p-4 text-center">
      <div className="flex justify-center">
        <button
          className={`w-full h-16 text-xl text-gray-500 ${
            activeType === 'tracks' ? 'font-bold text-black' : ''
          }`}
          onClick={() => setActiveType('tracks')}
        >
          Tracks
        </button>
        <button
          className={`w-full h-16 text-xl text-gray-500 ${
            activeType === 'artists' ? 'font-bold text-black' : ''
          }`}
          onClick={() => setActiveType('artists')}
        >
          Artists
        </button>
      </div>
      {activeList}
    </div>
  );
};

export default Home;
