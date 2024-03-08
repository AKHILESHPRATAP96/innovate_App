import { Box, Button, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import CampaignIcon from '@mui/icons-material/Campaign';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';


function CreateTeam(props) {



    return (
        <Box>
            <ListItemButton sx={{ padding: 0 }} onClick={props.handleClick}>
                <ListItem >
                    <ListItemIcon sx={{ minWidth: "33px" }} >
                        <BrushIcon sx={{ height: "3vh" }} />
                    </ListItemIcon>
                    <Typography variant="body2" fontWeight={600}>Design team</Typography>
                </ListItem>
                <ListItemIcon sx={{ backgroundColor: "rgb(245, 247, 247,0.2)", boxShadow: "1px 1px rgb(0,0,1,0.1)", borderRadius: "20%", justifyContent: "center", alignItems: "center" }}><KeyboardCommandKeyIcon sx={{ color: "grey", height: "2.5vh" }} /><Typography fontWeight={700}>+1</Typography></ListItemIcon>

            </ListItemButton>


            <ListItemButton sx={{ padding: 0, }} onClick={props.handleClick}>
                <ListItem>
                    <ListItemIcon sx={{ minWidth: "33px" }} >
                        <CampaignIcon sx={{ height: "3vh" }} />
                    </ListItemIcon>
                    <Typography fontWeight={600} variant="body2">Marketing team</Typography>
                </ListItem>
                <ListItemIcon sx={{ backgroundColor: "rgb(245, 247, 247,0.2)", boxShadow: "1px 1px rgb(0,0,1,0.1)", borderRadius: "20%", justifyContent: "center", alignItems: "center" }}><KeyboardCommandKeyIcon sx={{ color: "grey", height: "2.5vh" }} /><Typography fontWeight={700}>+2</Typography></ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={{ padding: 0 }} onClick={props.handleClick}>
                <ListItem>
                    <ListItemIcon sx={{ minWidth: "33px" }} >
                        <CodeIcon sx={{ height: "3vh" }} />
                    </ListItemIcon>
                    <Typography fontWeight={600} variant="body2">Development team</Typography>
                </ListItem>
                <ListItemIcon sx={{ backgroundColor: "rgb(245, 247, 247,0.2)", boxShadow: "1px 1px rgb(0,0,1,0.1)", borderRadius: "20%", justifyContent: "center", alignItems: "center" }}><KeyboardCommandKeyIcon sx={{ color: "grey", height: "2.5vh" }} /><Typography fontWeight={700}>+3</Typography></ListItemIcon>
            </ListItemButton>

            <ListItemButton sx={{ padding: 0 }}  >
                <ListItem>
                    <ListItemIcon sx={{ minWidth: "33px" }} >
                        <AddBoxOutlinedIcon sx={{ height: "3vh" }} />
                    </ListItemIcon>
                    <Typography variant="body2">Create team</Typography>
                </ListItem>
            </ListItemButton>
        </Box>
    );
}

export default CreateTeam