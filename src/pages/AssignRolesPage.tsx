import React, { useState } from "react";
import styled from "styled-components";
import {
  AssignRoleStudent,
  StudentApplication,
  VolunteerBar,
} from "../components";
import { colors } from "../theme";

interface Student {
  userId: number;
  name: string;
  grade: string;
}

interface StudentData {
  students: Student[];
  roles: string[];
}

export const AssignRolesPage = () => {
  const [students, setStudents] = useState<StudentData>({
    students: [
      {
        userId: 1,
        name: "박지연",
        grade: "1학년",
      },
      {
        userId: 2,
        name: "김시우",
        grade: "1학년",
      },
      {
        userId: 3,
        name: "이민재",
        grade: "2학년",
      },
      {
        userId: 4,
        name: "정수빈",
        grade: "2학년",
      },
      {
        userId: 5,
        name: "최윤호",
        grade: "3학년",
      },
    ],
    roles: ["청소부", "배달부", "정리정돈 담당", "환경미화원"],
  });

  return (
    <Container>
      <BarBox>
        <VolunteerBar />
      </BarBox>
      <MainBox>
        {students.students.map((student) => (
          <AssignRoleStudent
            userId={student.userId}
            name={student.name}
            grade={student.grade}
            roles={students.roles}
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
