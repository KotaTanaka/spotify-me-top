import { ITopTrack } from '~/interfaces/spotify';

import JacketImage from './JacketImage';

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
            <div className="flex justify-center items-center w-6 text-xl">
              {i + 1}
            </div>
            <JacketImage
              src={track.album.images[0].url}
              alt={track.album.name}
            />
            <div className="flex flex-col flex-1 justify-center items-start ml-4">
              <div className="text-xl">{track.name}</div>
              <div className="text-gray-400">{track.album.name}</div>
              <div className="flex items-center mt-4 w-full">
                <a
                  className="daisy-btn daisy-btn-sm daisy-btn-outline daisy-btn-secondary"
                  href={track.external_urls['spotify']}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Spotify
                </a>
                <div className="ml-2 text-gray-400">
                  {track.album.release_date}
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
