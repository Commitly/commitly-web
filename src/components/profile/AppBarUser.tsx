import React from 'react';
import UserProps from '../../types/auth/UserProps';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function AppBarUser({ user }: UserProps) {
    return (
      <div>
        {user ? <Box>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color='black' fontFamily={'Pretendard-SemiBold'} fontSize={'24px'}>
                {user.name}
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color='black' fontFamily={'Pretendard-SemiBold'} fontSize={'24px'}>
                {user.login}
            </Typography>
            <img src={user.avataUrl} alt="avatar" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
        </Box> : 'Loading user data...'}
      </div>
    );
  }
  