import axios from 'axios';
import { env } from 'process';
// Axios 인스턴스 생성
const api_key = process.env.REACT_APP_API_URL
const axiosInstance = axios.create({
  baseURL: api_key, // 기본 URL을 설정합니다.
});

// 요청 인터셉터 추가
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken'); // 로컬 스토리지에서 액세스 토큰 가져오기
    // console.log('accessToken:', accessToken);
    // /login/oauth2/code/github 경로 제외하고 Authorization 헤더 추가
    if (accessToken && !config.url?.includes('/login/oauth2/code/github') && !config.url?.includes('/login/refresh')) {
      config.headers['Authorization'] = accessToken;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if(error.response?.status === 429){
      alert("DDoS 멈춰!");
    }
    if (error.response?.status === 401) {
      // console.log('Access Token 만료, Refresh Token으로 재발급 시도...');
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) {
        console.error('Refresh Token 없음. 로그인 페이지로 이동합니다.');
        window.location.href = '/';
        return Promise.reject(error);
      }

      try {
        // Refresh Token으로 새 Access Token 발급 요청
        const { data } = await axios.post(`${api_key}login/refresh`, {
          refreshToken,
        });

        // 새 Access Token 저장
        localStorage.setItem('accessToken', data.data);
        // console.log('새 Access Token 발급 성공:', data);

        // 원래 요청 재시도
        error.config.headers['Authorization'] = data.accessToken;
        return axiosInstance(error.config);
      } catch (refreshError) {
        console.error('Refresh Token도 만료됨. 로그인 페이지로 이동합니다.');
        localStorage.clear();
        window.location.href = '/';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
