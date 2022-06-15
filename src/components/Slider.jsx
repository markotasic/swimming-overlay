import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

export default function ContinuousSlider({
  min,
  max,
  label,
  handleChange,
  value,
}) {
  return (
    <Box sx={{ width: 500, display: 'flex', alignItems: 'center' }}>
      <Typography id='input-slider' sx={{ marginRight: '20px', width: 100 }}>
        {label}
      </Typography>
      <Slider
        sx={{ width: 200 }}
        min={min}
        max={max}
        aria-label='Default'
        valueLabelDisplay='auto'
        value={value}
        onChange={handleChange}
      />
      <Typography sx={{ marginLeft: '20px' }}>{value}</Typography>
    </Box>
  );
}
