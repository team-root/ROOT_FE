import styled from "styled-components";
import { DropDown } from "../components/search/DropDown";
import { colors, font } from "../theme";
import { useEffect, useState } from "react";
import { Button } from "../components";

interface Student {
  id: number;
  name: string;
  grade: number;
  classNum: number;
  number: number;
  volunteerTime: number;
}

export const StudentSearchPage = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [students, setStudents] = useState<Student[]>([
    {
      id: 1,
      name: "김철수",
      grade: 1,
      classNum: 3,
      number: 15,
      volunteerTime: 10,
    },
    {
      id: 2,
      name: "김영희",
      grade: 2,
      classNum: 1,
      number: 7,
      volunteerTime: 5,
    },
    {
      id: 3,
      name: "박지훈",
      grade: 3,
      classNum: 2,
      number: 21,
      volunteerTime: 20,
    },
    {
      id: 4,
      name: "최민서",
      grade: 1,
      classNum: 4,
      number: 10,
      volunteerTime: 8,
    },
    {
      id: 5,
      name: "정하은",
      grade: 2,
      classNum: 3,
      number: 18,
      volunteerTime: 15,
    },
  ]);
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);

  useEffect(() => {
    setFilteredStudents(students.filter((x) => x.name.includes(inputValue)));
  }, [inputValue]);

  return (
    <Container>
      <TopBox>
        학생검색
        <SearchBox>
          <Searchbar
            type="text"
            placeholder="이름을 입력하세요"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div>
            <DropDown />
          </div>
        </SearchBox>
      </TopBox>
      <StudentsBox>
        {filteredStudents.map((student) => (
          <Student>
            <StudentLeftBox>
              {student.name}
              <Grade>{student.grade}학년</Grade>
            </StudentLeftBox>
            {student.volunteerTime}시간
          </Student>
        ))}
      </StudentsBox>
      <Btn>
        <Button backgroundColor={colors.gray[550]} children="시간 부여" />
      </Btn>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  margin-top: 70px;
  padding-top: 70px;
  position: relative;
`;

const Btn = styled.div`
  position: absolute;
  bottom: 7.5vh;
  right: 12vw;
`;

const TopBox = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${font.Heading5};
  color: #fff;
  gap: 40px;
`;

const SearchBox = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  gap: 24px;
`;

const Searchbar = styled.input`
  width: 530px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid ${colors.gray[400]};
  padding: 16px 27px;
  ${font.Caption4};
  color: ${colors.gray[300]};
  background-color: ${colors.gray[550]};
`;

const StudentsBox = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 42px;
  align-items: center;
  margin-top: 42px;
  overflow-y: auto;
  max-height: 64vh;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Student = styled.div`
  width: 1000px;
  height: 158px;
  border-radius: 20px;
  background-color: ${colors.gray[550]};
  padding: 45px 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${font.Heading5};
  color: #fff;
`;

const StudentLeftBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  ${font.Heading6};
  color: ${colors.gray[200]};
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
