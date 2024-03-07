import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import List from '@mui/material/List';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid, Stack, alpha, styled } from '@mui/material';
import CreateTeam from './CreateTeam';
import AppIcon from "../../assets/Appicon/SideBarIcon.png"

import FolderItem from './folders';
import Footer from './footer';
import InputBase from '@mui/material/InputBase';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NavButtons from '../DetailDisplayPannel/SelectNavButton';





const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  color: "black",
  border: "1px solid grey",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const drawerWidth = 240;


export default function SideBarMenu(props) {

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [navStatus, setNavstatus] = React.useState("")

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div  >


      <Grid container  >
        <Grid item xs={8} display="flex" justifyContent="center" alignItems="end" gap={1} >
          <img src={AppIcon} style={{
            borderRadius: "30%", maxWidth: '50vw',
            height: '7vh'
          }} />
          <Typography fontWeight={400}><Typography color="gray">INC</Typography>InnovateHub</Typography>
        </Grid>
      </Grid>
      <Divider />
      <List>
        <CreateTeam />
      </List>
      <Divider />
      <FolderItem NavStatus={setNavstatus} />
      <Footer />

    </div>
  );


  return (
    <Box >
      <CssBaseline />
      <AppBar position="relative"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "inherit"
        }}>
        <Toolbar style={{ minHeight: '0px' }} >
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="open drawer"
            sx={{ mr: 2, display: { sm: 'none' } }}
            onClick={handleDrawerToggle}

          >
            <MenuIcon />
          </IconButton>
        
            <Typography

              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: "black" }}
            >
              {navStatus}
            </Typography>
       
          <Stack spacing={2} direction="row" alignItems="center">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>

              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <QuestionAnswerOutlinedIcon color="action" />
            <SettingsOutlinedIcon color='action' />
          </Stack>

        </Toolbar>
        <Divider sx={{ marginBottom: 1 }} />
        <NavButtons />
        <Divider />
      </AppBar >





      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >

        <Drawer

          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >

          {drawer}
          button
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
          button
        </Drawer>



      </Box>
      {/* Main component */}





    </Box>
  );
}
