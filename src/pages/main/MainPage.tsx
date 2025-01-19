// MainPage.tsx
import React, { useEffect,useState } from "react";
import axiosInstance from "../../utils/TokenIntercepter";
import {User} from "../../pages/main/model/User";

export default function MainPage() {
    const [user, setUser] = useState<User | null>(null);
    console.log('user:', user);
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
    <div>
        웨잇어 세컨드
      <h1>{user ? `${user.name} (${user.role})` : 'Loading user data...'}</h1>
    </div>
  );
}
