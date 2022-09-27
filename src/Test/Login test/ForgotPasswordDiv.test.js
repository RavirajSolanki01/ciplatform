import { render, screen } from "@testing-library/react";
import { ForgotPasswordDiv } from "../../Components/Login/LoginElements";

describe("Forgot password div", () => {
  test("Should render title on page load", () => {
    render(<ForgotPasswordDiv />);
    const title = screen.getByText(/forgot password/i);
    expect(title).toBeInTheDocument();
  });
  test("Should render paragraph on page load", () => {
    render(<ForgotPasswordDiv />);
    const para = screen.getByText(
      /Enter your email address you've using for your account below and we will send you a password reset link/i
    );
    expect(para).toBeInTheDocument();
  });
  it("should render input label", () => {
    render(<ForgotPasswordDiv />);
    const item = screen.getByTestId("forgot-password");
    expect(item).toBeInTheDocument();
  });
  it("should render button", () => {
    render(<ForgotPasswordDiv />);
    const item = screen.getByText(/reset my password/i);
    expect(item).toBeInTheDocument();
  });
});
