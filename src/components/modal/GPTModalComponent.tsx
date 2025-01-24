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

function GPTModalComponent(day: Day) {
    const [commitMessages, setCommitMessages] = React.useState<string[]>([]); // Change to a list of strings
    const [isLoading, setIsLoaded] = React.useState<boolean>(false);

    useEffect(() => {
        requestToServer();
    }, []);

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
        <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2" fontFamily={font.regular}>
                        {day.date.toISOString().split('T')[0]}
                    </Typography>
            {isLoading ? (
                <CircularProgress />
            ) : (
                <>
                    
                    <FolderList item={commitMessages}></FolderList>
                    
                </>
            )}
        </Box>
    )
}

export default GPTModalComponent;
