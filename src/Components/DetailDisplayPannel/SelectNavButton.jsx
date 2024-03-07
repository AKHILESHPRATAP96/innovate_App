import React, { useState } from 'react';
import { Button, IconButton, Select, MenuItem, Stack, ListItem, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import brandIcon from "../../assets/Appicon/brandIcon.png"
import SwapVertIcon from '@mui/icons-material/SwapVert';
import TuneIcon from '@mui/icons-material/Tune';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ImportExportIcon from '@mui/icons-material/ImportExport';


const options = [
  { value: 'All brand', label: 'Brand', icon: <img src={brandIcon} height="20vh" /> },
  { value: 'desk', label: 'Desk', },
  { value: 'tags', label: 'Tags' },
  { value: 'sort', label: 'Sort', icon: <SwapVertIcon sx={{ height: "3vh" }} /> },
  { value: 'filter', label: 'Filter', icon: <TuneIcon sx={{ height: "3vh" }} /> },
];

const NavButtons = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="button-groups" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: 15 }}>

      <Stack direction="row" spacing={1} className="group-1" >
        {options.map((option) => (
          <button style={{
            display: "flex", alignItems: "center", borderRadius: "10px", height: "5vh", border: "1px solid white",
            justifyContent: "center", backgroundColor: "#FFFFFF", boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)"
          }}
          >

            <IconButton sx={{ alignItems: "center" }} key={option.value} onClick={() => setSelectedValue(option.value)}>
              {option.icon}
            </IconButton>
            {option.value}
            <ExpandMoreIcon />
          </button>
        ))}
      </Stack>
      <Stack direction="row" spacing={3} className="group-2" style={{ display: "flex" }}>
        <button startIcon={<AddIcon />} variant="contained" style={{
          display: "flex", alignItems: "center", borderRadius: "10px", height: "5vh", border: "1px solid white",
          justifyContent: "center", backgroundColor: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)"
        }}>
          <AddBoxOutlinedIcon sx={{ height: "3vh" }} />
          Meeting
        </button>

        <button endIcon={<ExpandMoreIcon />} variant="outlined" style={{
          display: "flex", alignItems: "center", borderRadius: "10px", height: "5vh", border: "1px solid white",
          justifyContent: "center", backgroundColor: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)"
        }}>
          <ImportExportIcon sx={{ height: "3vh" }} />
          Import/Export
        </button>
      </Stack>


    </div>
  );
};


export default NavButtons