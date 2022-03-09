const generateRandom0to9 = () => {
  return Number(Math.random().toString(10).slice(-1));
};

export const getRandomTrackName = () => {
  return [
    'Colorful',
    'Hello',
    'Rock',
    'Smile',
    'Thunder',
    'Blue',
    'Water',
    'Birthday',
    'Wave',
    'Butterfly',
  ][generateRandom0to9()];
};

export const getRandomArtistName = () => {
  return [
    'HEAVEN',
    'STAMP',
    'SLIME',
    'JOCKEY',
    'MONKEY',
    'CLOCK',
    'SPIDER',
    'CONTRIBUTION',
    'TEXTURE',
    'CASTLE',
  ][generateRandom0to9()];
};

export const getRandomAlbumName = () => {
  return [
    'factory',
    'sleep',
    'psychology',
    'power',
    'conversation',
    'lunch',
    'energy',
    'touch',
    'policeman',
    'approach',
  ][generateRandom0to9()];
};
