import Image from 'next/image';
import React from 'react';

interface EnterTheWorldViewProps {
    width: number,
}

const EnterTheWorldView = (props: EnterTheWorldViewProps) => {
  const { width } = props; return (
    <div style={{ backgroundColor: '#EFEAE9' }}>
      <div style={{ position: 'relative', top: -10 }}>
        <Image src="/upper.png" alt="" width={width} height={32} />
      </div>
      <div className="enter-world-container">
        <div>
          <Image src="/char4.png" alt="" width={292} height={966} />
        </div>
        <div style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center',
        }}
        >
          <div>
            <Image src="/sekaiLogo.png" alt="" width={206} height={65} />
          </div>
          <p className="text-enter-the-world">
            Enter the world
            of Sekai Origin
          </p>
          <p className="desc-enter-the-world">
            Cute, Mischievious, Unique! ApeFrens is a collection of first 5,555 little creatures
            that have been scattered across the Metaverse, waiting for their owners to adopt them!
            Each ApeFrens is a distinct Non-Fungible Token NFT with different hand-crafted styles
            and personalities, living on the Ethereum blockchain.
          </p>
          <div style={{ marginTop: 70 }}>
            <Image src="/Double-Down.png" alt="" width={64} height={64} />
          </div>
        </div>
        <div>
          <Image src="/char5.png" alt="" width={292} height={966} />
        </div>
      </div>
      <div style={{ position: 'relative', top: 30, zIndex: 1 }}>
        <Image src="/bottom.png" alt="" width={width} height={32} />
      </div>
    </div>
  );
};

export default EnterTheWorldView;
