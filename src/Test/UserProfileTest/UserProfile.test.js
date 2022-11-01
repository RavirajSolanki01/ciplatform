import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { UserEditProfile } from "../../Components/UserEditProfile/UserEditProfile";

describe("User Edit Profile Test", () => {
  const MockUserEditProfile = () => {
    return (
      <BrowserRouter>
        <UserEditProfile />
      </BrowserRouter>
    );
  };
  test("should be present when page load", () => {
    render(<MockUserEditProfile />);
    const userEditPage = screen.getByTestId("user-edit-profile-div");
    expect(userEditPage).toBeInTheDocument();
  });
});
