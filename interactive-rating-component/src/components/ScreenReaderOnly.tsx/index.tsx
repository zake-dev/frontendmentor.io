import InvisibleText from '@/components/ScreenReaderOnly.tsx/style';

type Props = {
  description?: string;
};

function ScreenReaderOnly({ description = '' }: Props) {
  return <InvisibleText>{description}</InvisibleText>;
}

export default ScreenReaderOnly;
