import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function FolderList({ item }: { item: string[] }) {
    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 360,
                maxHeight: 600,
                bgcolor: 'background.paper',
                overflow: 'auto', // 스크롤 활성화
            }}
        >
            {item.map((item, index) => (
                <ListItem key={index}> {/* key 추가 필수 */}
                    <ListItemAvatar>
                        <Avatar>
                            <GitHubIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={item}/>
                </ListItem>
            ))}
        </List>

    );
}
