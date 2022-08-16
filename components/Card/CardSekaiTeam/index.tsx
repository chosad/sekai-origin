import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const CardSekaiTeam = () => {
  const isDesktop = useMediaQuery({ minWidth: 769 });

  const [state, setState] = useState({
    classContainer: '',
    imageSize: 0,
  });

  useEffect(() => {
    if (isDesktop) {
      setState({ classContainer: 'container-card-sekai-team', imageSize: 306 });
    } else {
      setState({ classContainer: 'container-card-sekai-team-mobile', imageSize: 206 });
    }
  }, [isDesktop]);

  return (
    <div className={state.classContainer}>
      <Image src="/sekaiTeam.png" alt="" width={state.imageSize} height={state.imageSize} />
      <div style={{ margin: '0px 30px' }}>
        <p className="text-card-sekai-team">Blee</p>
        <p className="desc-card-sekai-team">Director of SEKAI ORIGIN</p>
      </div>
    </div>
  );
};

export default CardSekaiTeam;
