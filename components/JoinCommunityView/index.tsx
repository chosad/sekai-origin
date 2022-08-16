import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

interface JoinCommunityViewProps {
    width: number,
}
const JoinCommunityView = (props: JoinCommunityViewProps) => {
  const { width } = props;
  const isDesktop = useMediaQuery({ minWidth: 769 });
  const [state, setState] = useState({
    classContainer: '',
    heightBackground: 0,
    charSize: {
      width: 0,
      height: 0,
    },
    topPositionChar: 0,
  });

  useEffect(() => {
    if (isDesktop) {
      setState({
        classContainer: 'container-join-community', heightBackground: 760, charSize: { width: 167, height: 690 }, topPositionChar: 60,
      });
    } else {
      setState({
        classContainer: 'container-join-community-mobile', heightBackground: 560, charSize: { width: 137, height: 490 }, topPositionChar: 250,
      });
    }
  }, [isDesktop]);

  return (
    <div className={state.classContainer}>
      <img src="/background4.png" alt="" style={{ width, height: state.heightBackground, position: 'absolute' }} />
      <div style={{ position: 'relative', top: 50 }}>
        <div className="container-image-text">
          <p className="text-join-community">JOIN COMMUNITY</p>
          <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                position: 'relative', left: 30, zIndex: 2, top: state.topPositionChar,
              }}
              >
                <Image src="/char1.png" alt="" width={state.charSize.width} height={state.charSize.height} />
              </div>
              <div style={{ position: 'relative', zIndex: 1, top: state.topPositionChar }}>
                <Image src="/char2.png" alt="" width={state.charSize.width} height={state.charSize.height} />
              </div>
              <div style={{ position: 'relative', left: -70, top: state.topPositionChar }}>
                <Image src="/char3.png" alt="" width={state.charSize.width} height={state.charSize.height} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: 'relative', zIndex: 4 }}>
          <Image src="/upper.png" alt="" width={width} height={32} />
        </div>
      </div>
    </div>
  );
};

export default JoinCommunityView;
