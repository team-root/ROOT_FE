
export const fontGenerator = (weight: number, size: number, lineHeight: number) => ({
  fontWeight: weight,
  fontSize: `${size}px`,
  lineHeight: `${lineHeight}px`,
});

export const font = {
  Heading1: fontGenerator(700, 40, 60),
  Heading2: fontGenerator(700, 36, 54),
  Heading3: fontGenerator(700, 32, 48),
  Heading4: fontGenerator(600, 28, 40),
  Heading5: fontGenerator(600, 24, 36),
  Heading6: fontGenerator(600, 20, 28),

  Body1: fontGenerator(600, 16, 24), 
  Body2: fontGenerator(400, 16, 24), 
  Body3: fontGenerator(600, 14, 20), 
  Body4: fontGenerator(400, 14, 20), 

  Caption1: fontGenerator(600, 12, 18), 
  Caption2: fontGenerator(400, 12, 18), 
  Caption3: fontGenerator(600, 10, 16), 
  Caption4: fontGenerator(400, 10, 16), 
} as const;
