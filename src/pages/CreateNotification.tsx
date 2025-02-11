import styled from 'styled-components';
import { colors } from '../theme';
import { Button, Inputs, TextArea, Title } from '../components';
import { useState } from 'react';

export const CreateNotification = () => {
  const [datas, setDatas] = useState<{
    title: string;
    content: string;
  }>({
    title: '',
    content: '',
  });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDatas((prev) => ({
      ...prev,
      title: value,
    }));
  };

  const handleAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setDatas((prev) => ({
      ...prev,
      content: value,
    }));
  };

  console.log(datas);

  return (
    <Container>
      <Content>
        <ContentContainer>
          <Title>알림 생성</Title>
          <InputContainer>
            <Inputs
              label="제목"
              placeholder="제목을 입력하세요"
              value={datas.title}
              onChange={handleTitleChange}
            />
            <TextArea
              label="내용"
              placeholder="내용을 입력하세요"
              value={datas.content}
              onChange={handleAreaChange}
            />
          </InputContainer>
        </ContentContainer>
        <Button backgroundColor={colors.gray[550]}>생성하기</Button>
      </Content>
    </Container>
  );
};

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: start;
`;

const Content = styled.div`
  width: 840px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  gap: 50px;
`;

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: 140px 0;
`;
