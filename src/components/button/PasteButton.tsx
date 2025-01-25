import React, { useState } from "react";
import { Box } from '@mui/system';
import CheckIcon from '@mui/icons-material/Check';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { IconButton } from '@mui/material';
import { CommitMessageInterface } from "../../types/day/CommitMessageInterface";

const PasteButton: React.FC<CommitMessageInterface> = ({ message }) => {
  const [copied, setCopied] = useState(false);
  const pasteButtonClick = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        // 성공적으로 복사된 경우
        setCopied(true);
      },
      (err) => {
        // 실패한 경우
        setCopied(false);
      }
    );
  }
  return (
    <Box sx={{ width: 100, marginLeft: 3 }}>
      {copied ? (
        <Box sx={{ marginLeft: 1 }}>
          <CheckIcon />
        </Box>

      ) : (
        <IconButton onClick={() => pasteButtonClick(message)}>
          <ContentCopyIcon />
        </IconButton>
      )}
    </Box>
  );
}

export default PasteButton;