import { ITopArtist } from '~/interfaces/spotify';

import JacketImage from './JacketImage';

interface IArtistListProps {
  artists: ITopArtist[];
}

const ArtistList: React.FC<IArtistListProps> = (props) => {
  const { artists } = props;

  return (
    <ul>
      {artists.map((artist, i) => {
        return (
          <li key={artist.id} className="flex my-4">
            <div className="flex justify-center items-center w-6 text-xl">
              {i + 1}
            </div>
            <JacketImage src={artist.images[0].url} alt={artist.name} />
            <div className="flex flex-col justify-center items-start ml-4">
              <div className="text-xl">{artist.name}</div>
              <a
                className="mt-4 daisy-btn daisy-btn-sm daisy-btn-outline daisy-btn-secondary"
                href={artist.external_urls['spotify']}
                target="_blank"
                rel="noreferrer"
              >
                Open Spotify
              </a>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ArtistList;
