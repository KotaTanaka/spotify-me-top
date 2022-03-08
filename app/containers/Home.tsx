import { useCallback, useMemo, useState } from 'react';
import { useLoaderData } from 'remix';

import FormSelect, { IFormSelectItem } from '~/components/partials/FormSelect';
import ArtistList from '~/components/routes/ArtistList';
import TrackList from '~/components/routes/TrackList';
import { ITopArtist, ITopTrack } from '~/interfaces/spotify';
import { getUserTopArtists, getUserTopTracks } from '~/lib/spotify';
import { IHomeLoader } from '~/loaders/home';

const Home = () => {
  const { accessToken, initialArtists, initialTracks } =
    useLoaderData<IHomeLoader>();

  const [activeType, setActiveType] = useState<'tracks' | 'artists'>('tracks');
  const [term, setTerm] = useState<'short' | 'medium' | 'long'>('short');
  const [tracks, setTracks] = useState<ITopTrack[]>(initialTracks);
  const [artists, setArtists] = useState<ITopArtist[]>(initialArtists);

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
        return <TrackList tracks={tracks} />;
      case 'artists':
        return <ArtistList artists={artists} />;
    }
  }, [activeType, tracks, artists]);

  const onChangeTerm = useCallback(
    async (value: string) => {
      if (value === 'short' || value === 'medium' || value === 'long') {
        setTerm(value);
        const [topTracksResponse, topArtistsResponse] = await Promise.all([
          getUserTopTracks(accessToken, { time_range: `${value}_term` }),
          getUserTopArtists(accessToken, { time_range: `${value}_term` }),
        ]);
        if (topTracksResponse && topArtistsResponse) {
          setTracks(topTracksResponse.items);
          setArtists(topArtistsResponse.items);
        }
      }
    },
    [accessToken],
  );

  const genTabClassNames = (targetType: 'tracks' | 'artists') => {
    return `w-1/2 daisy-tab ${
      activeType === targetType ? 'daisy-tab-active' : ''
    }`;
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
