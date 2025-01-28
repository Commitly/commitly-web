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
      description: "새로운 경험을 시작해보세요. 저희 서비스와 함께 더 나은 경험을 만나보세요.",
      imageUrl: "https://blog.kakaocdn.net/dn/GSWaD/btr0gB0teLR/1W4YO2IXCHoDVcpca9HHGK/img.jpg",
      altText: "서비스 소개 이미지"
    },
    {
      title: "간편한 검색",
      description: "원하는 정보를 쉽고 빠르게 찾아보세요. 직관적인 검색 기능으로 더 나은 사용자 경험을 제공합니다.",
      imageUrl: "https://blog.kakaocdn.net/dn/GSWaD/btr0gB0teLR/1W4YO2IXCHoDVcpca9HHGK/img.jpg",
      altText: "검색 기능 소개 이미지"
    },
    {
      title: "실시간 업데이트",
      description: "최신 정보를 실시간으로 확인하실 수 있습니다. 언제나 최신 소식을 놓치지 마세요.",
      imageUrl: "https://blog.kakaocdn.net/dn/GSWaD/btr0gB0teLR/1W4YO2IXCHoDVcpca9HHGK/img.jpg",
      altText: "실시간 업데이트 이미지"
    },
    {
      title: "시작하기",
      description: "지금 바로 시작해보세요. 새로운 경험이 여러분을 기다립니다.",
      imageUrl: "https://blog.kakaocdn.net/dn/GSWaD/btr0gB0teLR/1W4YO2IXCHoDVcpca9HHGK/img.jpg",
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