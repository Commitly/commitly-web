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
//   {
//     id: 2,
//     userName: "이준호",
//     userImage: "/api/placeholder/40/40",
//     rating: 4,
//     date: "2024.01.20",
//     review: "전반적으로 만족스럽습니다. 업데이트가 자주 이루어져서 좋아요. 몇 가지 개선사항이 있다면 더 좋을 것 같네요.",
//     verifiedPurchase: true
//   },
//   {
//     id: 3,
//     userName: "박민지",
//     userImage: "/api/placeholder/40/40",
//     rating: 5,
//     date: "2024.01.25",
//     review: "고객 서비스가 정말 훌륭해요. 문의사항에 대해 신속하고 친절하게 응답해주셔서 감사합니다.",
//     verifiedPurchase: false
//   },
//   {
//     id: 4,
//     userName: "최현우",
//     userImage: "/api/placeholder/40/40",
//     rating: 5,
//     date: "2024.01.28",
//     review: "디자인이 너무 깔끔하고 좋네요. 특히 다크모드 지원이 마음에 듭니다. 앱의 성능도 매우 안정적이에요.",
//     verifiedPurchase: true
//   }
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
        }}>
          사용자 리뷰
        </Typography>
        <Typography variant="h6" sx={{ color: '#777' }}>
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
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#333' }}>
                      {review.userName}
                    </Typography>
                    {review.verifiedPurchase && (
                      <Chip
                        label="구매 확인"
                        size="small"
                        color="primary"
                        sx={{ height: 20 }}
                      />
                    )}
                  </Stack>
                  <Typography variant="caption" color="text.secondary">
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
