import Typography from "antd/es/typography";
import styled, { css } from "styled-components";
import {TTypographyGeneralProps} from "./types.ts";

const { Title, Text, Paragraph } = Typography;

const typographyGeneralProperties = ({fontSize, fontWeight, color, lineHeight, fontFamily,}: TTypographyGeneralProps) => css`
  ${fontSize && `font-size: ${fontSize}px`};
  ${fontWeight && `font-weight: ${fontWeight}`};
  ${color && `color: ${color}`};
  ${lineHeight && `line-height: ${lineHeight}`};
  ${fontFamily && `font-family: ${fontFamily}`};
  word-break: unset;
  margin-bottom: 0;
  margin-top: 0;
`;

export const STitle = styled(Title)`
  && {
    ${typographyGeneralProperties}
  }
`;

export const SText = styled(Text)`
  && {
    ${typographyGeneralProperties}
  }
`;

export const SParagraph = styled(Paragraph)`
  && {
    ${typographyGeneralProperties}
  }
`;
