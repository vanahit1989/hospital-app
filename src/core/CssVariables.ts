/**
 * https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
 * declare here antd variables and additional variables
 *
 * antd variables should be declared in camel case,
 * it will be formatted in kebab case and used in less loader to overwrite antd styles
 *
 * !!!
 * Please, use full color codes (i.e. #eeeeee instead of #eee).
 * And don't use less variables as values (like `inputHoverBorderColor: 'primaryColor'`).
 * Otherwise ColorHelper will not work properly.
 * !!!
 */

export enum Colors {
  PrimaryColor = '#602DD3',
  SecondaryColor = '#9A49FF',
  InfoColor = '#0078F9',
  InfoColorHover = '#3295FF',
  SuccessColor = '#39B473',
  SuccessColorOpacity = '#39B47380',
  SuccessColorOpacity20 = 'rgba(57, 180, 115, 0.2);',
  SuccessColorOpacity30 = 'rgba(57, 180, 115, 0.3);',
  SuccessColorHover = '#2ECB77',
  WarningColor = '#F6AE2D',
  WarningColorOpacity20 = 'rgba(246, 174, 45, 0.2)',
  WarningColorOpacity30 = 'rgba(246, 174, 45, 0.3)',
  WarningColorHover = '#ECBE6C',
  ErrorColor = '#FF4141',
  ErrorColorHover = '#FF6161',
  DarkPurple = '#4E277E',
  LightPurple = 'rgba(154, 73, 255, 0.1)',
  White = '#ffffff',
  WhiteOpacity = '#FFFFFF80',
  LightBackground = '#F6F6F6',
  Grey = '#606060',
  Dark = '#121920',
  DarkGrey = '#222C37',
  RowHover = '#0f141a',
  DisabledGrey = '#6060604D',
  LightBorderColor = '#ECECEC',
  DarkBorderColor = '#2D2D2D',
  LightGrey = '#9E9E9E',
  DisabledLightGrey = '#606060B2',
  TextColorPrimary = '#1C2732',
  Orange = '#FF6D3F',
  Transparent = 'transparent',
  InfoColorOpacity = '#0078F910',
  LightInput = '#FBFBFB',
  RedOpacity = 'rgba(255, 65, 65, 0.1)',
  Pink = '#C61CCA',
  PinkHoverColor = '#DE0FE2',
  Black = '#000000',
  LightBlue = '#00C2FF',
  DarkBlue = '#0035BD',
}

export enum FontFamilies {
  FontPrimary = 'Poppins, sans-serif',
  FontSecondary = 'Roboto, sans-serif',
}

export enum FontSizes {
  FontXXS = 10,
  FontXS = 12,
  FontSM = 14,
  FontMD = 16,
  FontLG = 24,
  FontXL = 32,
  FontXXL = 40,
}

export enum Spacing {
  SpacingXXS = 4,
  SpacingXS = 8,
  SpacingSM = 12,
  SpacingMD = 14,
  SpacingLG = 16,
  SpacingXL = 32,
  SpacingXXL = 40,
  SpacingXXXL = 64,
}

export enum Screens {
  ScreensXXXL = '1920px',
  ScreensXXL = '1599px',
  ScreensXL = '1199px',
  ScreensLG = '991px',
  ScreensMD = '767px',
  ScreensSM = '575px',
  ScreensXS = '479px',
}
export enum FontWeights {
  Light = 300,
  Regular = 400,
  Medium = 500,
  SemiBold = 600,
}
export enum LineHeights {
  ExtraShort = '1',
  Short = '1.25',
  Tall = '1.28',
  MediumTall = '1.5',
  ExtraTall = '1.7',
}

export enum BorderRadiuses {
  RadiusXXS = 4,
  RadiusXS = 8,
  RadiusSM = 12,
  RadiusMD = 16,
  RadiusLG = 20,
}

export enum Sizes {
  HeightBase = 40,
  HeightSmall = 20,
}
export enum Gradients {
  Primary = 'linear-gradient(6.63deg, #602DD3 44.41%, #9A49FF 93.14%)',
}
export const fontSizes = [
  FontSizes.FontXXL,
  FontSizes.FontXL,
  FontSizes.FontLG,
  FontSizes.FontMD,
  FontSizes.FontSM,
  FontSizes.FontXS,
  FontSizes.FontXXS,
];

export const marginBottom = [
  Spacing.SpacingXXXL,
  Spacing.SpacingXXL,
  Spacing.SpacingXL,
  Spacing.SpacingLG,
  Spacing.SpacingMD,
  Spacing.SpacingSM,
  Spacing.SpacingXS,
  Spacing.SpacingXXS,
];
