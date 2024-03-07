import { Details } from "../../constants/DetailDisplayPannelData"
import { Box, Checkbox, Chip, Container, Grid, Hidden, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react'

const drawerWidth = 250;
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function DisplayDetails({ searchQuery }) {
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

                            <Grid item xs={2} border="1px solid #eae9e9"><Typography display="flex" alignItems="center" color="GrayText">  <Checkbox {...label} /><img className="small-image" style={{ borderRadius: "10px", height: "4vh" }} src={data.BrandImage} />{data.Brand}</Typography></Grid>
                            <Grid overflow="hidden" item xs={2} border="1px solid #eae9e9"><Typography sx={{ whiteSpace: "nowrap" }} textAlign="center" color="GrayText">{data.Description}</Typography></Grid>
                            <Grid item xs={2} border="1px solid #eae9e9"><Typography textAlign="center" color="GrayText">{data.Members.map(pic => <img className="small-image" style={{ borderRadius: "10px", height: "3vh" }} src={pic} />)}</Typography></Grid>
                            <Grid item xs={2} border="1px solid #eae9e9"><Typography display="flex" textAlign="center" color="GrayText"> {data.Categories.map((text, index) => <Chip size="small" label={text} color={index % 2 ? "secondary" : "info"} />)}</Typography></Grid>
                            <Grid item xs={2} border="1px solid #eae9e9"><Typography sx={{ whiteSpace: "nowrap", overflow: "hidden" }} textAlign="center" color="GrayText">{data.Tags}</Typography></Grid>
                            <Grid item xs={2} border="1px solid #eae9e9"><Typography textAlign="center" color="GrayText"><Chip size="small" label={data.NextMeeting} color="success" /></Typography></Grid>
                        </Grid>)}

                </Grid>
               

            </Box>


      
    )
}

export default DisplayDetails