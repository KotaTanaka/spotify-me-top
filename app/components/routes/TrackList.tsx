import dayjs from 'dayjs';

import { ITopTrack } from '~/interfaces/spotify';

import JacketImage from './JacketImage';
import NumberBudge from './NumberBudge';
import OpenExternalLink from './OpenExternalLink';

interface ITrackListProps {
  tracks: ITopTrack[];
}

const TrackList: React.FC<ITrackListProps> = (props) => {
  const { tracks } = props;

  return (
    <ul>
      {tracks.map((track, i) => {
        return (
          <li key={track.id} className="flex my-4">
            <NumberBudge number={i + 1} />
            <JacketImage
              src={track.album.images[0].url}
              alt={track.album.name}
            />
            <div className="flex flex-col flex-1 justify-center items-start ml-4">
              <div className="text-xl">{track.name}</div>
              <div className="text-gray-400">{track.album.name}</div>
              <div className="flex items-center mt-4 w-full">
                <OpenExternalLink
                  href={track.external_urls['spotify']}
                  name="Spotify"
                />
                <div className="ml-2 text-sm text-gray-400">
                  💿 {dayjs(track.album.release_date).format('YYYY年M月D日')}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TrackList;
