import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import "../../App.css"

import List from '@mui/material/List';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid, Stack, alpha, styled, useMediaQuery, useTheme } from '@mui/material';
import CreateTeam from '../../Components/SideBarMenu/CreateTeam';
import AppIcon from "../../assets/Appicon/SideBarIcon.png"

import FolderItem from '../../Components/SideBarMenu/folders';
import Footer from '../../Components/SideBarMenu/footer';
import InputBase from '@mui/material/InputBase';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SearchIcon from '@mui/icons-material/Search';


import FaceLogo from "../../assets/Appicon/FaceLogo.png"
import NavButtons from '../../Components/DetailDisplayPannel/SelectNavButton';
import DisplayDetails from '../../Components/DetailDisplayPannel/DisplayDetails';
import DisplayFooter from '../../Components/DetailDisplayPannel/DisplayFooter';

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

const drawerWidth = 250;


export default function InovateHubApp() {

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const [navStatus, setNavstatus] = React.useState("")
    const [searchQuery, setSearchQuery] = React.useState('');

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

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
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const drawer = (
        <div style={{ border: "1px solid 1px rgb(228, 237, 230)", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)", borderRadius: "4%" }}>


            <Grid container display="flex" justifyContent="space-around" alignItems="center" gap={1} >
                <Box display="flex" alignItems="center" gap={1}>
                    <img className='.small-image' src={AppIcon} style={{
                        borderRadius: "30%",
                        height: isSmallScreen ? '3vh' : "5vh"
                    }} />
                    <Typography fontWeight={400} ><Typography fontSize="0.8rem" textAlign="start" color="gray">INC</Typography>InnovateHub</Typography>
                </Box>
                <img className='  .small-image' src={FaceLogo} style={{
                    borderRadius: "30%",
                    height: isSmallScreen ? '3vh' : "5vh"
                }} />

            </Grid>
            <Divider />
            <List>
                <CreateTeam />
            </List>
            <Divider />
            <FolderItem NavStatus={setNavstatus} />
            <Footer />

        </div >
    );


    return (
        <Box style={{ border: "1px solid 1px rgb(228, 237, 230)", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)", borderRadius: "4%" }} >
            <CssBaseline />
            <AppBar position="relative"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: "inherit",
                    boxShadow: "0px 0px"
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
                        fontWeight={700}
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
                                onChange={handleSearchChange}
                                sx={{ height: "4vh", boxShadow: "2px 2px rgb(0,0,1,0.1)" }}
                            />
                        </Search>
                        <QuestionAnswerOutlinedIcon sx={{ boxShadow: "2px 2px rgb(0,0,1,0.1)", height: "3vh", borderRadius: "6px" }} color="action" />
                        <SettingsOutlinedIcon sx={{ boxShadow: "2px 2px rgb(0,0,1,0.1)", height: "3vh", borderRadius: "6px" }} color='action' />
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

                </Drawer>



            </Box>
            {/* Main component */}

            <DisplayDetails searchQuery={searchQuery} />
            <DisplayFooter />



        </Box>
    );
}
