import { Details } from "../../constants/DetailDisplayPannelData"
import { Box, Checkbox, Chip, Container, Grid, Hidden, Typography, useMediaQuery, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react'

const drawerWidth = 250;
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function DisplayDetails({ searchQuery }) {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const filteredDetails = Details.filter(data =>
        data.Brand.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (

        <Box
            component="main"
            sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)`, paddingTop: 0, paddingLeft: 0.5 } }}
        >

            <Grid container sx={{ ml: { sm: `${drawerWidth}px` }, backgroundColor: "inherit", }}>
                <Grid xs={12} display="flex">

                    <Grid item xs={2} border="1px solid #eae9e9" display="flex" justifyContent="space-between" ><Typography textAlign="center" color="GrayText">Brand</Typography><AddIcon color="action" /></Grid>
                    <Grid item xs={2} border="1px solid #eae9e9"><Typography textAlign="center" color="GrayText">Description</Typography></Grid>
                    <Grid item xs={2} border="1px solid #eae9e9"><Typography textAlign="center" color="GrayText">Members</Typography></Grid>
                    <Grid item xs={2} border="1px solid #eae9e9"><Typography textAlign="center" color="GrayText">Categories</Typography></Grid>
                    <Grid item xs={2} border="1px solid #eae9e9"><Typography textAlign="center" color="GrayText">Tags</Typography></Grid>
                    <Grid item xs={2} border="1px solid #eae9e9"><Typography textAlign="center" color="GrayText">NextMeeting</Typography></Grid>
                </Grid>
                {filteredDetails?.map(data =>
                    <Grid xs={12} display="flex">

                        <Grid item xs={2} display="flex" gap={0.5} alignItems="center" border="1px solid #eae9e9">
                            <Grid mr={0.5} item xs={3}display="flex" gap={1}><Checkbox {...label} /></Grid>
                            <Grid item xs={9} display="flex" gap={.5} justifyContent="start" alignItems="center">  <img className="small-image" style={{ borderRadius: "10px", height: isSmallScreen ? "3vh" : "4vh" }} src={data.BrandImage} />
                                {data.Brand}</Grid>

                        </Grid>
                        <Grid overflow="hidden" item xs={2} border="1px solid #eae9e9"><Typography sx={{ whiteSpace: "nowrap" }} textAlign="start" color="GrayText">{data.Description}</Typography></Grid>
                        <Grid item xs={2} border="1px solid #eae9e9"><Typography textAlign="center" color="GrayText">{data.Members.map(pic => <img className="small-image" style={{ borderRadius: "10px", height: isSmallScreen ? "2vh" : "3vh" }} src={pic} />)}</Typography></Grid>
                        <Grid item xs={2} border="1px solid #eae9e9">{data.Categories.map((text, index) => <Chip size="small" label={text} color={index % 2 ? "secondary" : "info"} />)}</Grid>
                        <Grid item xs={2} border="1px solid #eae9e9"><Typography sx={{ whiteSpace: "nowrap", overflow: "hidden" }} textAlign="center" color="GrayText">{data.Tags}</Typography></Grid>
                        <Grid item xs={2} border="1px solid #eae9e9"><Chip size="small" label={data.NextMeeting} color="success" /></Grid>
                    </Grid>)}

            </Grid>


        </Box>



    )
}

export default DisplayDetails