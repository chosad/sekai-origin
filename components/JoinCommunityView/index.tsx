import Image from 'next/image';
import React from 'react';

interface JoinCommunityViewProps {
    width: number,
}
const JoinCommunityView = (props: JoinCommunityViewProps) => {
  const { width } = props;
  return (
    <div style={{ height: 770 }}>
      <img src="/background4.png" alt="" style={{ width, height: 760, position: 'absolute' }} />
      <div style={{ position: 'relative', top: 50 }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', height: 700,
        }}
        >
          <p className="text-join-community">JOIN COMMUNITY</p>
          <div>
            <div style={{ display: 'flex' }}>
              <div style={{
                position: 'relative', left: 30, zIndex: 2, top: 60,
              }}
              >
                <Image src="/char1.png" alt="" width={167} height={690} />
              </div>
              <div style={{ position: 'relative', zIndex: 1, top: 60 }}>
                <Image src="/char2.png" alt="" width={167} height={690} />
              </div>
              <div style={{ position: 'relative', left: -70, top: 60 }}>
                <Image src="/char3.png" alt="" width={167} height={690} />
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
