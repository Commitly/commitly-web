import React from 'react';
import S from './HomePage.style';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import GitHubLoginButton from '../../components/button/GithubButton';

function HomePage() {
  const handleGitHubLogin = () => {
    console.log('GitHub 로그인 버튼이 클릭되었습니다!');
    // GitHub OAuth Redirect 로직 추가
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=Ov23li0fSA3TMwjXKF6b';
  };

  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <GitHubLoginButton onClick={handleGitHubLogin}></GitHubLoginButton>
    </Box>
  );
}

export default HomePage;