import styled from 'styled-components';
import { Button, DateContainer, Inputs, Keyword, Title } from '../components';
import { useEffect, useState } from 'react';
import { colors } from '../theme';
import { apiCreateVolunteerActivity } from '../apis';

export const CreateVolunteerActivity = () => {
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const [roleInput, setRoleInput] = useState<string>('');
  const [datas, setDatas] = useState<{
    title: string;
    activityDetails: string;
    applicationPeriod: { startDate: string; endDate: string };
    isRegular: boolean;
    workDate: { startDate: string; endDate: string };
    workDay: { dayId: string; dayOfWeek: string }[];
    activityLocation: string;
    volunteerHours: string;
    numberOfVolunteers: string;
    roleItems: { roleId: string; title: string }[];
  }>({
    title: '',
    activityDetails: '',
    applicationPeriod: { startDate: '', endDate: '' },
    isRegular: isCheck,
    workDate: { startDate: '', endDate: '' },
    workDay: [], //api dayOfWeek
    activityLocation: '', //place
    volunteerHours: '', //time
    numberOfVolunteers: '', //personnel
    roleItems: [], //role
  });

  const api = apiCreateVolunteerActivity();

  const createClick = () => {
    api.mutate({
      title: datas.title,
      activityDetails: datas.activityDetails,
      applicationPeriod: {
        startDate: datas.applicationPeriod.startDate,
        endDate: datas.applicationPeriod.endDate,
      },
      isRegular: datas.isRegular,
      workDate: {
        startDate: datas.workDate.startDate,
        endDate: datas.workDate.endDate,
      },
      dayOfWeek: datas.workDay.map(({ dayId, dayOfWeek }) => ({
        dayId,
        dayOfWeek,
      })),
      place: datas.activityLocation,
      time: datas.volunteerHours,
      personnel: datas.numberOfVolunteers,
      role: datas.roleItems.map(({ roleId, title }) => ({
        roleId,
        title,
      })),
    });
  };

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
      const newRole = { roleId: crypto.randomUUID(), title: roleInput };
      setDatas((prev) => ({
        ...prev,
        roleItems: [...prev.roleItems, newRole],
      }));
      setRoleInput('');
    }
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
    setDatas((prev) => {
      const newWorkDay = days.map((day) => ({
        dayId: crypto.randomUUID(),
        dayOfWeek: day,
      }));

      return {
        ...prev,
        workDay: newWorkDay,
      };
    });
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
    <CreateVolunteerContainer>
      <CreateVolunteerContents>
        <CreateVolunteerContent>
          <Title>봉사활동 생성</Title>
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
              workDay={datas.workDay.map((item) => item.dayOfWeek)}
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
                {datas.roleItems.map((role) => (
                  <Keyword key={role.roleId}>{role.title}</Keyword>
                ))}
              </RoleContent>
            </RoleContainer>
          </InputContainer>
        </CreateVolunteerContent>
        <Button backgroundColor={colors.gray[550]} onClick={createClick}>
          생성하기
        </Button>
      </CreateVolunteerContents>
    </CreateVolunteerContainer>
  );
};

const CreateVolunteerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 140px 0 60px 0;
`;

const CreateVolunteerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: start;
`;

const CreateVolunteerContents = styled.div`
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
