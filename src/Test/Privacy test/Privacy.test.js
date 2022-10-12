import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PrivacyPolicy from "../../Components/Privacy";

describe("Privacy Policy test", () => {
  const MockPrivacy = () => {
    return (
      <BrowserRouter>
        <PrivacyPolicy />
      </BrowserRouter>
    );
  };
  test("should present when page load", () => {
    render(<MockPrivacy />);
    const policyPage = screen.getByText(/privacy and cookies policy/i);
    expect(policyPage).toBeInTheDocument();
  });
  test("Privacy policy should be present when page load", () => {
    render(<MockPrivacy />);
    const points = screen.getByTestId("policy-points");
    expect(points).toBeInTheDocument();
  });
  test("Privacy policy should be present when page load", () => {
    render(<MockPrivacy />);
    const points = screen.getByTestId("footer");
    expect(points).toBeInTheDocument();
  });
  test("Navbar should be present when page load", () => {
    render(<MockPrivacy />);
    const points = screen.getByTestId("navbar");
    expect(points).toBeInTheDocument();
  });
});
describe("'active-point' class should be present on click", () => {
  const MockPrivacy = () => {
    return (
      <BrowserRouter>
        <PrivacyPolicy />
      </BrowserRouter>
    );
  };

  test("active-point class should be present on page load ", () => {
    render(<MockPrivacy />);
    const intro = screen.getByTestId("#intro");
    expect(intro).toHaveClass("active-point");
  });
  test("active-point class should be present on click of cookies ", () => {
    render(<MockPrivacy />);
    const cookies = screen.getByTestId("#cookies");
    fireEvent.click(cookies);
    expect(cookies).toHaveClass("active-point");
  });
  test("active-point class should be present on click of preferences ", () => {
    render(<MockPrivacy />);
    const pref = screen.getByTestId("#preferences");
    fireEvent.click(pref);
    expect(pref).toHaveClass("active-point");
  });
  test("active-point class should be present on click of introduction ", () => {
    render(<MockPrivacy />);
    const intro = screen.getByTestId("#intro");
    fireEvent.click(intro);
    expect(intro).toHaveClass("active-point");
  });
  test("Right arrow muct be visible", () => {
    render(<MockPrivacy />);
    const intro = screen.getAllByAltText(/arrow/i);
    expect(intro[0]).toBeVisible();
    expect(intro[1]).toBeVisible();
    expect(intro[2]).toBeVisible();
  });
  test("Right arrow muct be visible", () => {
    render(<MockPrivacy />);
    const introDiv = screen.getByTestId("intro-div");
    expect(introDiv).toBeInTheDocument();
    const cookiesDiv = screen.getByTestId("cookies-div");
    expect(cookiesDiv).toBeInTheDocument();
    const prefDiv = screen.getByTestId("pref-div");
    expect(prefDiv).toBeInTheDocument();
  });
});
