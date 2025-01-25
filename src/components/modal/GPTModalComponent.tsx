import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Day } from '../../types/day/Day';
import axiosInstance from '../../utils/TokenIntercepter';
import Button from '@mui/material/Button';
import font from '../../theme/Font';
import CircularProgress from '@mui/material/CircularProgress';
import CommitListItem from '../item/CommitListItem';
import AIButton from '../button/AIButton';
import ModalS from './GPTModalComponent.style';
import { CommitResponseType } from '../../types/commit/CommitResponseType';
import GptListItem from '../item/GptListItem';
import { GptResponseType } from '../../types/gpt/GptResponseType';
import Divider, { dividerClasses } from '@mui/material/Divider';

function GPTModalComponent(day: Day) {
    const [commitMessages, setCommitMessages] = useState<CommitResponseType[]>([]); // Change to a list of strings
    const [isCommitLoading, setCommitIsLoaded] = useState<boolean>(true);
    const [isGptLoading, setGptIsLoaded] = useState<boolean>(true);
    const [gptMessages, setGptMessages] = React.useState<GptResponseType[]>([]);

    useEffect(() => {
        console.log(`gpt로딩중임?? ${isGptLoading}`);
    });
    useEffect(() => {
        requestToServer();
        requestGptToServer();
    }, []);



    const handleClick = () => {
        setGptIsLoaded(true);
        try {
            axiosInstance.get('/github/gpt/make', {
                params: {
                    date: day.date.toISOString().split('T')[0]
                }
            })
                .then(response => {
                    // console.log('요청 성공:', response);
                    requestGptToServer();

                })
                .catch(error => {
                    // console.error('요청 실패:', error);
                });
        } catch (error) {
            // console.error('Request error:', error);
        }
    }


    const requestGptToServer = async () => {
        setGptIsLoaded(true); // 요청 시작 전 로딩 상태 설정
        try {

            const response = await axiosInstance.get('/github/gpt/get', {
                params: {
                    date: day.date.toISOString().split('T')[0]
                }
            });

            const messages = response.data.data.map((item: { response: string, responseDate: string }) => ({
                response: item.response,
                responseDate: item.responseDate,
            }));
            setGptMessages(messages);
        } catch (error) {

            console.error('요청 실패:', error);
        } finally {
            setGptIsLoaded(false); // 요청 완료 후 로딩 상태 해제
        }
    };




    const requestToServer = () => {
        setCommitIsLoaded(true); // Set loading to true before the request
        try {
            axiosInstance.get('/github/commits/messages', {
                params: {
                    date: day.date.toISOString().split('T')[0]
                }
            })
                .then(response => {
                    // Assuming response.data.data is an array of objects
                    const commitData = response.data.data.map((item: { repositoryName: string, message: string, committedDate: string }) => {
                        return {
                            repositoryName: item.repositoryName,
                            message: item.message,
                            committedDate: item.committedDate,
                        };
                    });

                    setCommitMessages(commitData); // Set the state with the mapped data
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
                width: 1200,
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
            <Box sx={{ flexDirection: 'column', flexGrow: 2.4 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography
                        fontFamily={font.bold}
                        sx={{ whiteSpace: 'nowrap', marginRight: '2rem' }}
                        fontSize={32}
                    >
                        {day.date.toISOString().split('T')[0]}의 커밋
                    </Typography>
                    <AIButton onClick={handleClick} isLoading={isGptLoading} />
                </Box>
                <Box>

                    <Box>
                        <Box sx={{ height: 20 }}></Box>
                        <GptListItem item={gptMessages} />
                    </Box>
                </Box>
            </Box>
            <Divider orientation="vertical" flexItem  sx={{marginRight:10}}/>
            <Box sx={{ flexGrow: 2 }}>
                <ModalS.container>
                    {isCommitLoading ? (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center', // 수평 중앙 정렬
                                alignItems: 'center', // 수직 중앙 정렬
                                width: '300px', // 화면 전체 너비
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
