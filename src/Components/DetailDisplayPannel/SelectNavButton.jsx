import React, { useState } from 'react';
import { Button, IconButton, Select, MenuItem, Stack, ListItem, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import BrandIcon from '@mui/icons-material/BrandingShapes'; // Import required icons
// import DeskIcon from '@mui/icons-material/Desktop';
import TagIcon from '@mui/icons-material/Tag';
import SortIcon from '@mui/icons-material/Sort';
import FilterListIcon from '@mui/icons-material/FilterList';

const options = [
  { value: 'All brand', label: 'Brand', icon: <ExpandMoreIcon /> },
  { value: 'desk', label: 'Desk', icon: <ExpandMoreIcon /> },
  { value: 'tags', label: 'Tags', icon: <TagIcon /> },
  { value: 'sort', label: 'Sort', icon: <SortIcon /> },
  { value: 'filter', label: 'Filter', icon: <FilterListIcon /> },
];

const MyComponent = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="button-groups" style={{ display: "flex", justifyContent: "space-between" }}>

      <Stack direction="row" spacing={4} className="group-1" >
        {options.map((option) => (
          <button style={{
            display: "flex", alignItems: "center", borderRadius: "10px", height: "5vh", border: "1px solid white",
            justifyContent: "center", backgroundColor: "#FFFFFF",boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)"
          }}
          >

            <IconButton key={option.value} onClick={() => setSelectedValue(option.value)}>
              {option.icon}
            </IconButton>
            {option.value}
          </button>
        ))}
      </Stack>
      <Stack direction="row" spacing={1} className="group-2" style={{ display: "flex", justifyContent: "space-between" }}>
        <button startIcon={<AddIcon />} variant="contained" style={{
          display: "flex", alignItems: "center", borderRadius: "10px", height: "5vh", border: "1px solid white",
          justifyContent: "center", backgroundColor: "#FFFFFF", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)"
        }}>
          Meeting
        </button>
        <button endIcon={<ExpandMoreIcon />} variant="outlined" style={{
          display: "flex", alignItems: "center", borderRadius: "10px", height: "5vh", border: "1px solid white",
          justifyContent: "center", backgroundColor: "#FFFFFF",boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)"
        }}>
          Import/Export
        </button>
      </Stack>


    </div>
  );
};

export default MyComponent;
