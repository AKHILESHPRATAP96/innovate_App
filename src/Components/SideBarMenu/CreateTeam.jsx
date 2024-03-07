import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import CampaignIcon from '@mui/icons-material/Campaign';

import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

function CreateTeam() {

    function handleClick() {
        console.log("Coming ")
    }

    return (
        <Box>
            <ListItemButton sx={{ padding: 0 }}>
                <ListItem >
                    <ListItemIcon sx={{ minWidth: "33px" }} >
                        <BrushIcon />
                    </ListItemIcon>
                    <ListItemText primary="Design team" />
                </ListItem>
            </ListItemButton>
            <ListItemButton sx={{ padding: 0 }}>
                <ListItem>
                    <ListItemIcon sx={{ minWidth: "33px" }} >
                        <CampaignIcon />
                    </ListItemIcon>
                    <ListItemText primary="Marketing team" />
                </ListItem>
            </ListItemButton>
            <ListItemButton sx={{ padding: 0 }}>
                <ListItem>
                    <ListItemIcon sx={{ minWidth: "33px" }} >
                        <CodeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Development team" />
                </ListItem>
            </ListItemButton>
            <ListItemButton sx={{ padding: 0 }} onClick={handleClick}>
                <ListItem>
                    <ListItemIcon sx={{ minWidth: "33px" }} >
                        <AddBoxOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Create team" />
                </ListItem>
            </ListItemButton>
        </Box>
    );
}

export default CreateTeam