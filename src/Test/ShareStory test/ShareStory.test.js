import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ShareStory } from "../../Components/ShareStory/ShareStory";

describe("Share story page test", () => {
  const MockShareStory = () => {
    return (
      <BrowserRouter>
        <ShareStory />
      </BrowserRouter>
    );
  };

  test("Navbar should be present on page load", () => {
    render(<MockShareStory />);
    const navbar = screen.getByTestId("navbar");
    expect(navbar).toBeInTheDocument();
  });

  test("Share your story title should be visible", () => {
    render(<MockShareStory />);
    const title = screen.getByText(/share your story/i);
    expect(title).toBeInTheDocument();
  });

  test("Select mission slecetor field should be present on page load", () => {
    render(<MockShareStory />);
    const missionSelect = screen.getByText(/Select your mission/i);
    expect(missionSelect).toBeInTheDocument();
  });

  test("Story title input should be present on page load", () => {
    render(<MockShareStory />);
    const title = screen.getByPlaceholderText(/enter story title/i);
    expect(title).toBeInTheDocument();
  });

  test("Story title input should be present on page load", () => {
    render(<MockShareStory />);
    const title = screen.getByPlaceholderText(/enter story title/i);
    expect(title).toBeInTheDocument();
    fireEvent.change(title, { target: { value: "Story title goes here" } });
    expect(title.value).toBe("Story title goes here");
  });

  test("Date input should be present on page load", () => {
    render(<MockShareStory />);
    const date = screen.getByPlaceholderText(/Select date/i);
    expect(date).toBeInTheDocument();
  });

  test("URL input should be present on page load", () => {
    render(<MockShareStory />);
    const url = screen.getByPlaceholderText(/Enter your url/i);
    expect(url).toBeInTheDocument();
  });

  test("Story title input should be present on page load", () => {
    render(<MockShareStory />);
    const url = screen.getByPlaceholderText(/Enter your url/i);
    expect(url).toBeInTheDocument();
    fireEvent.change(url, { target: { value: "Story URL goes here" } });
    expect(url.value).toBe("Story URL goes here");
  });


  test("Quill input should be present on page load", () => {
    render(<MockShareStory />);
    const quill = screen.getByTestId("react-quill");
    expect(quill).toBeInTheDocument();
  });

  test("Upload btn should be present on page load", () => {
    render(<MockShareStory />);
    const uploadbtn = screen.getByTestId("upload-btn");
    expect(uploadbtn).toBeInTheDocument();
  });

  test("Cancel button should be present on page load", () => {
    render(<MockShareStory />);
    const cancelBtn = screen.getByText(/Cancel/i);
    expect(cancelBtn).toBeInTheDocument();
  });

  test("Save button should be present on page load", () => {
    render(<MockShareStory />);
    const saveBtn = screen.getByText(/Save/i);
    expect(saveBtn).toBeInTheDocument();
  });

  test("Submit button should be present on page load", () => {
    render(<MockShareStory />);
    const submitBtn = screen.getAllByText(/Submit/i);
    if (submitBtn.length) {
      submitBtn.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    }
  });

  test("Footer should be present on page load", () => {
    render(<MockShareStory />);
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });

  test("Select input should be present on page load", () => {
    render(<MockShareStory />);
    const select = screen.getByTestId("normal-select");
    expect(select).toBeInTheDocument();
  });



});
