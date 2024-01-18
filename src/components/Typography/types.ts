import { TitleProps } from "antd/es/typography/Title";
import { LinkProps } from "antd/es/typography/Link";
import { ParagraphProps } from "antd/es/typography/Paragraph";
import { TextProps } from "antd/es/typography/Text";

export type TLevel = 1 | 2 | 3 | 4 | 5;

export type TFontlevel = {
  fontSize?: number;
};
export type TColor = {
  color?: string;
};

export type TWeight = {
  fontWeight?: number;
};

export type TTypographyGeneralProps = {
  fontSize?: number;
  color?: string;
  fontWeight?: number;
  fontFamily?: string;
  lineHeight?: number;
};

export type TTitleProps = TitleProps & TTypographyGeneralProps;

export type TLinkProps = LinkProps & TTypographyGeneralProps;

export type TParagraphProps = ParagraphProps & TTypographyGeneralProps;

export type TTextProps = TextProps & TTypographyGeneralProps;
