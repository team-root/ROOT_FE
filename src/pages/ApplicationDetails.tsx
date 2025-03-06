import React, { useState } from "react";
import styled from "styled-components";
import { StudentApplication, VolunteerBar } from "../components";
import { colors } from "../theme";

interface Applications {
  applicants: StudentApplication[];
}

export const ApplicationDetails = () => {
  const [applications, setApplications] = useState<Applications>({
    applicants: [
      {
        nameId: 1,
        name: "박지연",
        grade: "1학년",
      },
      {
        nameId: 2,
        name: "김시우",
        grade: "1학년",
      },
      {
        nameId: 3,
        name: "이민재",
        grade: "2학년",
      },
      {
        nameId: 4,
        name: "정수빈",
        grade: "2학년",
      },
      {
        nameId: 5,
        name: "최윤호",
        grade: "3학년",
      },
    ],
  });

  return (
    <Container>
      <BarBox>
        <VolunteerBar />
      </BarBox>
      <MainBox>
        {applications.applicants.map((student) => (
          <StudentApplication
            nameId={student.nameId}
            name={student.name}
            grade={student.grade}
          />
        ))}
      </MainBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 70px);
  padding-top: 70px;
`;

const BarBox = styled.div`
  width: 90vw;
  border-bottom: 1px solid ${colors.gray[300]};
  margin-left: auto;
  margin-right: auto;
`;

const MainBox = styled.div`
  padding: 84px 0 0 100px;
  width: 100vw;
  height: 85vh;
  display: flex;
  flex-direction: column;
  gap: 56px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
