import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function FolderList({ item }: { item: string[] }) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {item.map((item) => (
            <ListItem>
            <ListItemAvatar>
                <Avatar>
                <ImageIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item} secondary="Jan 9, 2014" />
            </ListItem>
        ))}
    </List>
  );
}
