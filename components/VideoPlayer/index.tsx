import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

interface VideoPlayerProps {
    width: number,
}
const VideoPlayer = (props: VideoPlayerProps) => {
  const { width } = props;
  const isDesktop = useMediaQuery({ minWidth: 769 });

  const [state, setState] = useState({
    classContainer: '',
    heightImage: 0,
    iconPlaySize: 0,
  });

  useEffect(() => {
    if (isDesktop) {
      setState({ classContainer: 'container-video', iconPlaySize: 90, heightImage: 730 });
    } else {
      setState({ classContainer: 'container-video-mobile', iconPlaySize: 70, heightImage: 400 });
    }
  }, [isDesktop]);

  return (
    <div className={state.classContainer}>
      <Image src="/video.png" alt="" width={width} height={state.heightImage} />
      <div className="icon-play">
        <Image src="/Play.png" alt="" width={state.iconPlaySize} height={state.iconPlaySize} />
      </div>
    </div>
  );
};

export default VideoPlayer;
