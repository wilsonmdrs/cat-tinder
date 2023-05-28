import React from "react";
import { render } from "@testing-library/react-native";
import CustomIcon from "../CustomIcon";
import { HeartIcon } from "../../../assets";

describe("CustomIcon", () => {
  it("renders the icon with the correct size and color", () => {
    const size = 24;
    const color = "red";

    const { getByTestId } = render(
      <CustomIcon size={size} color={color} icon={<HeartIcon />} />
    );

    const iconElement = getByTestId("custom-icon");

    expect(iconElement.props.width).toBe(size);
    expect(iconElement.props.height).toBe(size);
    expect(iconElement.props.fill).toBe(color);
    expect(iconElement.props.stroke).toBe(color);
    expect(iconElement.props.color).toBe(color);
  });
});
