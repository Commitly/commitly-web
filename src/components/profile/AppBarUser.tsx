import React from 'react';
import UserProps from '../../types/auth/UserProps';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import theme from '../../theme/Theme';
import font from '../../theme/Font';
import { Avatar } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

export default function AppBarUser({ user }: UserProps) {
    const navigate = useNavigate();
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleAvatarClick = () => {
        window.open(`https://github.com/${user?.login}`);
        handleCloseUserMenu();
      };
    const handleToMain = () => {
        navigate('/main')
        handleCloseUserMenu();
    }
    const handleToHome = () => {
        navigate('/')
        handleCloseUserMenu();
    }
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/';
        handleCloseUserMenu();
    }
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <div>
            {user ?
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Box sx={{ flexGrow: 1, flexDirection: 'column', alignItems: 'center' }} >
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginTop: 1, lineHeight: 1.1 }} color={theme.textMuted} fontFamily={font.semibold} fontSize={'16px'} fontStyle={'Pretendard-Regular'} textAlign={'right'} >
                            {user.name}
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, margin: 0, lineHeight: 1.1 }} color={theme.textNormal} fontFamily={font.semibold} fontSize={'16px'} textAlign={'right'} >
                            {user.login}
                        </Typography>
                    </Box>
                    <Box sx={{ marginRight: '20px' }} />
                    <Avatar alt={user.login} src={user.avataUrl} onClick={handleOpenUserMenu} sx={{ width: 50, height: 50, cursor: 'pointer' }}></Avatar>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        <MenuItem onClick={handleToMain} sx={{color: theme.textMuted, fontFamily: font.semibold}}>메인화면</MenuItem>
                        <MenuItem onClick={handleToHome} sx={{color: theme.textMuted, fontFamily: font.semibold}}>홈화면</MenuItem>
                        <MenuItem onClick={handleAvatarClick} sx={{color: theme.textMuted, fontFamily: font.semibold}}>내 깃허브</MenuItem>
                        <MenuItem onClick={handleLogout} sx={{color: theme.danger, fontFamily: font.semibold}}>로그아웃</MenuItem>
                    </Menu>
                </Box> : 'Loading user data...'}
        </div>
    );
}
