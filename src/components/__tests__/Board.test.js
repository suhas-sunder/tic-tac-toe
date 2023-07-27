import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Board from "../Board";

describe("Check renders and display", () => {
  it("should render a board with 9 squares", () => {
    render(<Board squares={Array(9).fill("")} />);
    const divElement = screen.getByTestId(/board/i);
    const inputElements = screen.getAllByRole("checkbox");

    expect(inputElements).toHaveLength(9);
    expect(divElement).toBeInTheDocument();
  });

  // I could not get this test to work. Apparently it has to do with the way the test doesn't render CSS from styled components.
  //   it("should not render x or o element when board first loads", () => {
  //     render(<Board squares={Array(9).fill("X")} />);
  //     const spanElements = screen.queryAllByTestId(/charx/i);
  //     spanElements.forEach((element) => expect(element).not.toBeVisible());
  //   });
});

// Won't be able to get this test to work until I figure out how to detect visibility changes from styled components.
// describe("Check functionality", () => {
//   it("should display x or o when square is clicked", () => {
//     render(<Board squares={Array(9).fill("")} />);
//     const inputElements = screen.getAllByRole("checkbox");
//     fireEvent(inputElements).click();
//     const spanElements = expect(inputElements).toHaveLength(9);
//     expect(divElement).toBeInTheDocument();
//   });
// });
