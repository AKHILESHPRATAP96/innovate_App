import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

function Footer() {
    return (
        <Grid Container spacing={1}>
            <Grid item xs={12} display="flex" alignItems="center" gap={1}><PersonAddAltIcon /><Typography component="span">Invite teammates</Typography></Grid>
            <Grid item xs={12} display="flex" alignItems="center" gap={1}><HelpOutlineOutlinedIcon /><Typography component="span">Help and first steps</Typography></Grid>
            <Grid item xs={12} gap={1} display="flex">
                <Typography component="span" fontSize="15px">7 days left on trial</Typography>
                <Button size='small' sx={{ backgroundColor: "black", padding: "5px", fontSize: "12px", borderRadius: "10px" }} variant="contained">Add biling</Button>
            </Grid>

        </Grid>
    )
}

export default Footer