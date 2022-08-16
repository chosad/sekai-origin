import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

interface SekaiOriginViewProps {
    width: number,
}
const SekaiOriginView = (props: SekaiOriginViewProps) => {
  const { width } = props;
  const isDesktop = useMediaQuery({ minWidth: 769 });

  const [state, setState] = useState({
    widthIcon: 0,
    heightIcon: 0,
    classCountainer: '',
  });
  const { heightIcon, widthIcon, classCountainer } = state;

  useEffect(() => {
    if (isDesktop) {
      setState({ widthIcon: 167, heightIcon: 690, classCountainer: 'container-sekai-origin' });
    } else {
      setState({ widthIcon: 133, heightIcon: 552, classCountainer: 'container-sekai-origin-mobile' });
    }
  }, [isDesktop]);

  console.log('isDesktop', isDesktop, widthIcon, heightIcon);
  return (
    <div style={{ height: 795 }}>
      <img src="/background1.png" alt="background" style={{ width, height: 795 }} />
      <div className={classCountainer}>
        <div style={{ display: 'flex' }}>
          <div style={{ position: 'relative', left: 30, zIndex: 2 }}>
            <Image src="/char1.png" alt="" width={widthIcon} height={heightIcon} />
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Image src="/char2.png" alt="" width={widthIcon} height={heightIcon} />
          </div>
          <div style={{ position: 'relative', left: -70 }}>
            <Image src="/char3.png" alt="" width={widthIcon} height={heightIcon} />
          </div>
        </div>
        <div className="container-text-sekai">
          <p className="text-sekai-origin">SEKAI ORIGIN</p>
          <p className="desc-sekai-origin">
            SEKAI ORIGIN is a collection of 5,555 unique companions that
            have scattered across the ethereum blockchain.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SekaiOriginView;
