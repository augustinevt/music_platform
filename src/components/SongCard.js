import React from 'react';

const SongCard = ({title, songId, select}) => {
  return <div onClick={() => select(songId)} > {title} </div>;
}

export default SongCard;
