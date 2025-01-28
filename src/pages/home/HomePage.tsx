import React from 'react';
import Box from '@mui/material/Box';
import GitHubLoginButton from '../../components/button/GithubButton';
import { useEffect } from 'react';
import axiosInstance from "../../utils/TokenIntercepter";
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import font from '../../theme/Font';
import theme from '../../theme/Theme';
import S from './HomePage.style';
import OnboardingCarousel from '../../components/card/OnboardingCarousel';
import UserReviews from '../../components/card/UserReviews';

function HomePage() {
  const navigate = useNavigate();
  const handleGitHubLogin = () => {
    // console.log('GitHub 로그인 버튼이 클릭되었습니다!');
    // GitHub OAuth Redirect 로직 추가
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=Ov23li0fSA3TMwjXKF6b';
  };
  useEffect(() => {
    axiosInstance.get('/user/info')  // axiosInstance 사용
      .then(response => {

        navigate('/main');
      })
      .catch(error => {
        console.error('요청 실패:', error);
      });
  });

  return (
    <Box flexDirection={'column'} >
      <Box
        sx={{
          position: 'relative', // 기준 컨테이너
          width: '100vw',
          height: '92vh', // 원하는 높이 지정
          backgroundColor: '#f6f6f6', // 컨테이너 배경색
        }}>
        <Box>
          <S.container>
            <Box
              sx={{
                backgroundColor: theme.white,
                borderRadius: '20px',
                padding: '48px',
                maxWidth: '1200px',
                width: '90%',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)'
              }}>
              <Typography fontFamily={font.bold} fontSize={52}>나르샤, 동아리, 포트폴리오 회고록 <br />이제 <span style={{ color: theme.primary }}>딸깍</span>으로 끝내세요</Typography>
              <Box sx={{ height: 10 }}></Box>
              <Typography fontFamily={font.bold} fontSize={22} sx={{ color: theme.textNormal }}>기억도 안나는 날의 회고록 적기 힘들죠? 이제는 <span style={{ color: theme.black, marginTop: 2 }}>Commit</span><span style={{ color: theme.primary }}>ly</span>에게 맡기세요.</Typography>
              <Box sx={{ height: 30 }}></Box>
              <GitHubLoginButton onClick={handleGitHubLogin}></GitHubLoginButton>
            </Box>
          </S.container>
        </Box>
      </Box>
      <Box sx={{width: '100vw', height: '120vh', backgroundColor: theme.white, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <OnboardingCarousel></OnboardingCarousel>
      </Box>
      <Box>
      <UserReviews></UserReviews>
      </Box>
    </Box>

  );
}

export default HomePage;