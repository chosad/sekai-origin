import Image from 'next/image';

interface SekaiOriginViewProps {
    width: number,
}
const SekaiOriginView = (props: SekaiOriginViewProps) => {
  const { width } = props;
  return (
    <div style={{ height: 795 }}>
      <img src="/background1.png" alt="background" style={{ width, height: 795 }} />
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', top: -690, height: 690,
      }}
      >
        <div style={{ display: 'flex' }}>
          <div style={{ position: 'relative', left: 30, zIndex: 2 }}>
            <Image src="/char1.png" alt="" width={167} height={690} />
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Image src="/char2.png" alt="" width={167} height={690} />
          </div>
          <div style={{ position: 'relative', left: -70 }}>
            <Image src="/char3.png" alt="" width={167} height={690} />
          </div>
        </div>
        <div style={{
          position: 'relative', top: -550, zIndex: 3, textAlign: 'center',
        }}
        >
          <p className="text-sekai-origin">SEKAI ORIGIN</p>
          <p className="desc-sekai-origin" style={{ width: 600, margin: 'auto' }}>
            SEKAI ORIGIN is a collection of 5,555 unique companions that
            have scattered across the ethereum blockchain.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SekaiOriginView;
