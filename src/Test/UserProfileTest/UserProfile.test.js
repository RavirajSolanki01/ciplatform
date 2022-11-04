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
    test("Modal should be removed from the dom on clicked Cancel button", () => {
      render(<MockUserEditProfile />);
      const changeBtn = screen.getByTestId("change-password");
      fireEvent.click(changeBtn);
      const cancelBtn = screen.getByText(/cancel/i);
      const cusModal = screen.getByTestId("custom-modal");
      fireEvent.click(cancelBtn);
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

    test("Modal should be removed from DOM when clicked close button", () => {
      clickContcUsBtn();
      const closeModal = screen.getByTestId("close-modal");
      const customModal = screen.getByTestId("custom-modal");
      fireEvent.click(closeModal);
      expect(customModal).not.toBeInTheDocument();
    });
    test("Modal should be removed from DOM when clicked Cancel button", () => {
      clickContcUsBtn();
      const cancelBtn = screen.getByText(/cancel/i);
      const customModal = screen.getByTestId("custom-modal");
      fireEvent.click(cancelBtn);
      expect(customModal).not.toBeInTheDocument();
    });
  });

  describe("Input tests of User Edit Profile", () => {
    it("Input value must reflect when insert the value", () => {
      render(<MockUserEditProfile />);
      const profileInputs = screen.getAllByTestId("normal-input");
      profileInputs.forEach((element) => {
        fireEvent.change(element, {
          target: { value: "Your input message" },
        });
        expect(element.value).toBe("Your input message");
      });
    });

    it("Textarea value must reflect when insert the value", () => {
      render(<MockUserEditProfile />);
      const profileTextareas = screen.getAllByTestId("normal-textarea");
      profileTextareas.forEach((element) => {
        fireEvent.change(element, {
          target: { value: "Your textarea message" },
        });
        expect(element.value).toBe("Your textarea message");
      });
    });

    it("Select should be present when page load", () => {
      render(<MockUserEditProfile />);
      const profileSelect = screen.getAllByTestId("normal-select");
      profileSelect.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });

    it("Save button should be present in the DOM on page load", () => {
      render(<MockUserEditProfile />);
      const saveBtn = screen.getByText(/save/i);
      expect(saveBtn).toBeInTheDocument();
    });

  });

  describe("Add Skill Modal tests", () => {
    it("Add skill button should be present on page load", () => {
      render(<MockUserEditProfile />);
      const addSkillBtn = screen.getByText(/add skills/i);
      expect(addSkillBtn).toBeInTheDocument();
    });

    it("Add skill Modal should be in DOM when clicked button", () => {
      render(<MockUserEditProfile />);
      const addSkillBtn = screen.getByText(/add skills/i);
      fireEvent.click(addSkillBtn);
      const customModal = screen.getByTestId("custom-modal");
      expect(customModal).toBeInTheDocument();
    });

    it("Add skill Modal should be Removed from DOM when clicked close button", () => {
      render(<MockUserEditProfile />);
      const addSkillBtn = screen.getByText(/add skills/i);
      fireEvent.click(addSkillBtn);
      const closeModal = screen.getByTestId("close-modal");
      const customModal = screen.getByTestId("custom-modal");
      fireEvent.click(closeModal);
      expect(customModal).not.toBeInTheDocument();
    });

    it("Add skill Modal should be Removed from DOM when clicked Cancel button", () => {
      render(<MockUserEditProfile />);
      const addSkillBtn = screen.getByText(/add skills/i);
      fireEvent.click(addSkillBtn);
      const cancelBtn = screen.getByText(/Cancel/i);
      const customModal = screen.getByTestId("custom-modal");
      fireEvent.click(cancelBtn);
      expect(customModal).not.toBeInTheDocument();
    });

    it("Add skill Modal should be Removed from DOM when clicked Save button", () => {
      render(<MockUserEditProfile />);
      const addSkillBtn = screen.getByText(/add skills/i);
      fireEvent.click(addSkillBtn);
      const saveBtn = screen.getAllByText(/save/i);
      const customModal = screen.getByTestId("custom-modal");
      fireEvent.click(saveBtn[0]);
      expect(customModal).not.toBeInTheDocument();
    });
  });
});
