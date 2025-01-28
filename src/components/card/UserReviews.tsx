import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Rating,
  Chip,
  Stack
} from '@mui/material';
import styled from 'styled-components';
import font from '../../theme/Font';


const ReviewsContainer = styled(Box)`
  padding: 60px 40px;
  background-color: #f4f6f9;
  min-height: 100vh;
`;

const ReviewsGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledCard = styled(Card)`
  && {
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 100%;
    
    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
    }
  }
`;

const UserInfo = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const UserDetails = styled(Box)`
  margin-left: 16px;
`;

const reviews = [
  {
    id: 1,
    userName: "이건희",
    userImage: "https://avatars.githubusercontent.com/u/162662402?v=4",
    rating: 5,
    date: "2024.01.28",
    review: "나르샤 회고록이 3개월동안 밀려서 아직 아무것도 못적었는데 Commitly 덕분에 해결됐어요!",
    verifiedPurchase: true
  },
];

const UserReviews = () => {
  return (
    <ReviewsContainer>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" sx={{ 
          fontWeight: 700, 
          color: '#333',
          mb: 2,
          fontSize: '2.5rem',
          fontFamily: font.bold
        }}>
          사용자 리뷰
        </Typography>
        <Typography fontFamily={font.regular} variant="h6" sx={{ color: '#777' }}>
          실제 사용자들의 생생한 후기를 확인해보세요
        </Typography>
      </Box>

      <ReviewsGrid>
        {reviews.map((review) => (
          <StyledCard key={review.id}>
            <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <UserInfo>
                <Avatar
                  src={review.userImage}
                  alt={review.userName}
                  sx={{ width: 56, height: 56, borderRadius: '50%' }}
                />
                <UserDetails>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="subtitle1" fontFamily={font.semibold} sx={{ fontWeight: 600, color: '#333' }}>
                      {review.userName}
                    </Typography>
                  </Stack>
                  <Typography fontFamily={font.regular} variant="caption" color="text.secondary">
                    {review.date}
                  </Typography>
                </UserDetails>
              </UserInfo>

              <Rating 
                value={review.rating} 
                readOnly 
                sx={{ mb: 2 }}
              />

              <Typography
                variant="body2"
                sx={{
                  color: '#444',
                  lineHeight: 1.8,
                  mb: 2,
                  flex: 1
                }}
                fontFamily={font.regular}
              >
                {review.review}
              </Typography>
            </CardContent>
          </StyledCard>
        ))}
      </ReviewsGrid>
    </ReviewsContainer>
  );
};

export default UserReviews;
