import styled from "styled-components";

type Gradient = {
  direction: string;
  from: string;
  to: string;
};

type ButtonProps = {
  borderColor: string | Gradient;
  backgroundColor: string;
  color: string | Gradient;
  text: string;
};

type ContainerProps = Omit<ButtonProps, "text" | "color">;
type TextType = Pick<ButtonProps, "color">;

export const Button = ({
  borderColor,
  backgroundColor,
  color,
  text,
}: ButtonProps) => {
  return (
    <Container borderColor={borderColor} backgroundColor={backgroundColor}>
      <Text color={color}>{text}</Text>
    </Container>
  );
};

const Container = styled.button<ContainerProps>`
  padding: 13px 46px;
  border: 1px solid transparent;
  border-radius: 8px;

  ${({ borderColor, backgroundColor }) =>
    typeof borderColor === "object"
      ? `
        background-image: linear-gradient(${backgroundColor}, ${backgroundColor}), 
        linear-gradient(${borderColor.direction}, ${borderColor.from}, ${borderColor.to});
        background-origin: border-box;
        background-clip: padding-box, border-box;
    `
      : `border-color: ${borderColor};`}
`;

const Text = styled.p<TextType>`
  font-size: 12px;

  ${({ color }) =>
    typeof color === "object"
      ? `
    background: linear-gradient(${color.direction}, ${color.from}, ${color.to});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `
      : `color: ${color}`};
`;
