import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Mission } from "../../Components";

describe("Missions test", () => {
  const MockMission = () => {
    return (
      <BrowserRouter>
        <Mission />
      </BrowserRouter>
    );
  };

  test("Navbar should render on page load", () => {
    render(<MockMission />);
    const navDiv = screen.getByTestId("navbar");
    expect(navDiv).toBeInTheDocument();
  });
  test("Should render Searchbar on page load", () => {
    render(<MockMission />);
    const searchbar = screen.getByTestId("searchbar");
    expect(searchbar).toBeInTheDocument();
  });
  test("Should render Searchbar on page load", () => {
    render(<MockMission />);
    const searchbar = screen.getByTestId("searchbar");
    expect(searchbar).toBeInTheDocument();
  });
});
