// MainPage.tsx
import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/TokenIntercepter";
import { User } from "../../types/auth/User";
import CalendarComponent from "../calender/CalendarPage";

export default function MainPage() {
    // const [user, setUser] = useState<User | null>(null);
    // console.log('user:', user);
    // useEffect(() => {

    //     axiosInstance.get('/user/info')  // axiosInstance 사용
    //         .then(response => {

    //             setUser(response.data.data)
    //         })
    //         .catch(error => {
    //             console.error('요청 실패:', error);
    //         });
    // }, []);

    return (
        <div>
            <CalendarComponent/>
        </div>
    );
}
