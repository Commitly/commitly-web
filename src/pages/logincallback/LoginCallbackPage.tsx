import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axiosInstance from '../../utils/TokenIntercepter';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function LoginCallbackPage() {
    const navigate = useNavigate();
    const [isRequestSent, setIsRequestSent] = useState(false); // 요청 상태를 관리
    useEffect(() => {
        // 현재 URL에서 code 파라미터 추출
        let code = new URLSearchParams(window.location.search).get('code');
        if (code && !isRequestSent) { // code가 존재하고 요청을 아직 보내지 않은 경우
            setIsRequestSent(true); // 요청 보냈다고 상태 업데이트
            axiosInstance.get(`/login/oauth2/code/github?code=${code}`)
                .then(response => {
                    // JWT 토큰을 받아서 로컬 스토리지에 저장하고 메인 페이지로 이동
                    localStorage.setItem('accessToken', response.data.data.accessToken);
                    localStorage.setItem('refreshToken', response.data.data.accessToken);
                    console.log('로그인을 했음', response.data);
                    navigate('/main');
                })
                .catch(error => {
                    alert("서버에 문제가 생겼습니다. 죄송합니다.")
                    console.error('로그인 실패:', error.response?.data || error.message);
                    // 요청 상태를 초기화 (필요한 경우)
                    setIsRequestSent(false);
                });
        } else if (!code) {
            alert("서버에 문제가 생겼습니다.")
            console.error('GitHub에서 코드가 반환되지 않았습니다.');
        }
    }, []); 

    return (
        <Box sx={{
            width: '100%',
            height: '100vh',
        }}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                }}
            >
                <CircularProgress />
            </Box>
        </Box>

    );
}
