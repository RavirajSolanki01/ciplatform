import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Login } from "../../Components/Login/Login";
import PrivacyPolicy from "../../Components/Privacy";

describe("Login test", () => {
  const MockLogin = () => {
    return (
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  };
  test("Privacy policy should be present when page load", () => {
    render(<MockLogin />);
    const policyDiv = screen.getByText(/privacy policy/i);
    expect(policyDiv).toBeInTheDocument();
  });
  test("Return number of elements in Login component", () => {
    render(<MockLogin />);
    const data = screen.getAllByTestId("login").map((x) => x.childElementCount);
    expect(data).toEqual([2]);
    const data2 = screen
      .getAllByTestId("carousel")
      .map((x) => x.childElementCount);
    expect(data2).toEqual([2, 2, 2, 2]);
  });

  //Login div will be rendered automatically
  //Lost your password button will be clicked
  //Forgot div will be rendered
  it("should render Forgot div when 'Lost our password?' button is clicked", async () => {
    render(<MockLogin />);
    const lostBtn = screen.getByText(/lost your password/i);
    fireEvent.click(lostBtn);
    const forgotDiv = screen.getByTestId("forgot-password");
    expect(forgotDiv).toBeInTheDocument();
  });

  //Login div will be rendered automatically
  //Lost your password button will be clicked
  //Forgot div will be rendered
  //Login button will be clicked
  //Login div will be rendered automatically
  it("should render Login div when 'Login?' button is clicked in forgot password div", async () => {
    render(<MockLogin />);
    const lostBtn = screen.getByText(/lost your password/i);
    fireEvent.click(lostBtn);
    const loginBtn = screen.getByTestId("forgot-login-btn");
    fireEvent.click(loginBtn);
    const loginDiv = screen.getByTestId("login-div");
    expect(loginDiv).toBeInTheDocument();
  });

  //Login div will be rendered automatically
  //Lost your password button will be clicked
  //Forgot div will be rendered
  //Reset my password button will be clicked
  //Reset div will be rendered
  it("should render Reset div when 'Reset my Password' button is clicked in forgot password div", async () => {
    render(<MockLogin />);
    const lostBtn = screen.getByText(/lost your password/i);
    fireEvent.click(lostBtn);
    const resetBtn = screen.getByText(/reset my password/i);
    fireEvent.click(resetBtn);
    const resetDiv = screen.getByTestId("reset-div");
    expect(resetDiv).toBeInTheDocument();
  });

  it("Should render Privacy page on 'Privacy Policy' button click", () => {
    render(<MockLogin />);
    const privacyBtn = screen.getByText(/privacy policy/i);
    fireEvent.click(privacyBtn);
    render(
      <BrowserRouter>
        <PrivacyPolicy />
      </BrowserRouter>
    );
    const privacyDiv = screen.getByTestId("privacy-comp");
    expect(privacyDiv).toBeInTheDocument();
  });
});
