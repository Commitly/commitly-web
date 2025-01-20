import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LoginButton from '../button/LoginButton';
import { Login } from '@mui/icons-material';
import Container from './TopAppBar.style';
import CommitlyLogo from '../logo/CommitlyLogo';
import { useEffect, useState } from 'react';
import axiosInstance from "../../utils/TokenIntercepter";
import { User } from "../../types/auth/User";


export default function TopAppBar() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    axiosInstance.get('/user/info')  // axiosInstance 사용
      .then(response => {

        setUser(response.data.data)
      })
      .catch(error => {
        console.error('요청 실패:', error);
      });
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
        sx={{ backgroundColor: '#FFF' }}
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
              <CommitlyLogo />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              {user ? `${user.name} (${user.role})` : <LoginButton onClick={() => console.log('로그인 버튼 클릭')}></LoginButton>}

            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </Box >
  );
}