import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import CardSekaiTeam from '../Card/CardSekaiTeam';

const SekaiTeamView = () => {
  const isDesktop = useMediaQuery({ minWidth: 769 });

  const [state, setState] = useState({
    classContainer: '',
    spacing: 0,
    xs: 0,
  });

  useEffect(() => {
    if (isDesktop) {
      setState({ classContainer: 'container-sekai-team', spacing: 6, xs: 4 });
    } else {
      setState({ classContainer: 'container-sekai-team-mobile', spacing: 5, xs: 6 });
    }
  }, [isDesktop]);

  return (
    <div style={{ marginTop: 170 }}>
      <div className={state.classContainer}>
        <p className="text-sekai-team">SEKAI TEAM</p>
        <p className="desc-sekai-team">
          Cute, Mischievious, Unique! ApeFrens is a collection of first 5,555 little
          creatures that have been scattered across the Metaverse, waiting for their
        </p>
      </div>
      <div className="display-flex justify-content-center align-items-center">
        <Grid
          container
          spacing={state.spacing}
          style={{ width: '80%' }}
        >
          {Array(6).fill('').map((x) => (
            <Grid key={x} item xs={state.xs} className="display-flex justify-content-center">
              <CardSekaiTeam />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default SekaiTeamView;
