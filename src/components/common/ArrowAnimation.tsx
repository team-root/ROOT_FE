import styled, { keyframes } from "styled-components";
import { nextSectionArrow } from "../../assets";

interface Props {
  onClick: () => void;
}

const ArrowAnimation = ({ onClick }: Props) => {
  return (
    <ArrowContainer onClick={onClick}>
      <Arrow src={nextSectionArrow} alt="V" delay="0" />
      <Arrow src={nextSectionArrow} alt="V" delay="0.2s" />
      <Arrow src={nextSectionArrow} alt="V" delay="0.4s" />
    </ArrowContainer>
  );
};

export default ArrowAnimation;

const bounce = keyframes`
  0% { opacity: 0; transform: translateY(-10px); }
  50% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(10px); }
`;

const ArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const Arrow = styled.img<{ delay?: string }>`
  transform: rotate(45deg);
  position: relative;
  animation: ${bounce} 2s infinite ease;
  animation-delay: ${({ delay }) => delay || "0s"};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -20px;
    width: 40px;
    height: 5px;
    background-color: white;
    border-radius: 5px;
    transform: rotate(-90deg);
  }
`;
