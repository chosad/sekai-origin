import React from 'react';

interface ScrollImageProps {
    width: number,
}
const ScrollImage = (props: ScrollImageProps) => {
  const { width } = props;
  return (
    <div className="wrapper" style={{ width }}>
      <div className="scrolls">
        <img src="/image-scroll-1.png" alt="" style={{ margin: '0px 10px', width: 387, height: 387 }} />
        <img src="/image-scroll-2.png" alt="" style={{ margin: '0px 10px', width: 387, height: 387 }} />
        <img src="/image-scroll-1.png" alt="" style={{ margin: '0px 10px', width: 387, height: 387 }} />
        <img src="/image-scroll-2.png" alt="" style={{ margin: '0px 10px', width: 387, height: 387 }} />
        <img src="/image-scroll-1.png" alt="" style={{ margin: '0px 10px', width: 387, height: 387 }} />
        <img src="/image-scroll-2.png" alt="" style={{ margin: '0px 10px', width: 387, height: 387 }} />
        <img src="/image-scroll-1.png" alt="" style={{ margin: '0px 10px', width: 387, height: 387 }} />
        <img src="/image-scroll-2.png" alt="" style={{ margin: '0px 10px', width: 387, height: 387 }} />
      </div>
    </div>
  );
};

export default ScrollImage;
