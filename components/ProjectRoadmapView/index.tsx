import Image from 'next/image';
import React from 'react';

const ProjectRoadmapView = () => (
  <div style={{
    display: 'flex', flexDirection: 'column', alignItems: 'center', height: 1200,
  }}
  >
    <p className="text-roadmap">PROJECT ROADMAP</p>
    <div>
      <Image src="/background3.png" alt="" width={1271} height={346} />
    </div>
    <div style={{
      backgroundColor: '#4A3D3A',
      opacity: 0.8,
      borderRadius: 10,
      padding: 20,
      width: 732,
      height: 409,
      color: 'white',
      position: 'relative',
      top: -250,
      left: -150,
    }}
    >
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

export default ProjectRoadmapView;
