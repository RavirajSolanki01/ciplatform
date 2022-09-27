import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "../../Components/Home/Home";

describe("Home test", () => {
  const MockHome = () => {
    return (
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  };

  test("Should render navbar on page load", () => {
    render(<MockHome />);
    const navDiv = screen.getByTestId("navbar");
    expect(navDiv).toBeInTheDocument();
  });
  test("Should render missionbar on page load", () => {
    render(<MockHome />);
    const missionbar = screen.getByTestId("missionbar");
    expect(missionbar).toBeInTheDocument();
  });
  test("Should render mission listing on page load", () => {
    render(<MockHome />);
    const missionListing = screen.getByTestId("mission-listing");
    expect(missionListing).toBeInTheDocument();
  });
  test("Should render Searchbar on page load", () => {
    render(<MockHome />);
    const searchbar = screen.getByTestId("searchbar");
    expect(searchbar).toBeInTheDocument();
  });
  test("Should render tagbar on page load", () => {
    render(<MockHome />);
    const tagbar = screen.getByTestId("tagbar");
    expect(tagbar).toBeInTheDocument();
  });
});
