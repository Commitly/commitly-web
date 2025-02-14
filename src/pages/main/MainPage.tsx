// MainPage.tsx
import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/TokenIntercepter";
import { User } from "../../types/auth/User";
import CalendarComponent from "../calender/CalendarPage";
import { Box } from "@mui/system";
import MainPageS from "./MainPage.style";


export default function MainPage() {

    return (
        <Box
          sx={{
            width: '100vw',
            height: '92vh',
            display: 'flex', // flexbox 사용
            justifyContent: 'center', // 수평 중앙 정렬
            alignItems: 'center', // 수직 중앙 정렬
          }}
        >
          <MainPageS.container>
            <CalendarComponent />
          </MainPageS.container>
        </Box>
      );
}
