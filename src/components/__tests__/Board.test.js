import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Board from "../main/Board";
import Styles from "./Board.module.scss";

describe("Check renders and display", () => {
  it("should render a board with 9 squares", () => {
    render(<Board squares={Array(9).fill("")} />);
    const divElement = screen.getByTestId(/board/i);
    const inputElements = screen.getAllByRole("checkbox");

    expect(inputElements).toHaveLength(9);
    expect(divElement).toBeInTheDocument();
  });

  it("should not render x or o element when board first loads", () => {
    render(<Board squares={Array(9).fill("X")} />);
    const spanElements = screen.getAllByTestId(/charx/i);
    spanElements.forEach((element) =>
      expect(element).toHaveClass(Styles.square__text)
    );
  });
});

describe("Check functionality", () => {
  //Toggle checkbox for all elements
  const toggleCheckbox = (inputElements) => {
    inputElements.forEach((element) =>
      fireEvent.change(element, { target: { checked: true } })
    );

    return inputElements.forEach((element) =>
      expect(element.checked).toBe(true)
    );
  };

  it("should activate checkbox when clicked", () => {
    render(<Board squares={Array(9).fill("")} />);
    const inputElements = screen.getAllByRole("checkbox");
    toggleCheckbox(inputElements);
  });

  it("should not toggle checkbox to false/unchecked on subsequent clicks", () => {
    render(<Board squares={Array(9).fill("")} />);
    const inputElements = screen.getAllByRole("checkbox");
    toggleCheckbox(inputElements);
    toggleCheckbox(inputElements);
  });

  // When singlePlayer is active, check if toggling one checkbox (player input) automatically toggles another (computer input)
  
});

// In App.js test if certain input combinations trigger game over menu