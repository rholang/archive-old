import { ReactVideoPlay, VideoSourceType } from 'react-video-play';
import React from 'react';
import styled, { css } from 'styled-components';

export default () => {
  const src = [
    {
      name: '1080p',
      source: [
        {
          source: 'https://rholang.github.io/#/home/rchain-video.mp4',
          type: VideoSourceType.video_mp4,
        },
      ],
    },
  ];

  const Div = styled.div`
    height: 100%;
  `;
  return (
    <Div>
      <ReactVideoPlay sources={src} enableSlider={true} autoplay={true} />
    </Div>
  );
};
