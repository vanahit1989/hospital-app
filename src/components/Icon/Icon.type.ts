
export enum EIconNames {
  USERS = 'users',
  LAYERS = 'layers',
  USER = 'user',
  COMPANY = 'company',
  IMAGE_UPLOAD = 'imageUpload',
  LOGOUT = 'logout'
}

export type TIconProps = {
  isLoading?: boolean;
  color?: string;
  size?: number;
  icon: string;
  className?: string;
  onClick?: (e?: MouseEvent) => void;
  dataTestId?: string;
};
