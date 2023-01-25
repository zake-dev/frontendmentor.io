import styled from 'styled-components';

import colors from '@/style/colors';

export const Card = styled.div`
  flex: 1;
  max-width: 360px;
  padding: 28px 18px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: linear-gradient(${colors.darkBlue}, ${colors.veryDarkBlue});
  border-radius: 16px;
`;

export const Decoration = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: ${colors.darkBlue};
  filter: brightness(1.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${colors.white};
`;

export const Description = styled.p`
  color: ${colors.lightGrey};
  line-height: 24px;
`;

export const RatingScoreButtonsContainer = styled.div`
  margin: 12px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const RatingScoreButton = styled.button<{ active?: boolean }>`
  width: 50px;
  height: 50px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 50%;
  background-color: ${({ active }) =>
    active ? colors.mediumGrey : colors.darkBlue};
  color: ${({ active }) => (active ? colors.white : colors.mediumGrey)};
  cursor: pointer;
  transition: all 0.2s ease;

  @media (hover: hover) {
    &:hover {
      background-color: ${colors.orange};
      color: ${colors.white};
    }
  }

  &:active {
    background-color: ${colors.mediumGrey};
    color: ${colors.white};
  }
`;

export const SubmitButton = styled.button`
  height: 44px;
  border-radius: 22px;
  font-size: 15px;
  letter-spacing: 0.15em;
  background-color: ${colors.orange};
  color: ${colors.white};
  cursor: pointer;
  transition: all 0.2s ease;

  @media (hover: hover) {
    &:hover {
      background-color: ${colors.white};
      color: ${colors.orange};
    }
  }

  &:disabled {
    background-color: ${colors.darkBlue};
    color: ${colors.mediumGrey};
    cursor: default;
  }
`;

export const ResultCard = styled(Card)`
  padding: 32px 18px;
  align-items: center;
  text-align: center;
`;

export const ResultIllustWrapper = styled.div`
  position: relative;
`;

export const RatingScoreChip = styled.span`
  margin: 12px 0;
  padding: 8px 12px;
  border-radius: 16px;
  background-color: ${colors.darkBlue};
  color: ${colors.orange};
`;
