import { ITopTrack } from '~/interfaces/spotify';

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
            <img
              className="object-cover ml-4 w-32 h-32"
              src={track.album.images[0].url}
              alt={track.album.name}
            />
            <div className="flex flex-col justify-center items-start ml-4">
              <div className="text-xl">{track.name}</div>
              <div className="text-gray-500">{track.album.name}</div>
              <div className="text-gray-500">{track.album.release_date}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TrackList;
