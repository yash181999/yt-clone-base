import React from 'react';
import {IconLibrary, IconName} from './icon-library';

type BaseIconProps = {
  name: IconName;
  size?: number;
  color?: string;
};

export const BaseIcon = ({name, size = 24, color}: BaseIconProps) => {
  const IconComponent = IconLibrary[name];
  return React.cloneElement(<IconComponent />, {
    width: size,
    height: size,
    stroke: color,
    fill: color,
  });
};
