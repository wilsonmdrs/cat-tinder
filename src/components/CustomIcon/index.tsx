import React, { Component, ReactElement } from 'react';
import { View, ViewProps } from 'react-native';

interface CustomIconProps extends ViewProps {
  size: number;
  color: string;
  icon: ReactElement;
}

class CustomIcon extends Component<CustomIconProps> {
  render() {
    const { size, color, icon } = this.props;

    return (
      <View>
        {React.cloneElement(icon, {
          width: size,
          height: size,
          fill: color,
          stroke: color,
          color: color,
        })}
      </View>
    );
  }
}

export default CustomIcon;
