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
        backgroundColor: '#10A7FF',
        color: 'white',
        borderRadius: '50px',
        fontSize: '16px',
        minWidth: '160px',
        fontWeight: 'bold',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        height: '50px',
        gap: '8px',
        '&:hover': {
          backgroundColor: '#1A2D52',
        },
      }}
    >
      <AutoAwesomeIcon />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%'
        }}
      >
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
