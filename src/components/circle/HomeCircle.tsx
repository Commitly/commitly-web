import React from 'react';

import Box from '@mui/material/Box';

type HomeCircleProps = {
    width: number;
    height: number;
    fillPercent: number;
    strokePercent: number;
};

export default function HomeCircle({width,height,fillPercent, strokePercent}: HomeCircleProps) {
    return (
        <Box
          sx={{
            width: `${width}px`, // 동적 너비
            height: `${height}px`, // 동적 높이
            borderRadius: '50%', // 원형 만들기
            backgroundColor: `rgba(0, 123, 255, ${fillPercent})`, // fill 색상
            border: `1px solid rgba(0, 123, 255, ${strokePercent})`, // stroke 색상
          }}
        ></Box>
      );
}