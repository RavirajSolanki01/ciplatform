import { render, screen } from "@testing-library/react";
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
});
