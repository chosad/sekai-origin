import { Grid } from '@mui/material';
import React from 'react';
import CardSekaiTeam from '../Card/CardSekaiTeam';

const SekaiTeamView = () => (
  <div style={{ marginTop: 170 }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <p className="text-sekai-team">SEKAI TEAM</p>
      <p className="desc-sekai-team">
        Cute, Mischievious, Unique! ApeFrens is a collection of first 5,555 little
        creatures that have been scattered across the Metaverse, waiting for their
      </p>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid
        container
        style={{ width: '80%' }}
      >
        <Grid item xs={4} style={{ justifyContent: 'center', display: 'flex' }}>
          <CardSekaiTeam />
        </Grid>
        <Grid item xs={4} style={{ justifyContent: 'center', display: 'flex' }}>
          <CardSekaiTeam />
        </Grid>
        <Grid item xs={4} style={{ justifyContent: 'center', display: 'flex' }}>
          <CardSekaiTeam />
        </Grid>
        <Grid item xs={4} style={{ justifyContent: 'center', display: 'flex', marginTop: 90 }}>
          <CardSekaiTeam />
        </Grid>
        <Grid item xs={4} style={{ justifyContent: 'center', display: 'flex', marginTop: 90 }}>
          <CardSekaiTeam />
        </Grid>
        <Grid item xs={4} style={{ justifyContent: 'center', display: 'flex', marginTop: 90 }}>
          <CardSekaiTeam />
        </Grid>
      </Grid>
    </div>
  </div>
);

export default SekaiTeamView;
