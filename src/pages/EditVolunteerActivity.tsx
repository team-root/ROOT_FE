import styled from 'styled-components';
import { Button, DateContainer, Inputs, Keyword, Title } from '../components';
import { useEffect, useState } from 'react';
import { colors } from '../theme';

export const EditVolunteerActivity = () => {
  const [isCheck, setIsCheck] = useState<boolean>(true);
  const [roleInput, setRoleInput] = useState<string>('');
  const [datas, setDatas] = useState<{
    title: string;
    activityDetails: string;
    applicationPeriod: { startDate: string; endDate: string };
    isRegular: boolean;
    workDate: { startDate: string; endDate: string };
    workDay: string[];
    activityLocation: string;
    volunteerHours: string;
    numberOfVolunteers: string;
    roleItems: string[];
  }>({
    title: '환경 지킴이 활동',
    activityDetails: '청소할거임.',
    applicationPeriod: { startDate: '2024-10-23', endDate: '2024-10-23' },
    isRegular: isCheck,
    workDate: { startDate: '2024-10-23', endDate: '2024-10-23' },
    workDay: ['월', '수'],
    activityLocation: '교내',
    volunteerHours: '10시간/학기',
    numberOfVolunteers: '60명 이내',
    roleItems: ['교장실 청소', '교장실 청소'],
  });

  useEffect(() => {
    setDatas((prev) => ({
      ...prev,
      isRegular: isCheck,
    }));
  }, [isCheck]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDatas((prev) => ({
      ...prev,
      title: value,
    }));
  };

  const handleActivityDetailsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setDatas((prev) => ({
      ...prev,
      activityDetails: value,
    }));
  };

  const handleActivityLocationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setDatas((prev) => ({
      ...prev,
      activityLocation: value,
    }));
  };

  const handleVolunteerHoursChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setDatas((prev) => ({
      ...prev,
      volunteerHours: value,
    }));
  };

  const handleNumberOfVolunteersChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setDatas((prev) => ({
      ...prev,
      numberOfVolunteers: value,
    }));
  };

  const roleAddClick = () => {
    if (roleInput) {
      setDatas((prev) => {
        const updatedRoleItems = [...prev.roleItems, roleInput];
        return {
          ...prev,
          roleItems: updatedRoleItems,
        };
      });
    }
    setRoleInput('');
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoleInput(e.target.value);
  };

  const handleApplicationPeriodChange = (
    field: 'startDate' | 'endDate',
    value: string
  ) => {
    setDatas((prev) => ({
      ...prev,
      applicationPeriod: {
        ...prev.applicationPeriod,
        [field]: value,
      },
    }));
  };

  const handleWorkDateChange = (
    field: 'startDate' | 'endDate',
    value: string
  ) => {
    setDatas((prev) => ({
      ...prev,
      workDate: {
        ...prev.workDate,
        [field]: value,
      },
    }));
  };

  const handleDaysChange = (days: string[]) => {
    setDatas((prev) => ({
      ...prev,
      workDay: days,
    }));
  };

  useEffect(() => {
    if (datas.isRegular) {
      setDatas((prev) => ({
        ...prev,
        workDate: { startDate: '', endDate: '' },
      }));
    } else {
      setDatas((prev) => ({
        ...prev,
        workDay: [],
      }));
    }
  }, [datas.isRegular]);

  return (
    <EditVolunteerContainer>
      <EditVolunteerContents>
        <EditVolunteerContent>
          <Title>봉사활동 수정</Title>
          <InputContainer>
            <Inputs
              label="제목"
              placeholder="제목을 입력하세요"
              value={datas.title}
              onChange={handleTitleChange}
            />
            <Inputs
              label="활동내용"
              placeholder="활동내용을 입력하세요"
              value={datas.activityDetails}
              onChange={handleActivityDetailsChange}
            />
            <DateContainer
              label="신청기간"
              onDateChange={handleApplicationPeriodChange}
              value={datas.applicationPeriod}
            />
            <DateContainer
              label="봉사기간"
              isRegular={true}
              isCheck={isCheck}
              setIsCheck={setIsCheck}
              onDateChange={handleWorkDateChange}
              onWorkDayChange={handleDaysChange}
              value={datas.workDate}
              workDay={datas.workDay}
            />
            <Inputs
              label="활동장소"
              placeholder="활동장소를 입력하세요"
              value={datas.activityLocation}
              onChange={handleActivityLocationChange}
            />
            <SubInputContainer>
              <Inputs
                label="봉사시간"
                placeholder="봉사시간을 입력하세요"
                value={datas.volunteerHours}
                onChange={handleVolunteerHoursChange}
              />
              <Inputs
                label="봉사인원"
                placeholder="봉사인원을 입력하세요"
                value={datas.numberOfVolunteers}
                onChange={handleNumberOfVolunteersChange}
              />
            </SubInputContainer>
            <RoleContainer>
              <RoleInputContainer>
                <Inputs
                  label="봉사역할"
                  placeholder="봉사역할을 입력하세요"
                  onChange={handleRoleChange}
                  value={roleInput}
                />
                <AddRoleBtn onClick={roleAddClick}>+</AddRoleBtn>
              </RoleInputContainer>
              <RoleContent>
                {datas.roleItems.map((role, index) => (
                  <Keyword key={index}>{role}</Keyword>
                ))}
              </RoleContent>
            </RoleContainer>
          </InputContainer>
        </EditVolunteerContent>
        <Button backgroundColor={colors.gray[550]}>수정완료</Button>
      </EditVolunteerContents>
    </EditVolunteerContainer>
  );
};

const EditVolunteerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0 60px 0;
`;

const EditVolunteerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: start;
`;

const EditVolunteerContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: end;
`;

const AddRoleBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: ${colors.main[100]};
  border: 1px solid ${colors.main[100]};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: white;
`;

const RoleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const RoleInputContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: end;
`;

const RoleContent = styled.div`
  display: flex;
  gap: 12px;
  width: 834px;
  flex-wrap: wrap;
`;

const SubInputContainer = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const InputContainer = styled.div`
  width: 840px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
