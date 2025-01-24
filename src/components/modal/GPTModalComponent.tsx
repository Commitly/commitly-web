import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Day } from '../../types/day/Day';
import axiosInstance from '../../utils/TokenIntercepter';
import Button from '@mui/material/Button';
import font from '../../theme/Font';
import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import FolderList from '../item/CommitListItem';
import { fontFamily } from '@mui/system';
import AIButton from '../button/AIButton';
import ModalS from './GPTModalComponent.style';


function GPTModalComponent(day: Day) {
    const [commitMessages, setCommitMessages] = React.useState<string[]>([]); // Change to a list of strings
    const [isLoading, setIsLoaded] = React.useState<boolean>(false);

    useEffect(() => {
        requestToServer();
    }, []);

    const handleClick = () => {
        console.log('GPT 버튼 클릭');
    }

    const requestToServer = () => {
        try {
            setIsLoaded(true);
            axiosInstance.get('/github/commits/messages', {
                params: {
                    date: day.date.toISOString().split('T')[0]
                }
            })
                .then(response => {
                    // Map the data into a list of commit messages
                    const messages = response.data.data.map((item: { message: string }) => item.message);
                    setCommitMessages(messages); // Set the list of commit messages
                })
                .catch(error => {
                    console.error('요청 실패:', error);
                });
        } finally {
            setIsLoaded(false);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row', // 수평으로 배치
                width: 800,
                minHeight: 600,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}
        >
            <ModalS.container>
                
            </ModalS.container>
            <Box sx={{ flex: 1 }} flexDirection={'column'}>
                <Typography fontFamily={font.bold} fontSize={32}>{day.date.toISOString().split('T')[0]}의 커밋</Typography>
                <AIButton onClick={handleClick}/>
            </Box>
            <Box sx={{ ml: 'auto'}}>
                <ModalS.container>
                {isLoading ? (
                    <Typography fontFamily={font.bold} sx={{textAlign:'center'}} fontSize={32}>로딩중...</Typography>
                ) : (
                    <FolderList item={commitMessages} />
                )}
                </ModalS.container>
                
            </Box>
        </Box>

    )
}

export default GPTModalComponent;
