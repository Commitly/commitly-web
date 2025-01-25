import React from 'react';
import { Button, CircularProgress, Typography } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import theme from '../../theme/Theme';
import font from '../../theme/Font';
import { Box } from '@mui/system';
interface GPTButtonProps {
  onClick: () => void;
  isLoading: boolean
}

const AIButton: React.FC<GPTButtonProps> = ({ onClick, isLoading }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      sx={{
        backgroundColor: '#10A7FF', // GPT 색상처럼 연상되는 그린
        color: 'white',
        borderRadius: '50px',
        fontSize: '16px',
        minWidth: '160px',
        fontWeight: 'bold',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        height: '50px',
        gap: '8px', // 텍스트와 아이콘 사이 간격
        '&:hover': {
          backgroundColor: '#1A2D52', // hover 시 색상 변경
        },
      }}
    >
      <AutoAwesomeIcon sx={{
        left: 0,
      }} />
      <Box>
        {isLoading ? (
          
          <CircularProgress size={20} />
        ) : (
          <Typography fontFamily={font.extrabold}>회고록 만들기</Typography>
        )}
      </Box>

    </Button>
  );
};

export default AIButton;
