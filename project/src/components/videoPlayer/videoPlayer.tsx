import React from 'react';

type Props = {
  filmSrc: string;
};

const VideoPlayer = ({ filmSrc }: Props): JSX.Element => (
  <video
    src={filmSrc}
    autoPlay
    muted
    width="280"
    height="175"
  >
  </video>
);

export default VideoPlayer;
