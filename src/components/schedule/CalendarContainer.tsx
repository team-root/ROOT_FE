import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { CalendarContainerStyle, StyledCalendar } from './calendarStyle';
import { DotModal, LeftArrow, RightArrow } from '../../assets';
import styled from 'styled-components';
import { colors, font } from '../../theme';
import { useNavigate } from 'react-router-dom';
import { ScheduleBar } from './ScheduleBar';

interface CalendarType {
  data?: { title: string; startDate: string; endDate: string }[];
}

export const CalendarContainer = ({ data }: CalendarType) => {
  const datas = data;
  const [isOverFlowModal, setIsOverFlowModal] = useState<{
    [key: string]: boolean;
  }>({});

  const dotClick = (dateKey: string) => {
    setIsOverFlowModal((prev) => ({
      ...prev,
      [dateKey]: !prev[dateKey],
    }));
  };

  const navClick = (dateKey: string) => {
    setIsOverFlowModal((prev) => ({
      ...prev,
      [dateKey]: !prev[dateKey],
    }));

    //그 key에 맞는 api 보내서 일정 상세로 이동
  };

  const tileContent = ({ date }: { date: Date }) => {
    const formattedDate = date.toLocaleDateString('en-CA');
    const schedules = datas?.filter((schedule) => {
      const start = new Date(schedule.startDate);
      const end = new Date(schedule.endDate);
      const current = new Date(date);

      start.setHours(0, 0, 0, 0);
      end.setHours(0, 0, 0, 0);
      current.setHours(0, 0, 0, 0);

      return current >= start && current <= end;
    });

    const viewBar = schedules?.slice(0, 2);
    const hiddenBar = schedules?.slice(2);
    const isModalOpen = isOverFlowModal[formattedDate] || false;

    return schedules && schedules.length > 0 ? (
      <>
        <ScheduleWrapper>
          {viewBar?.map((data, index) => (
            <ScheduleBar
              key={`${data.title}-${index}`}
              $start={formattedDate === data.startDate}
              $end={formattedDate === data.endDate}
            >
              {data.title}
            </ScheduleBar>
          ))}
        </ScheduleWrapper>

        {hiddenBar && hiddenBar.length > 0 && (
          <>
            <DotModal onClick={() => dotClick(formattedDate)} />
            {isModalOpen && (
              <ModalContainer>
                {hiddenBar?.map((data, index) => (
                  <ModalNav
                    key={`${data.title}-${index}`}
                    onClick={() => navClick(formattedDate)}
                  >
                    {data.title}
                  </ModalNav>
                ))}
              </ModalContainer>
            )}
          </>
        )}
      </>
    ) : null;
  };

  const [value, onChange] = useState<Date>(new Date());
  // const [activeStartDate, setActiveStartDate] = useState<Date>(new Date());
  const navigate = useNavigate();

  const scheduleAddClick = () => {
    navigate('/create-schedule');
  };

  return (
    <>
      <CalendarContainerStyle>
        <NavContainer>
          <Container onClick={scheduleAddClick}>
            <Text>봉사 일정 추가</Text>
          </Container>
          <StyledCalendar
            // onActiveStartDateChange={({ activeStartDate }) =>
            //   setActiveStartDate(activeStartDate || new Date())
            // }
            //showNeighboringMonth={false} // 전달, 다음달 날짜 숨기기
            value={value}
            onChange={(value) => {
              if (value instanceof Date) {
                onChange(value);
              }
            }}
            locale="en-US" //영어로
            calendarType="gregory" // 일요일 부터 시작
            nextLabel={
              <button>
                <RightArrow />
              </button>
            }
            prevLabel={
              <button>
                <LeftArrow />
              </button>
            }
            tileContent={tileContent} //날짜 bar 컨텐츠
            next2Label={null}
            prev2Label={null}
            formatShortWeekday={(_, date) => {
              const weekdays = [
                'SUN',
                'MON',
                'TUE',
                'WED',
                'THU',
                'FRI',
                'SAT',
              ];
              return weekdays[date.getDay()];
            }}
          />
        </NavContainer>
      </CalendarContainerStyle>
    </>
  );
};

const ModalContainer = styled.div`
  width: 160px;
  height: 102px;
  overflow-y: auto;
  border-radius: 10px;
  border: 1px solid ${colors.gray[300]};
  background-color: ${colors.gray[100]};
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: -100px;
  left: 60px;
  z-index: 8;
`;

const ModalNav = styled.button`
  width: 100%;
  min-height: 50px;
  color: ${colors.gray[500]};
  font: ${font.Caption3};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: transparent;
  &:hover {
    background-color: ${colors.gray[200]};
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 840px;
  position: relative;
`;

const Container = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  width: 152px;
  height: 48px;
  border: 1px solid transparent;
  border-radius: 24px;
  background-color: transparent;
  background-image: linear-gradient(${colors.gray[600]}, ${colors.gray[600]}),
    linear-gradient(
      ${colors.main[300].direction},
      ${colors.main[300].from},
      ${colors.main[300].to}
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;
`;

const Text = styled.p`
  font-size: 12px;
  background: linear-gradient(
    ${colors.main[300].direction},
    ${colors.main[300].from},
    ${colors.main[300].to}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ScheduleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  z-index: 1;
`;
