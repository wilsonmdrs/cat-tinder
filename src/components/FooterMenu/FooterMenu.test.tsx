import React from 'react';
import { render, screen } from '@testing-library/react-native';
import CustomIcon from '../CustomIcon';
import { Path, Svg } from 'react-native-svg';

interface XIconProps {
  width: number;
  height: number;
  color: string;
  testID: string;
}

const Icon: React.FC<XIconProps> = ({ width, height, color, testID }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={color}
      testID={testID}
      stroke={color}
      color={color}
    >
      <Path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
    </Svg>
  );
};

describe('CustomIcon', () => {
  it('renders the icon with the correct size and color', () => {
    const size = 24;
    const color = 'red';

    render(
      <CustomIcon
        size={size}
        color={color}
        icon={
          <Icon width={size} height={size} color={color} testID="custom-icon" />
        }
      />
    );

    const iconElement = screen.getByTestId('custom-icon');

    expect(iconElement.props.width).toBe(size);
    expect(iconElement.props.height).toBe(size);
    expect(iconElement.props.fill).toBe(color);
    expect(iconElement.props.stroke).toBe(color);
    expect(iconElement.props.color).toBe(color);
  });
});
