import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MissionCarousel } from "../../Components/Mission/MissionElements/MissionCarousel";

describe("Mission Carousel test", () => {
  const MockMissionCarousel = () => {
    return (
      <BrowserRouter>
        <MissionCarousel />
      </BrowserRouter>
    );
  };

  test("Mission carousel should render on page load", () => {
    render(<MockMissionCarousel />);
    const MisCarDiv = screen.getByTestId("mission-carousel");
    expect(MisCarDiv).toBeInTheDocument();
  });
  test("Mission carousel should render on page load", () => {
    render(<MockMissionCarousel />);
    const norBtn = screen.getByTestId("normal-btn");
    expect(norBtn).toBeInTheDocument();
  });
  test("Mission carousel should render on page load", () => {
    render(<MockMissionCarousel />);
    const infoClass = screen.getByTestId("info-class");
    expect(infoClass).toBeInTheDocument();
  });
});
