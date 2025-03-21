import styled from 'styled-components';
import { DateInput } from './DateInput';
import { colors, font } from '../../theme';
import { Check } from '../../assets';
import { DayContainer } from './DayContainer ';

type DateType = {
  label?: string;
  onDateChange: (field: 'startDate' | 'endDate', value: string) => void;
  isCheck?: boolean;
  setIsCheck?: React.Dispatch<React.SetStateAction<boolean>>;
  isRegular?: boolean;
  onWorkDayChange?: (workDay: string[]) => void;
  value: {
    startDate: string;
    endDate: string;
  };
  workDay?: string[];
};

export const DateContainer = ({
  label,
  onDateChange,
  isCheck = false,
  setIsCheck,
  isRegular,
  onWorkDayChange,
  value,
  workDay = [],
}: DateType) => {
  const checkClick = () => {
    if (setIsCheck !== undefined) {
      setIsCheck(!isCheck);
    }
  };
  return (
    <AllContainer>
      <LabelContainer>
        <Label>{label}</Label>
        {isRegular && (
          <RegularCheckContainer>
            <RegularLabel>정기적</RegularLabel>
            <RegularCheckBox onClick={checkClick} isCheck={isCheck}>
              {isCheck && <Check />}
            </RegularCheckBox>
          </RegularCheckContainer>
        )}
      </LabelContainer>
      {isCheck ? (
        <DayContainer onWorkDayChange={onWorkDayChange} workDay={workDay} />
      ) : (
        <DateContentContainer>
          <DateInput
            onDateChange={(value) => onDateChange('startDate', value)}
            value={value.startDate}
          />
          <AndContent>~</AndContent>
          <DateInput
            onDateChange={(value) => onDateChange('endDate', value)}
            value={value.endDate}
          />
        </DateContentContainer>
      )}
    </AllContainer>
  );
};

const RegularCheckContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const RegularLabel = styled.label`
  font: ${font.Caption2};
  color: ${colors.gray[300]};
`;

const RegularCheckBox = styled.div<{ isCheck: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  border: 0.5px solid
    ${({ isCheck }) => (isCheck ? colors.main[100] : colors.gray[400])};
  background-color: ${({ isCheck }) =>
    isCheck ? colors.main[100] : 'transparent'};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LabelContainer = styled.div`
  display: flex;
  gap: 28px;
`;

const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: start;
`;

const Label = styled.label`
  font: ${font.Caption1};
  color: ${colors.gray[300]};
`;

const DateContentContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const AndContent = styled.div`
  font: ${font.Heading6};
  color: ${colors.gray[400]};
`;
