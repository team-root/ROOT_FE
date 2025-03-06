import React from "react";
import styled from "styled-components";
import { colors, font } from "../../theme";

export interface StudentApplication {
  nameId: number;
  name: string;
  grade: string;
}

export const StudentApplication = ({
  nameId,
  name,
  grade,
}: StudentApplication) => {
  return (
    <Container>
      <ContentBox>
        <LeftBox>
          {name}
          <Grade>{grade}</Grade>
        </LeftBox>
        <RightBox>
          <BlueBtn>수락</BlueBtn>
          <RedBtn>거절</RedBtn>
        </RightBox>
      </ContentBox>
    </Container>
  );
};

const Container = styled.div`
  width: 1200px;
  box-sizing: border-box;
  padding: 45px 75px;
  background-color: ${colors.gray[550]};
`;

const ContentBox = styled.div`
  ${font.Heading6};
  color: ${colors.gray[100]};
  display: flex;
  justify-content: space-between;
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const RightBox = styled.div`
  display: flex;
  gap: 40px;
`;

const Grade = styled.div`
  ${font.Caption3};
  color: ${colors.main[200]};
  border: 1px solid ${colors.main[200]};
  border-radius: 12px;
  width: 64px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const BlueBtn = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 46px;
  gap: 10px;
  border: 1px solid ${colors.main[200]};
  border-radius: 8px;
  background-color: ${colors.gray[550]};
  ${font.Caption1};
  color: ${colors.main[200]};
`;

const RedBtn = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 46px;
  gap: 10px;
  border: 1px solid ${colors.error};
  border-radius: 8px;
  background-color: ${colors.gray[550]};
  ${font.Caption1};
  color: ${colors.error};
`;
