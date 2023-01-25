import { ReactComponent as StarIcon } from '@assets/icons/icon-star.svg';

import {
  Card,
  Decoration,
  Description,
  RatingScoreButton,
  RatingScoreButtonsContainer,
  SubmitButton,
  Title,
} from './style';

function RatingCardForm() {
  return (
    <Card>
      <Decoration>
        <StarIcon />
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
