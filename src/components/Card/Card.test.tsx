import React from "react";
import { render, screen } from '@testing-library/react-native';
import { Card } from "./index";

describe("Card", () => {
  it("renders correctly with the provided props", () => {
    const imageUrl = "https://example.com/cat.jpg";
    const name = "Fluffy";
    const origin = "Unknown";
    const age = "3";

    render(
      <Card imageUrl={imageUrl} name={name} origin={origin} age={age} />
    );

    const cardImage = screen.getByTestId("card-image");
    const textName = screen.getByText(name);
    const textCountry = screen.getByText(origin);
    const textAge = screen.getByText(age);

    expect(cardImage.props.source.uri).toBe(imageUrl);
    expect(textName.props.children).toBe(name);
    expect(textCountry.props.children).toBe(origin);
    expect(textAge.props.children).toBe(age);
  });
});
