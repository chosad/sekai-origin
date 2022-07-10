import Image from 'next/image';

const CardSekaiTeam = () => (
  <div style={{
    width: 306, height: 415, backgroundColor: '#D9D9D9', borderRadius: 10,
  }}
  >
    <Image src="/sekaiTeam.png" alt="" width={306} height={306} />
    <div style={{ margin: '0px 30px' }}>
      <p className="text-card-sekai-team">Blee</p>
      <p className="desc-card-sekai-team">Director of SEKAI ORIGIN</p>
    </div>
  </div>
);

export default CardSekaiTeam;
