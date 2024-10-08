import React from "react";
import PropTypes from 'prop-types';
import type { IconProps } from '@tamagui/helpers-icon';
import {
  Svg,
  Circle as _Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text as _Text,
  Use,
  Defs,
  Stop } from
'react-native-svg';
import { themed } from '@tamagui/helpers-icon';

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}>

      <_Circle cx="12" cy="12" r="8" stroke={color} />
      <Line x1="3" x2="6" y1="3" y2="6" stroke={color} />
      <Line x1="21" x2="18" y1="3" y2="6" stroke={color} />
      <Line x1="3" x2="6" y1="21" y2="18" stroke={color} />
      <Line x1="21" x2="18" y1="21" y2="18" stroke={color} />
    </Svg>);

};

Icon.displayName = 'Currency';

export const Currency = React.memo<IconProps>(themed(Icon));