import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function CommitlyLogo() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color='black' fontFamily={'Pretendard-SemiBold'} fontSize={'24px'}>
                Commit
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color='#0000FF' fontFamily={'Pretendard-SemiBold'} fontSize={'24px'}>
                ly
            </Typography>
        </Box>
    )
}