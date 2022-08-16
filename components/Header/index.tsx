/* eslint-disable no-console */
import {
  Button, Grid, ListItemIcon, Menu, MenuItem,
} from '@mui/material';
import { ethers } from 'ethers';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Web3Modal from 'web3modal';

const Header = () => {
  const isDesktop = useMediaQuery({ minWidth: 769 });
  const [state, setState] = useState({
    address: '',
    account: [''],
    provider: { },
    chainId: 0,
  });
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleConnect = async () => {
    const providerOptions = { };
    const web3Modal = new Web3Modal({
      cacheProvider: true,
      providerOptions, // required
    });
    const providers = await web3Modal.connect();
    const library = new ethers.providers.Web3Provider(providers);
    const accounts = await library.listAccounts();
    const network = await library.getNetwork();
    const addressLength = accounts[0].length;
    const addressFormatted = `${accounts[0].slice(0, 4)}...${accounts[0].slice(addressLength - 6)}`;
    console.log('test', {
      accounts, network, length: accounts[0].length, addressFormatted,
    });
    setState({
      address: addressFormatted,
      account: accounts,
      provider: providers,
      chainId: network.chainId,
    });
  };

  const disconnect = async () => {
    setState({
      address: '',
      account: [''],
      provider: { },
      chainId: 0,
    });
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const { provider } = state;
    if (provider?.on) {
      const handleAccountsChanged = (accounts: Array<any>) => {
        console.log('accountsChanged', accounts);
        if (accounts) setState((prevState) => ({ ...prevState, account: accounts[0] }));
      };

      const handleChainChanged = (_hexChainId: number) => {
        setState((prevState) => ({ ...prevState, chainId: _hexChainId }));
      };

      const handleDisconnect = () => {
        disconnect();
      };

      provider.on('accountsChanged', handleAccountsChanged);
      provider.on('chainChanged', handleChainChanged);
      provider.on('disconnect', handleDisconnect);

      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged);
          provider.removeListener('chainChanged', handleChainChanged);
          provider.removeListener('disconnect', handleDisconnect);
        }
      };
    }
  }, [state.provider]);

  // eslint-disable-next-line react/no-unstable-nested-components
  const UIDesktop = () => (
    <>
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
      <Grid item onClick={() => (state.address === '' ? handleConnect() : disconnect())} style={{ cursor: 'pointer' }}>
        <div style={{ position: 'relative', top: 23 }}>
          <Image src="/Frame-1.png" alt="" width={175} height={33} />
          <p style={{
            position: 'relative', top: -45, left: 25, color: 'white',
          }}
          >
            {state.address === '' ? 'Connect Wallet' : state.address}
          </p>
        </div>
      </Grid>
    </>
  );

  return (
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
          {isDesktop ? <UIDesktop /> : (
            <div>
              <Button
                onClick={handleClick}
              >
                <p className="text-header">Menu</p>
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><p className="text-header-mobile">Home</p></MenuItem>
                <MenuItem onClick={handleClose}><p className="text-header-mobile">Roadmap</p></MenuItem>
                <MenuItem onClick={handleClose}><p className="text-header-mobile">Tokenomics</p></MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Image src="/discordIcon.png" alt="" width={30} height={24} />
                  </ListItemIcon>
                  <p className="text-header-mobile">Discord</p>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Image src="/twitterIcon.png" alt="" width={30} height={25} />
                  </ListItemIcon>
                  <p className="text-header-mobile">Twitter</p>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Image src="/icon1.png" alt="" width={28} height={28} />
                  </ListItemIcon>
                  <p className="text-header-mobile">Icon1</p>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Image src="/icon2.png" alt="" width={29} height={26} />
                  </ListItemIcon>
                  <p className="text-header-mobile">Icon2</p>
                </MenuItem>
                <MenuItem onClick={() => (state.address === '' ? handleConnect() : disconnect())}><p className="text-header-mobile">{state.address === '' ? 'Connect Wallet' : state.address}</p></MenuItem>
              </Menu>
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
