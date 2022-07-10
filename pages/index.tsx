import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import EnterTheWorldView from '../components/EnterTheWorldView';
import FaqView from '../components/FaqView';
import Header from '../components/Header';
import JoinCommunityView from '../components/JoinCommunityView';
import ProjectRoadmapView from '../components/ProjectRoadmapView';
import ScrollImage from '../components/ScrollImage';
import SekaiOriginView from '../components/SekaiOriginView';
import SekaiTeamView from '../components/SekaiTeamView';
import TokenDistributionView from '../components/TokenDistributionView';
import VideoPlayer from '../components/VideoPlayer';

const Home: NextPage = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
      console.log(window.innerWidth);
    });
  }, []);

  return (
    <div>
      <Header />
      <SekaiOriginView width={width} />
      <EnterTheWorldView width={width} />
      <VideoPlayer width={width} />

      <div className="background-image-default">
        <div style={{ position: 'relative', top: -10, marginBottom: 80 }}>
          <Image src="/upper.png" alt="" width={width} height={32} />
        </div>
        <ScrollImage width={width} />
        <SekaiTeamView />
        <FaqView />
        <ProjectRoadmapView />
        <TokenDistributionView width={width} />
        <div style={{
          position: 'relative', top: 30, zIndex: 1, marginTop: 50,
        }}
        >
          <Image src="/bottom.png" alt="" width={width} height={32} />
        </div>
      </div>

      <JoinCommunityView width={width} />
    </div>
  );
};

export default Home;
