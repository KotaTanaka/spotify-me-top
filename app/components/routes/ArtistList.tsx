import { ITopArtist } from '~/interfaces/spotify';

import JacketImage from './JacketImage';
import NumberBudge from './NumberBudge';
import OpenExternalLink from './OpenExternalLink';

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
            <NumberBudge number={i + 1} />
            <JacketImage src={artist.images[0].url} alt={artist.name} />
            <div className="flex flex-col justify-center items-start ml-4">
              <div className="mb-4 text-xl">{artist.name}</div>
              <OpenExternalLink
                href={artist.external_urls['spotify']}
                name="Spotify"
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ArtistList;
