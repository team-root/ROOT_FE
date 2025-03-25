import styled from "styled-components";
import { colors, font } from "../../theme";
import { RolesDropDown } from "./RoleDropDown";

interface AssignRoleStudent {
  userId: number;
  name: string;
  grade: string;
  roles: string[];
}

export const AssignRoleStudent = ({
  userId,
  name,
  grade,
  roles,
}: AssignRoleStudent) => {
  return (
    <Container>
      <ContentBox>
        <LeftBox>
          {name}
          <Grade>{grade}</Grade>
        </LeftBox>
        <RightBox>
          <RolesDropDown roles={roles} />
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

const RightBox = styled.div``;
