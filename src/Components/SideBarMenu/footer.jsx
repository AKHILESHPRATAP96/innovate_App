import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

function Footer() {
    return (
        <Grid Container spacing={1} paddingLeft={2} paddingTop={1} >
            <Grid item xs={12} display="flex" alignItems="center" gap={1}><PersonAddAltIcon /><Typography fontSize="1rem" variant='body1' component="span">Invite teammates</Typography></Grid>
            <Grid item xs={12} my={1} display="flex" alignItems="center" gap={1}><HelpOutlineOutlinedIcon /><Typography fontSize="1rem" ariant='body1' component="span">Help and first steps</Typography></Grid>
            <Grid item xs={12} display="flex">
                <Typography sx={{ backgroundColor: "rgb(245, 247, 247,0.2)", boxShadow: "1px 1px rgb(0,0,1,0.1)", borderRadius: "20%" }} fontSize="1rem" component="span" variant='body1'>7 days left on trial</Typography>
                <Button size='small' sx={{ backgroundColor: "black", padding: "5px", fontSize: "12px", borderRadius: "5px", height: "4vh" }} variant="contained">Add biling</Button>
            </Grid>

        </Grid>
    )
}

export default Footer