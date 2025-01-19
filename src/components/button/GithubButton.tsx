import React from 'react';
import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

// Button 컴포넌트
function GitHubLoginButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<GitHubIcon />}
      onClick={onClick} // 외부에서 전달받은 함수 실행
      sx={{
        textTransform: 'none',
        bgcolor: '#24292f',
        '&:hover': {
          bgcolor: '#1b1f23',
        },
      }}
    >
      Sign in with GitHub
    </Button>
  );
}

export default GitHubLoginButton;