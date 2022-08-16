import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const ProjectRoadmapView = () => {
  const isDesktop = useMediaQuery({ minWidth: 769 });

  const [state, setState] = useState({
    classContainer: '',
    imageSize: 0,
  });

  useEffect(() => {
    if (isDesktop) {
      setState({ classContainer: 'container-roadmap', imageSize: 306 });
    } else {
      setState({ classContainer: 'container-roadmap-mobile', imageSize: 206 });
    }
  }, [isDesktop]);

  return (
    <div className={state.classContainer}>
      <p className="text-roadmap">PROJECT ROADMAP</p>
      <div>
        <Image src="/background3.png" alt="" width={1271} height={346} />
      </div>
      <div className="container-card-roadmap">
        <p className="text-card-roadmap">Q1</p>
        <p className="text-card-roadmap" style={{ margin: 0, position: 'relative', top: -20 }}>________</p>
        <p className="desc-card-roadmap">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default ProjectRoadmapView;
