import { fireEvent, render, screen } from "@testing-library/react";
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

  const clickChangePassBtn = () => {
    render(<MockUserEditProfile />);
    const changeBtn = screen.getByTestId("change-password");
    fireEvent.click(changeBtn);
  };
  const clickContcUsBtn = () => {
    render(<MockUserEditProfile />);
    const contcus = screen.getByTestId("contact-us");
    fireEvent.click(contcus);
  };

  test("should be present when page load", () => {
    render(<MockUserEditProfile />);
    const userEditPage = screen.getByTestId("user-edit-profile-div");
    expect(userEditPage).toBeInTheDocument();
  });
  test("Navbar should be present when page load", () => {
    render(<MockUserEditProfile />);
    const navbar = screen.getByTestId("navbar");
    expect(navbar).toBeInTheDocument();
  });
  test("should be present when page load", () => {
    render(<MockUserEditProfile />);
    const userEditPageLeft = screen.getByTestId("edit-profile-left");
    expect(userEditPageLeft).toBeInTheDocument();
  });
  test("should be present when page load", () => {
    render(<MockUserEditProfile />);
    const userEditPageRight = screen.getByTestId("edit-profile-right");
    expect(userEditPageRight).toBeInTheDocument();
  });
  test("footer should be present when page load", () => {
    render(<MockUserEditProfile />);
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });

  describe("Change password modal tests in user edit profile page", () => {
    test("custom modal should be present on click of change password button", () => {
      clickChangePassBtn();
      const cusModal = screen.getByTestId("custom-modal");
      expect(cusModal).toBeInTheDocument();
    });
    test("All inputs should be present on page load", () => {
      clickChangePassBtn();
      const normalInp = screen.getAllByTestId("normal-input");
      normalInp.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });
    test("All inputs should be present on page load", () => {
      clickChangePassBtn();
      const normalBtn = screen.getAllByTestId("normal-btn");
      normalBtn.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });
    test("value should be present in when type value", () => {
      clickChangePassBtn();
      const normalInput = screen.getAllByTestId("normal-input");
      if (normalInput.length) {
        normalInput.forEach((element) => {
          fireEvent.change(element, {
            target: { value: "password" },
          });
          expect(element.value).toBe("password");
        });
      }
    });

    test("Modal should be removed from the dom on clicked close button", () => {
      render(<MockUserEditProfile />);
      const changeBtn = screen.getByTestId("change-password");
      fireEvent.click(changeBtn);
      const closeModalBtn = screen.getByTestId("close-modal");
      const cusModal = screen.getByTestId("custom-modal");
      fireEvent.click(closeModalBtn);
      expect(cusModal).not.toBeInTheDocument();
    });
  });

  describe("Contactus modal tests in user edit profile page", () => {
    test("Contact us modal Should be present on click of contact us button", () => {
      clickContcUsBtn();
      const contactModal = screen.getAllByText(/contact us/i);
      if (contactModal.length) {
        contactModal.forEach((element) => expect(element).toBeInTheDocument());
      }
    });
    test("Input field Should be present on click of contact us button", () => {
      clickContcUsBtn();
      const inputField = screen.getAllByTestId("normal-input");
      if (inputField.length) {
        inputField.forEach((element) => expect(element).toBeInTheDocument());
      }
    });

    test("Texatarea Should be present on click of contact us button", () => {
      clickContcUsBtn();
      const textareaField = screen.getAllByTestId("normal-textarea");
      if (textareaField.length) {
        textareaField.forEach((element) => expect(element).toBeInTheDocument());
      }
      if (textareaField.length) {
        textareaField.forEach((element) => {
          fireEvent.change(element, {
            target: { value: "Your message" },
          });
          expect(element.value).toBe("Your message");
        });
      }
    });

    // test("Modal should be removed from DOM ")
  });
});
