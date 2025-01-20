import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import theme from '../../theme/Theme';

export default function CommitlyLogo() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color='black' fontFamily={'Pretendard-SemiBold'} fontSize={'24px'}>
                Commit
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color={theme.primary} fontFamily={'Pretendard-SemiBold'} fontSize={'24px'}>
                ly
            </Typography>
        </Box>
    )
}