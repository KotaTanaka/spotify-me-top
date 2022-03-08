import { useMemo, useState } from 'react';
import { useLoaderData } from 'remix';

import FormSelect from '~/components/partials/FormSelect';
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
      <div className="daisy-tabs daisy-tabs-boxed">
        <span
          className={`w-1/2 daisy-tab ${
            activeType === 'tracks' ? 'daisy-tab-active' : ''
          }`}
          onClick={() => setActiveType('tracks')}
        >
          曲
        </span>
        <span
          className={`w-1/2 daisy-tab ${
            activeType === 'artists' ? 'daisy-tab-active' : ''
          }`}
          onClick={() => setActiveType('artists')}
        >
          アーティスト
        </span>
      </div>
      <div className="my-4">
        <FormSelect />
      </div>
      {activeList}
    </div>
  );
};

export default Home;
