import styled from 'styled-components';
import { colors, font } from '../../theme';
import { date } from '../../assets';
import { useRef, useState } from 'react';

export const DateInput = () => {
  const [dateStr, setDateStr] = useState<string>('');
  const dateInputRef = useRef<HTMLInputElement>(null);

  const handleBlur = () => {
    const value = dateInputRef.current?.value;
    setDateStr(value || '');
  };

  const fakeDateClick = () => {
    dateInputRef.current?.showPicker();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDateStr(value || '');
  };

  return (
    <>
      <FakeDate onClick={fakeDateClick} dateStr={dateStr}>
        <img src={date} alt="date" />
        <DateContent>{dateStr}</DateContent>
      </FakeDate>
      <DateContainer
        type="date"
        ref={dateInputRef}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </>
  );
};

const DateContent = styled.div`
  font: ${font.Caption2};
  color: ${colors.gray[400]};
`;

const FakeDate = styled.div<{ dateStr: string }>`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid ${colors.gray[400]};
  background-color: ${colors.gray[550]};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${({ dateStr }) =>
    dateStr &&
    `
    gap: 12px;
    width: 128px;
    `}
`;

const DateContainer = styled.input`
  position: absolute;
  top: 60px;
  left: 0px;
  z-index: 10;
  opacity: 0;
`;
