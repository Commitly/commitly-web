import React from 'react';
import UserProps from '../../types/auth/UserProps';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import theme from '../../theme/Theme';
import Font from '../../theme/Font';
import { Avatar } from '@mui/material';


export default function AppBarUser({ user }: UserProps) {
    const handleAvatarClick = () => {
        window.open(`https://github.com/${user?.login}`);
      };
    return (
        <div>
            {user ? <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Box sx={{ flexGrow: 1, flexDirection: 'column', alignItems: 'center'}} >
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginTop: 1, lineHeight: 1.1}} color={theme.textMuted} fontFamily={Font.semibold} fontSize={'16px'} fontStyle={'Pretendard-Regular'} textAlign={'right'} >
                        {user.name}
                    </Typography>
                    <Typography variant="h6" component="div" sx={ { flexGrow: 1,  margin: 0, lineHeight: 1.1}} color={theme.textNormal} fontFamily={Font.semibold} fontSize={'16px'} textAlign={'right'} >
                        {user.login}
                    </Typography>
                </Box>
                <Box sx={{marginRight: '20px'}} />
                <Avatar alt={user.login} src={user.avataUrl} onClick={handleAvatarClick}  sx={{width: 50, height: 50, cursor: 'pointer'}}></Avatar>
            </Box> : 'Loading user data...'}
        </div>
    );
}
