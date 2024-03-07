import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function FolderItem(props) {
    return (
        <div style={{ boxShadow: "0px opx" }}>
            <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography fontWeight={600} variant="body2">Folder</Typography>
                <ListItemIcon sx={{ display: "flex", justifyContent: "end" }}  >
                    <AddIcon />
                </ListItemIcon>
            </ListItem>


            <List>
                {['Products', 'Sales', 'Design', 'Office', 'Legal'].map((text, index) => (
                    <Accordion key={text} disablePadding  >
                        <AccordionSummary
                            style={{ boxShadow: "0px 0px" ,paddingTop:0}}
                            expandIcon={<ArrowDropDownIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                            onClick={() => props.NavStatus(text)}
                        >
                            <ListItem sx={{ padding: 0 }} >
                                <ListItemButton sx={{ padding: 0 }}>
                                    <ListItemIcon>
                                        <FolderOpenIcon />
                                    </ListItemIcon>
                                    <Typography fontWeight={600} variant="body2">{text}</Typography>
                                </ListItemButton>
                            </ListItem>
                        </AccordionSummary>
                        <AccordionDetails>
                            {['Roadmap', 'Feedback', 'Performance', 'team', 'Analytics'].map((text, index) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton>

                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </List>




        </div>
    )
}

export default FolderItem