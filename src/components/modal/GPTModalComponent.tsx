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
import CommitListItem from '../item/CommitListItem';
import { fontFamily } from '@mui/system';
import AIButton from '../button/AIButton';
import ModalS from './GPTModalComponent.style';


function GPTModalComponent(day: Day) {
    const [commitMessages, setCommitMessages] = React.useState<string[]>([]); // Change to a list of strings
    const [isCommitLoading, setCommitIsLoaded] = React.useState<boolean>(true);
    const [isGptLoading, setGptIsLoaded] = React.useState<boolean>(true);
    const [gptMessages, setGptMessages] = React.useState<string[]>([]);

    useEffect(() => {
        console.log(`로딩중인가요? ${isCommitLoading}`);
    });
    useEffect(() => {
        requestToServer();

    }, []);

    

    const handleClick = () => {
        try{
            axiosInstance.get('/github/gpt/make', {
                params: {
                    date: day.date.toISOString().split('T')[0]
                }
            })
                .then(response => {
                    console.log(response);
                    
                })
                .catch(error => {
                    console.error('요청 실패:', error);
                });
        } catch (error) {
            console.error('Request error:', error);
        }
    }


    const requestGptToServer = () => {
        setGptIsLoaded(true); // Set loading to true before the request
        try {
            axiosInstance.get('/github/gpt/get', {
                params: {
                    date: day.date.toISOString().split('T')[0]
                }
            })
                .then(response => {
                    const messages = response.data.data.map((item: { message: string }) => item.message);
                    setGptMessages(messages);
                    setGptIsLoaded(false); // Set loading to false after receiving data
                })
                .catch(error => {
                    console.error('요청 실패:', error);
                    setGptIsLoaded(false); // Ensure loading state is set to false on error too
                });
        } catch (error) {
            console.error('Request error:', error);
            setGptIsLoaded(false);
        }
    }
    const requestToServer = () => {
        setCommitIsLoaded(true); // Set loading to true before the request
        try {
            axiosInstance.get('/github/commits/messages', {
                params: {
                    date: day.date.toISOString().split('T')[0]
                }
            })
                .then(response => {
                    const messages = response.data.data.map((item: { message: string }) => item.message);
                    setCommitMessages(messages);
                    setCommitIsLoaded(false); // Set loading to false after receiving data
                })
                .catch(error => {
                    console.error('요청 실패:', error);
                    setCommitIsLoaded(false); // Ensure loading state is set to false on error too
                });
        } catch (error) {
            console.error('Request error:', error);
            setCommitIsLoaded(false);
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

            <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                <Typography
                    fontFamily={font.bold}
                    sx={{ whiteSpace: 'nowrap', marginRight: '2rem' }}
                    fontSize={32}
                >
                    {day.date.toISOString().split('T')[0]}의 커밋
                </Typography>

                <AIButton onClick={handleClick} />
            </Box>

            <Box sx={{ ml: 'auto' }}>
                <ModalS.container>
                    {isCommitLoading ? (
                        console.log('로딩중...'),
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center', // 수평 중앙 정렬
                                alignItems: 'center', // 수직 중앙 정렬
                                width: '200px', // 화면 전체 너비
                                height: '400px', // 화면 전체 높이
                            }}
                        >
                            <CircularProgress />
                        </Box>
                    ) : (
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            {commitMessages.length === 0 ? (
                                <Typography fontFamily={font.bold} fontSize={24}>해당 날짜에 커밋이 없습니다.</Typography>
                            ) : (
                                <CommitListItem item={commitMessages} />
                            )}
                        </Box>

                    )}
                </ModalS.container>

            </Box>
        </Box>

    )
}

export default GPTModalComponent;
