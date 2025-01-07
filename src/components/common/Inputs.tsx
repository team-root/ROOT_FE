import styled from 'styled-components';
import { colors, font } from '../../theme';
import { Eyes } from '../../assets/icons/Eyes';
import { useState } from 'react';

type InputType = {
  isLogin?: boolean;
  placeholder?: string;
  label?: string;
};

export const Inputs = ({ isLogin, placeholder, label }: InputType) => {
  const [isEyes, setIsEyes] = useState<boolean>(false);

  const eyesClick = () => {
    setIsEyes(!isEyes);
  };

  return (
    <LabelContainer>
      <Label>{label}</Label>
      <FakeInputContainer>
        <InputContainer
          type={isEyes ? 'password' : 'text'}
          placeholder={placeholder}
        />
        {isLogin && (
          <FakeEyeContainer onClick={eyesClick}>
            <Eyes isPwd={isEyes} />
          </FakeEyeContainer>
        )}
      </FakeInputContainer>
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

const InputContainer = styled.input`
  &::placeholder {
    color: ${colors.gray[300]};
  }
  font: ${font.Caption2};
  color: ${colors.gray[300]};
  width: 100%;
  height: 50px;
  border: 1px solid ${colors.gray[400]};
  border-radius: 10px;
  padding-left: 28px;
  background-color: ${colors.gray[550]};
`;

const FakeInputContainer = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
`;

const FakeEyeContainer = styled.div`
  width: 18px;
  height: 15px;
  position: absolute;
  right: 24px;
  top: 17px;
`;
