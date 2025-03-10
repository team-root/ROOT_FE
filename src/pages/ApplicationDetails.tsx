import React, { useState } from "react";
import styled from "styled-components";
import { StudentApplication, VolunteerBar } from "../components";
import { colors } from "../theme";

interface Applicant {
  applicationId: number;
  userId: number;
  name: string;
  grade: number;
  classNum: number;
  number: number;
}

interface ApplicantsData {
  applicants: Applicant[];
}

export const ApplicationDetails = () => {
  const [applications, setApplications] = useState<ApplicantsData>({
    applicants: [
      {
        applicationId: 1,
        userId: 2,
        name: "박지연",
        grade: 1,
        classNum: 1,
        number: 12,
      },
      {
        applicationId: 2,
        userId: 1,
        name: "김시우",
        grade: 1,
        classNum: 1,
        number: 3,
      },
      {
        applicationId: 3,
        userId: 3,
        name: "이서연",
        grade: 2,
        classNum: 3,
        number: 8,
      },
      {
        applicationId: 4,
        userId: 4,
        name: "정민호",
        grade: 3,
        classNum: 2,
        number: 5,
      },
      {
        applicationId: 5,
        userId: 5,
        name: "최다은",
        grade: 2,
        classNum: 4,
        number: 9,
      },
      {
        applicationId: 6,
        userId: 6,
        name: "한지후",
        grade: 3,
        classNum: 1,
        number: 17,
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
            applicationId={student.applicationId}
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
