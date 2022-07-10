import Image from 'next/image';
import React from 'react';

interface VideoPlayerProps {
    width: number,
}
const VideoPlayer = (props: VideoPlayerProps) => {
  const { width } = props;
  return (
    <div style={{ height: 730 }}>
      <Image src="/video.png" alt="" width={width} height={730} />
      <div style={{
        position: 'relative', top: -400, left: width / 2 - 40, width: 90,
      }}
      >
        <Image src="/Play.png" alt="" width={90} height={90} />
      </div>
    </div>
  );
};

export default VideoPlayer;
