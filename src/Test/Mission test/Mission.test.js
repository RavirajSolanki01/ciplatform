import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Mission } from "../../Components";
import { store } from "../../Redux/store";

describe("Missions test", () => {
  const MockMission = () => {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Mission />
        </Provider>
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
  // test("Should render Searchbar on page load", () => {
  //   render(<MockMission />);
  //   const searchbar = screen.getByTestId("searchbar");
  //   expect(searchbar).toBeInTheDocument();
  // });
});
