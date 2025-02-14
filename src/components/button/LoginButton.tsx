import React from 'react';
import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';


function LoginButton({ onClick }: { onClick: () => void }) {
    return(
        <Button
            variant="contained"
            color="primary"
            startIcon={<GitHubIcon />}
            onClick={onClick}
            sx={{
                textTransform: 'none',
                bgcolor: '#24292f',
                '&:hover': {
                    bgcolor: '#1b1f23',
                },
            }}
        >
            로그인
        </Button>
    )
}

export default LoginButton;