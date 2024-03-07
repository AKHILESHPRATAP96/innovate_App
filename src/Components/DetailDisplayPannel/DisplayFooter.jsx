import React, { useState } from 'react';
import { Button, IconButton, Select, MenuItem, Stack, ListItem, Divider, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ImportExportIcon from '@mui/icons-material/ImportExport';

const drawerWidth = 250
function DisplayFooter() {
    return (


        <Box

            sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)`, paddingTop: 0, paddingLeft: 0.5 } }}
        >
            <Stack direction="row" spacing={3} className="group-2" style={{ display: "flex" }}>
                <button startIcon={<AddIcon />} variant="contained" style={{
                    display: "flex", alignItems: "center", borderRadius: "10px", height: "5vh", border: "1px solid white",
                    justifyContent: "center", backgroundColor: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)"
                }}>
                    <AddBoxOutlinedIcon sx={{ height: "3vh" }} />
                    selected
                </button>

                <button endIcon={<ExpandMoreIcon />} variant="outlined" style={{
                    display: "flex", alignItems: "center", borderRadius: "10px", height: "5vh", border: "1px solid white",
                    justifyContent: "center", backgroundColor: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)"
                }}>
                    <ImportExportIcon sx={{ height: "3vh" }} />
                    Archived
                </button>


                <button startIcon={<AddIcon />} variant="contained" style={{
                    display: "flex", alignItems: "center", borderRadius: "10px", height: "5vh", border: "1px solid white",
                    justifyContent: "center", backgroundColor: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)"
                }}>
                    <AddBoxOutlinedIcon sx={{ height: "3vh" }} />
                    Delete
                </button>

                <button endIcon={<ExpandMoreIcon />} variant="outlined" style={{
                    display: "flex", alignItems: "center", borderRadius: "10px", height: "5vh", border: "1px solid white",
                    justifyContent: "center", backgroundColor: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)"
                }}>
                    <ImportExportIcon sx={{ height: "3vh" }} />
                    more
                </button>
            </Stack>
        </Box>

    )
}

export default DisplayFooter