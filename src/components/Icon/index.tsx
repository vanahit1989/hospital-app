import { FC } from 'react';
import IcomoonReact from 'icomoon-react';
import { TIconProps } from './Icon.type';
import iconSet from './selection.json';

const Icon: FC<TIconProps> = ({
  color,
  size = 24,
  icon,
  className = '',
  onClick,
  dataTestId = '',
  ...props
}) => {
  return (
    <IcomoonReact
      data-testid={dataTestId}
      className={`icon ${className}`}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
      onClick={onClick}
      {...props}
    />
  );
};

export { Icon };
