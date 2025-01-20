import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import LoginButton from '../button/LoginButton';
import Container from './TopAppBar.style';
import CommitlyLogo from '../logo/CommitlyLogo';
import { useEffect, useState } from 'react';
import axiosInstance from "../../utils/TokenIntercepter";
import { User } from "../../types/auth/User";
import AppBarUser from '../profile/AppBarUser';
import { useNavigate } from 'react-router-dom';
import theme from '../../theme/Theme';

export default function TopAppBar() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const handleGitHubLogin = () => {
    console.log('GitHub 로그인 버튼이 클릭되었습니다!');
    // GitHub OAuth Redirect 로직 추가
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=Ov23li0fSA3TMwjXKF6b';
  };
  useEffect(() => {
    axiosInstance.get('/user/info')  // axiosInstance 사용
      .then(response => {

        setUser(response.data.data)
      })
      .catch(error => {
        alert('로그인이 필요합니다.');
        navigate('/');
      });
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
        sx={{ backgroundColor: '#FFF', 
        }}
      >
        <Container>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            > 
              <CommitlyLogo/>
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              {user ?  <AppBarUser user={user}></AppBarUser>: <LoginButton onClick={handleGitHubLogin}></LoginButton> }
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </Box >
  );
}