import { Grid } from '@mui/material';
import Image from 'next/image';

const Header = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Grid
      container
      spacing={5}
      style={{
        width: '90%', padding: 20, paddingLeft: 40, alignItems: 'center', position: 'absolute', zIndex: 1,
      }}
    >
      <Grid item xs={4} style={{ cursor: 'pointer' }}>
        <Image src="/sekaiLogo.png" alt="" width={133} height={42} />
      </Grid>
      <Grid container item xs={8} spacing={2} style={{ alignItems: 'center', justifyContent: 'end' }}>
        <Grid item onClick={() => console.log('Home')} style={{ cursor: 'pointer' }}>
          <p className="text-header">Home</p>
        </Grid>
        <Grid item onClick={() => console.log('Roadmap')} style={{ cursor: 'pointer' }}>
          <p className="text-header">Roadmap</p>
        </Grid>
        <Grid item onClick={() => console.log('Tokenomics')} style={{ cursor: 'pointer' }}>
          <p className="text-header">Tokenomics</p>
        </Grid>
        <Grid item>
          <p style={{ color: 'white' }}>|</p>
        </Grid>
        <Grid item onClick={() => console.log('Discord')} style={{ cursor: 'pointer' }}>
          <Image src="/discordIcon.png" alt="" width={30} height={24} />
        </Grid>
        <Grid item onClick={() => console.log('Twiter')} style={{ cursor: 'pointer' }}>
          <Image src="/twitterIcon.png" alt="" width={30} height={25} />
        </Grid>
        <Grid item onClick={() => console.log('UnknownIcon1')} style={{ cursor: 'pointer' }}>
          <Image src="/icon1.png" alt="" width={28} height={28} />
        </Grid>
        <Grid item onClick={() => console.log('UnknownIcon2')} style={{ cursor: 'pointer' }}>
          <Image src="/icon2.png" alt="" width={29} height={26} />
        </Grid>
        <Grid item onClick={() => console.log('ConnectWallet')} style={{ cursor: 'pointer' }}>
          <div style={{ position: 'relative', top: 23 }}>
            <Image src="/Frame-1.png" alt="" width={175} height={33} />
            <p style={{
              position: 'relative', top: -45, left: 25, color: 'white',
            }}
            >
              Connect Wallet
            </p>
          </div>
        </Grid>
      </Grid>
    </Grid>
  </div>
);

export default Header;
