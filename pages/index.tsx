import styled from '@emotion/styled';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { DefaultStore } from 'src/stores/defaultStore';

function HomePage() {
  const { number, increaseNumber, decreaseNumber } = DefaultStore;
  const [reviews, setReviews] = useState(null);

  const handleGetReviews = () => {
    // Client-side request are mocked by `mocks/browser.js`.
    fetch('/reviews')
      .then((res) => res.json())
      .then(setReviews);
  };

  useEffect(() => {
    handleGetReviews();
  }, []);

  console.log('MSW로 가져오는 리뷰', reviews);

  return (
    <Container>
      <div>
        <Title>Welcome to Next.js!</Title>
        <Subtitle>
          NextJs, React, Typescript, Mobx, Emotion으로
          <br />
          만든 보일러플레이트 입니다
        </Subtitle>
        <br />
        <br />
        <br />
        <Subtitle>{number}</Subtitle>
        <br />
        <Center>
          <CounterButton onClick={() => increaseNumber()}>+</CounterButton>
          <CounterButton onClick={() => decreaseNumber()}>-</CounterButton>
        </Center>
      </div>
    </Container>
  );
}

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  text-align: center;
  font-size: 48px;
  margin-bottom: 40px;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 32px;
`;

const CounterButton = styled.button`
  width: 100px;
  height: 100px;
  font-size: 32px;
`;

export default observer(HomePage);
