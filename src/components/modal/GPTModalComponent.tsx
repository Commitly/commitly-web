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
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';

function GPTModalComponent(day: Day) {
    const [commitMessages, setCommitMessages] = useState<CommitResponseType[]>([]); // Change to a list of strings
    const [isCommitLoading, setCommitIsLoaded] = useState<boolean>(true);
    const [isGptLoading, setGptIsLoaded] = useState<boolean>(true);
    const [gptMessages, setGptMessages] = React.useState<GptResponseType[]>([]);

    // useEffect(() => {
    //     console.log(`gpt로딩중임?? ${isGptLoading}`);
    // });
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

                    if (response.data.status === 404) {
                        alert("해당 날짜에 커밋이 없습니다.");
                    }
                    if (response.data.status === 429) {
                        alert("회고록은 하루에 20번만 작성가능합니다");
                    }
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

            // console.error('요청 실패:', error);
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
                    // console.error('요청 실패:', error);
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
                width: '100%',
                maxWidth: 1200,
                height: 600,
                bgcolor: 'background.paper',
                border: '1px solid #e0e0e0',
                borderRadius: 2,
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                margin: 'auto',
                overflow: 'hidden'
            }}
        >
            {/* Left Section */}
            <Box
                sx={{
                    width: '55%',
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Typography
                        fontFamily={font.bold}
                        sx={{
                            whiteSpace: 'nowrap',
                            mr: 2,
                            fontSize: 28
                        }}
                    >
                        {day.date.toISOString().split('T')[0]}의 커밋
                    </Typography>
                    <AIButton
                        onClick={handleClick}
                        isLoading={isGptLoading}
                    />
                    <Box sx={{width: 20}}></Box>
                    <Tooltip  title="리포지토리의 컨트리뷰터가 아니면 커밋이 안뜰수 있습니다." placement="top">
                        <InfoIcon color='disabled' ></InfoIcon>
                    </Tooltip>
                </Box>

                <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
                    <GptListItem item={gptMessages} />
                </Box>
            </Box>

            {/* Vertical Divider */}
            <Divider
                orientation="vertical"
                flexItem
                sx={{
                    mx: 2,
                    borderColor: '#e0e0e0'
                }}
            />

            {/* Right Section */}
            <Box
                sx={{
                    width: '45%',
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                {isCommitLoading ? (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexGrow: 1
                        }}
                    >
                        <CircularProgress />
                    </Box>
                ) : (
                    <Box sx={{
                        width: '100%',
                    }}>
                        {commitMessages.length === 0 ? (
                            <Box sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexGrow: 1
                            }}>
                                <Typography
                                    fontFamily={font.bold}
                                    fontSize={20}
                                    color="text.secondary"
                                    textAlign="center"
                                >
                                    해당 날짜에 커밋이 없습니다.
                                </Typography>
                            </Box>

                        ) : (
                            <CommitListItem item={commitMessages} />
                        )}
                    </Box>
                )}
            </Box>
        </Box>
    );

}

export default GPTModalComponent;
