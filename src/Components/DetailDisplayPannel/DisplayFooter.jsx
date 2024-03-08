import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import StorageIcon from '@mui/icons-material/Storage';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
const drawerWidth = 260
function DisplayFooter() {
    return (
        <div>  <Box
            component="main" mt={3.3} 
            sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)`, paddingTop: 0, paddingLeft: 0.5 } }}
        >



            <Grid container sx={{ ml: { sm: `${drawerWidth}px`, width: { sm: `calc(100% - ${drawerWidth}px)`, display: "flex", justifyContent: "center", alignItems: "end" } }, backgroundColor: "inherit", }}>
                <Grid xs={12} display="flex " justifyContent="center" alignItems="center">


                    <Stack direction="row" spacing={3} className="group-2" style={{
                        display: "flex", alignItems: "center", borderRadius: "10px", height: "5vh", border: "1px solid white",
                        justifyContent: "center", backgroundColor: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)"
                    }} >
                        <button variant="contained" style={{
                            display: "flex", alignItems: "center", borderRadius: "10px", height: "5vh", border: "1px solid white",
                            justifyContent: "center", backgroundColor: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)"
                        }}>

                            Selected
                        </button>

                        <button variant="outlined" style={{
                            display: "flex", alignItems: "center", borderRadius: "10px", height: "5vh", border: "1px solid white",
                            justifyContent: "center", backgroundColor: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)"
                        }}>
                            <StorageIcon sx={{ height: "3vh" }} />
                            Archived
                        </button>
                        <button variant="outlined" style={{
                            display: "flex", alignItems: "center", borderRadius: "10px", height: "5vh", border: "1px solid white",
                            justifyContent: "center", backgroundColor: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)"
                        }}>
                            <DeleteOutlineIcon sx={{ height: "3vh", color: "red" }} />
                            <span style={{ color: "red" }}> Delete</span>
                        </button>
                        <button variant="outlined" style={{
                            display: "flex", alignItems: "center", borderRadius: "10px", height: "5vh", border: "1px solid white",
                            justifyContent: "center", backgroundColor: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)"
                        }}>

                            More
                            <ExpandMoreIcon sx={{ height: "3vh" }} />

                        </button>
                        <button style={{
                            display: "flex", alignItems: "center", borderRadius: "10px", height: "5vh", border: "1px solid white",
                            justifyContent: "start", backgroundColor: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)"
                        }}>

                            <CloseIcon sx={{ height: "3vh" }} />


                        </button>


                    </Stack>




                </Grid>




            </Grid></Box></div>
    )
}

export default DisplayFooter