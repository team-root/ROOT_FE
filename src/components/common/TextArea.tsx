import styled from 'styled-components';
import { colors, font } from '../../theme';

type TextAreaType = {
  isLogin?: boolean;
  placeholder?: string;
  label?: string;
  onChange?: () => void;
  ref?: () => void;
  value?: string;
};

export const TextArea = ({
  placeholder,
  label,
  onChange,
  ref,
  value,
}: TextAreaType) => {
  return (
    <LabelContainer>
      <Label>{label}</Label>
      <TextAreaContainer
        placeholder={placeholder}
        onChange={onChange}
        ref={ref}
        value={value}
      />
    </LabelContainer>
  );
};

const LabelContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: start;
`;

const Label = styled.label`
  font: ${font.Caption1};
  color: ${colors.gray[300]};
`;

const TextAreaContainer = styled.textarea`
  width: 100%;
  height: 369px;
  padding: 16px 27px;
  border-radius: 10px;
  border: 1px solid ${colors.gray[400]};
  color: ${colors.gray[300]};
  background-color: ${colors.gray[550]};
  font: ${font.Caption2};
  &::placeholder {
    font: ${font.Caption2};
    color: ${colors.gray[300]};
  }
  resize: none;
`;
