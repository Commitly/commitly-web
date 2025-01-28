import React from "react";
import { Box } from "@mui/system";
import styled from "styled-components";
import theme from "../../theme/Theme";
import { Typography } from "@mui/material";
import font from "../../theme/Font";
const Container = styled(Box)`
  width: 100vw;
  height: 12vh;
  background-color: ${theme.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
`;
function BottomBar(){
    return(
        <Container>
            <Typography color={theme.textDisabled} fontFamily={font.semibold}>
                문의사항 : leegeh1213@gmail.com
            </Typography>
        </Container>
    )
}

export default BottomBar;