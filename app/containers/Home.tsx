import { useCallback, useMemo, useState } from 'react';
import { useLoaderData } from 'remix';

import FormSelect, { IFormSelectItem } from '~/components/partials/FormSelect';
import ArtistList from '~/components/routes/ArtistList';
import TrackList from '~/components/routes/TrackList';
import { IHomeLoader } from '~/loaders/home';

const Home = () => {
  const { topArtists, topTracks } = useLoaderData<IHomeLoader>();

  const [activeType, setActiveType] = useState<'tracks' | 'artists'>('tracks');
  const [term, setTerm] = useState<'short' | 'medium' | 'long'>('short');

  const termItems = useMemo<IFormSelectItem[]>(() => {
    return [
      { value: 'short', text: '直近4週間' },
      { value: 'medium', text: '直近半年間' },
      { value: 'long', text: 'トータル' },
    ];
  }, []);

  const activeList = useMemo<JSX.Element>(() => {
    switch (activeType) {
      case 'tracks':
        return <TrackList tracks={topTracks} />;
      case 'artists':
        return <ArtistList artists={topArtists} />;
    }
  }, [activeType, topTracks, topArtists]);

  const onChangeTerm = useCallback((value: string) => {
    if (value === 'short' || value === 'medium' || value === 'long') {
      setTerm(value);
    }
  }, []);

  const genTabClassNames = (type: 'tracks' | 'artists') => {
    return `w-1/2 daisy-tab ${type === 'tracks' ? 'daisy-tab-active' : ''}`;
  };

  return (
    <div className="p-4 text-center">
      <div className="daisy-tabs daisy-tabs-boxed">
        <span
          className={genTabClassNames('tracks')}
          onClick={() => setActiveType('tracks')}
        >
          曲
        </span>
        <span
          className={genTabClassNames('artists')}
          onClick={() => setActiveType('artists')}
        >
          アーティスト
        </span>
      </div>
      <div className="my-4">
        <FormSelect value={term} items={termItems} onChange={onChangeTerm} />
      </div>
      {activeList}
    </div>
  );
};

export default Home;
