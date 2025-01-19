import axios from 'axios';

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // 기본 URL을 설정합니다.
});

// 요청 인터셉터 추가
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken'); // 로컬 스토리지에서 액세스 토큰 가져오기
    console.log('accessToken:', accessToken);
    // /login/oauth2/code/github 경로 제외하고 Authorization 헤더 추가
    if (accessToken && !config.url?.includes('/login/oauth2/code/github')) {
      config.headers['Authorization'] = accessToken;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
