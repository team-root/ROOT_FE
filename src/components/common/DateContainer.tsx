import styled from 'styled-components';
import { DateInput } from './DateInput';
import { colors, font } from '../../theme';
import { useState } from 'react';

type DateType = {
  label?: string;
  onDateChange: (field: 'startDate' | 'endDate', value: string) => void;
};

export const DateContainer = ({ label, onDateChange }: DateType) => {
  return (
    <LabelContainer>
      <Label>{label}</Label>
      <DateContentContainer>
        <DateInput onDateChange={(value) => onDateChange('startDate', value)} />
        <AndContent>~</AndContent>
        <DateInput onDateChange={(value) => onDateChange('endDate', value)} />
      </DateContentContainer>
    </LabelContainer>
  );
};

const LabelContainer = styled.div`
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
