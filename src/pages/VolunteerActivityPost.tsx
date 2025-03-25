import { useState } from 'react';
import { Button, Post } from '../components';
import styled from 'styled-components';
import { colors } from '../theme';

export const VolunteerActivityPost = () => {
  const [datas, setDatas] = useState<Array<{ postId: number; title: string }>>([
    {
      postId: 1,
      title: '환경 지킴이 봉사활동',
    },
    {
      postId: 2,
      title: '환경 지킴이 봉사활동',
    },
  ]);

  return (
    <Container>
      <PostContainer>
        {datas.map((data) => (
          <Post key={data.postId}>{data.title}</Post>
        ))}
      </PostContainer>
      <BtnContainer>
        <Button backgroundColor={colors.gray[550]}>봉사 생성하기</Button>
      </BtnContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: 50px 0 60px 0;
`;

const BtnContainer = styled.div`
  position: fixed;
  bottom: 114px;
  right: 110px;
`;

const PostContainer = styled.div`
  width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
`;
