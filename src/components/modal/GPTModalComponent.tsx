import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Day } from '../../types/day/Day';


function GPTModalComponent(day: Day) {
    return (
        <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            {day.date.toISOString().split('T')[0]}

            </Typography>
        </Box>
    )
}

export default GPTModalComponent;