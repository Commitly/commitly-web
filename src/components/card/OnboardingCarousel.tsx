import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import font from '../../theme/Font';

const Container = styled(Box)`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ScrollContainer = styled(Box)`
  width: 100%;
  max-width: 1200px;
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding: 40px;
  gap: 40px;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Card = styled(Box)`
  scroll-snap-align: center;
  min-width: 800px;
  height: 600px;
  background: white;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled(Box)`
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled(Box)`
  padding: 40px;
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);
`;

const Title = styled(Typography)`
  && {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 16px;
    color: #1a1a1a;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const Description = styled(Typography)`
  && {
    font-size: 1.25rem;
    color: #666666;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const ScrollHint = styled(Typography)`
  && {
    position: absolute;
    bottom: 40px;
    color: #999;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    gap: 8px;
    
    &::before, &::after {
      content: '';
      width: 40px;
      height: 1px;
      background-color: #ddd;
    }
  }
`;

const OnboardingCarousel = () => {
    const items = [
        {
            title: "간단한 사용",
            description: "회고록을 쓰고 싶은 날을 선택하세요",
            imageUrl: "/img/commitly-web-two-img.png",

            altText: "서비스 소개 이미지"
        },
        {
            title: "커밋 기록",
            description: "원하는 날의 커밋 기록을 보여줍니다.",
            imageUrl: "/img/commitly-web-three-img.png",
            altText: "검색 기능 소개 이미지"
        },
        {
            title: "회고록 작성",
            description: "버튼을 누르면 Commitly가 대신 회고록을 작성해줍니다.",
            imageUrl: "/img/commitly-web-four-img.png",
            altText: "실시간 업데이트 이미지"
        },
        {
            title: "딸깍",
            description: "복사 하고 붙여 넣으면 끝!",
            imageUrl: "/img/commitly-web-five-img.png",
            altText: "시작하기 이미지"
        }
    ];

    return (
        <Container>
            <ScrollContainer>
                {items.map((item, index) => (
                    <Card key={index}>
                        <ImageWrapper>
                            <Image src={item.imageUrl} alt={item.altText} />
                        </ImageWrapper>
                        <Content>
                            <Title fontFamily={font.semibold}>{item.title}</Title>
                            <Description fontFamily={font.regular}>{item.description}</Description>
                        </Content>
                    </Card>
                ))}
            </ScrollContainer>
            <ScrollHint>밑으로 스크롤하여 더 보기</ScrollHint>
        </Container>
    );
};

export default OnboardingCarousel;