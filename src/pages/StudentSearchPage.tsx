import styled from "styled-components";
import { DropDown } from "../components/search/DropDown";
import { colors, font } from "../theme";
import { useState, useMemo, useEffect } from "react";
import { Button, Students } from "../components";
import { noSearch } from "../assets";
import { VolunteerHoursGrantedModal } from "./VolunteerHoursGrantedModal";

export interface Student {
  id: number;
  name: string;
  grade: number;
  classNum: number;
  number: number;
  volunteerTime: number;
}

export const StudentSearchPage = () => {
  const [filter, setFilter] = useState<string>("학년순");
  const [inputValue, setInputValue] = useState<string>("");
  const [students] = useState<Student[]>([
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
  const [selectedStudents, setSelectedStudents] = useState<Student[]>([]);
  const [isShow, setIsShow] = useState<boolean>(false);

  const filteredStudents = useMemo(() => {
    let result = students;

    if (filter !== "학년순") {
      const G = Number(filter.charAt(0));
      const C = Number(filter.charAt(2));
      result = result.filter((x) => x.grade === G && x.classNum === C);
    }

    if (inputValue) {
      result = result.filter((x) => x.name.includes(inputValue));
    }

    return result;
  }, [filter, inputValue, students]);

  useEffect(() => {
    setFilter("학년순");
  }, []);

  const handleSelectStudent = (student: Student) => {
    setSelectedStudents((prev) =>
      prev.some((s) => s.id === student.id)
        ? prev.filter((s) => s.id !== student.id)
        : [...prev, student]
    );
  };

  const handleGrantHours = () => {
    setIsShow(false);
  };

  return (
    <>
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
              <DropDown setFilter={setFilter} />
            </div>
          </SearchBox>
        </TopBox>
        <StudentsBox>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <Students
                key={student.id}
                name={student.name}
                volunteerTime={student.volunteerTime}
                grade={student.grade}
                isSelected={selectedStudents.some((s) => s.id === student.id)}
                onClick={() => handleSelectStudent(student)}
              />
            ))
          ) : (
            <NoSearchBox src={noSearch} alt="검색 결과 없음" />
          )}
        </StudentsBox>
      </Container>
      {filteredStudents.length > 0 && (
        <Btn>
          <Button
            backgroundColor={colors.gray[550]}
            children="시간 부여"
            onClick={() => setIsShow(true)}
          />
        </Btn>
      )}
      <VolunteerHoursGrantedModal
        isShow={isShow}
        setIsShow={setIsShow}
        onClick={handleGrantHours}
      />
    </>
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
  height: 64vh;
  padding-top: 5px;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const NoSearchBox = styled.img`
  margin-top: auto;
  margin-bottom: auto;
`;
