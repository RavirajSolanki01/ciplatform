import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Home } from "../../Components";
import { store } from "../../Redux/store";

describe("Home test", () => {
  const MockHome = () => {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
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
  test("Should render Pagination on page load", () => {
    render(<MockHome />);
    const paginate = screen.getByTestId("paginate");
    expect(paginate).toBeInTheDocument();
  });
  test("Should render Cookies agree div on page load", () => {
    render(<MockHome />);
    const cookies = screen.getByTestId("cookie-agree");
    expect(cookies).toBeInTheDocument();
  });
  test("Should render Cookies agree button on page load", () => {
    render(<MockHome />);
    const agreeBtn = screen.getByText(/i agree/i);
    expect(agreeBtn).toBeInTheDocument();
  });
  test("Should render close cookies div button on page load ", () => {
    render(<MockHome />);
    const closeCookies = screen.getByTestId("close-cookies");
    expect(closeCookies).toBeInTheDocument();
  });
  test("Should remove div on close button click", () => {
    render(<MockHome />);
    const closeBtn = screen.getByTestId("close-cookies");
    fireEvent.click(closeBtn);
    const cookies = screen.getByTestId("cookie-agree");
    expect(cookies).not.toBeVisible()
  });
  test("Should remove div on 'I agree' button click", () => {
    render(<MockHome />);
    const agreeBtn = screen.getByText(/i agree/i);
    fireEvent.click(agreeBtn);
    const cookiesDiv = screen.getByTestId("cookie-agree");
    expect(cookiesDiv).not.toBeVisible()
  });
});
