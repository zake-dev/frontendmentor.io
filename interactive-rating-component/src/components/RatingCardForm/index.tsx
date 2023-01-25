import { useState } from 'react';

import { ReactComponent as StarIcon } from '@assets/icons/icon-star.svg';
import { ReactComponent as IllustrationThankYou } from '@assets/images/illustration-thank-you.svg';

import ScreenReaderOnly from '@/components/ScreenReaderOnly.tsx';

import {
  Card,
  Decoration,
  Description,
  RatingScoreButton,
  RatingScoreButtonsContainer,
  RatingScoreChip,
  ResultCard,
  ResultIllustWrapper,
  SubmitButton,
  Title,
} from './style';

function RatingCardForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted)
    return (
      <ResultCard>
        <ResultIllustWrapper>
          <IllustrationThankYou />
          <ScreenReaderOnly description="Illustration of a receipt printed out from a mobile phone screen." />
        </ResultIllustWrapper>

        <RatingScoreChip>You selected {4} out of 5</RatingScoreChip>

        <Title>Thank you!</Title>
        <Description>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don&#39;t hesitate to get in touch!
        </Description>
      </ResultCard>
    );

  return (
    <Card>
      <Decoration>
        <StarIcon />
        <ScreenReaderOnly description="Icon of a orange colored star" />
      </Decoration>

      <Title>How did we do?</Title>
      <Description>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Description>

      <RatingScoreButtonsContainer>
        {[1, 2, 3, 4, 5].map((score) => (
          <RatingScoreButton key={score}>{score}</RatingScoreButton>
        ))}
      </RatingScoreButtonsContainer>

      <SubmitButton>SUBMIT</SubmitButton>
    </Card>
  );
}

export default RatingCardForm;
