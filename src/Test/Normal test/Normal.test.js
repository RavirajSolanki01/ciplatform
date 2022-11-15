import { fireEvent, render, screen } from "@testing-library/react";
import {
  BorderButton,
  CustomModal,
  DropDown,
  NormalButton,
  NormalInput,
  InfoBox,
  NormalSelect,
  Progressbar,
  Rating,
} from "../../Helper";
import { UploadInput } from "../../Helper/UploadInput";

describe("Normal Tests", () => {
  describe("Normal Input tests", () => {
    it("should render text passed in label props", () => {
      render(<NormalInput label="Email Address" />);
      const data = screen.getByText(/email address/i);
      expect(data).toBeInTheDocument();
    });
    it("should be able to type in input", async () => {
      render(<NormalInput label="Email Address" />);
      const normalInput = screen.getByTestId("normal-input");
      fireEvent.change(normalInput, { target: { value: "example@gmail.com" } });
      expect(normalInput.value).toBe("example@gmail.com");
    });
    it("Placeholder should be present", () => {
      render(
        <NormalInput label="Email Address" placeholder="Enter Email address" />
      );
      const data = screen.getByPlaceholderText(/Enter Email address/i);
      expect(data).toBeInTheDocument();
    });
  });
  describe("Normal Button tests", () => {
    it("Button should be present", () => {
      render(<NormalButton name="submit" />);
      const btntext = screen.getByText(/submit/i);
      expect(btntext).toBeInTheDocument();
    });
    it("Button should have class", () => {
      render(<NormalButton name="submit" className="normal-class" />);
      const btntext = screen.getByText(/submit/i);
      expect(btntext).toHaveClass("normal-class");
    });
  });

  describe("BorderButton tests", () => {
    test("Button should be present", () => {
      render(<BorderButton />);
      const borderBtn = screen.getByRole("button");
      expect(borderBtn).toBeInTheDocument();
    });
    test("Button button should be present", () => {
      render(<BorderButton />);
      const borderBtn = screen.getByRole("button");
      expect(borderBtn).toBeInTheDocument();
    });
    test("Button button should be present", () => {
      render(<BorderButton />);
      const borderBtn = screen.getByRole("button");
      expect(borderBtn).toHaveClass("border-inner");
    });
    test("Button button should be present", () => {
      render(<BorderButton name="Download" />);
      const borderBtn = screen.getByText(/Download/i);
      expect(borderBtn).toBeInTheDocument();
    });
  });

  describe("Custom modal tests", () => {
    test("Modal should be present", () => {
      render(<CustomModal />);
      const modal = screen.getByTestId("custom-modal");
      expect(modal).toBeInTheDocument();
    });
    test("Modal should have class", () => {
      render(<CustomModal />);
      const modal = screen.getByTestId("custom-modal");
      expect(modal).toHaveClass("modal-outer");
    });
    test("Modal should have title", () => {
      render(<CustomModal title="Modal title" />);
      const modalTitle = screen.getByText(/modal title/i);
      expect(modalTitle).toBeInTheDocument();
    });
    test("Modal should have close button", () => {
      render(<CustomModal isCloseBtn />);
      const closeModalBtn = screen.getByTestId("close-modal");
      expect(closeModalBtn).toBeInTheDocument();
    });
    test("close button should have class", () => {
      render(<CustomModal isCloseBtn />);
      const closeModalBtn = screen.getByTestId("close-modal");
      expect(closeModalBtn).toHaveClass("modal-close-btn");
    });
    test("close button image should be present", () => {
      render(<CustomModal isCloseBtn />);
      const closeModalBtnImg = screen.getByRole("img");
      expect(closeModalBtnImg).toBeVisible();
    });
  });

  describe("DropDown tests", () => {
    test("Deopdown should be present", () => {
      render(<DropDown items={["first", "second"]} />);
      const dropDown = screen.getByTestId("dropdown-test");
      expect(dropDown).toBeInTheDocument();
    });
    test("Deopdown should be present", () => {
      render(<DropDown items={["first", "second"]} />);
      const dropDownClass = screen.getByTestId("dropdown-test");
      expect(dropDownClass).toHaveClass("dropdown-div");
    });
  });

  describe("InfoBox tests", () => {
    test("Infobox should be present", () => {
      render(<InfoBox img="City" />);
      const infoBox = screen.getByTestId("infobox-div");
      expect(infoBox).toBeInTheDocument();
    });
    test("Infobox should have class", () => {
      render(<InfoBox img="City" />);
      const infoBoxClass = screen.getByTestId("infobox-div");
      expect(infoBoxClass).toHaveClass("info-class");
    });
    test("Infobox image should be visible", () => {
      render(<InfoBox img="City" />);
      const infoBoxImg = screen.getByRole("img");
      expect(infoBoxImg).toBeVisible();
    });
    test("Infobox keyname should be visible", () => {
      render(<InfoBox img="City" keyName="Keyname" />);
      const infoBoxKeyName = screen.getByText(/keyname/i);
      expect(infoBoxKeyName).toBeVisible();
    });
    test("Infobox Value name should be visible", () => {
      render(<InfoBox img="City" valueName="Value name" />);
      const infoBoxValueName = screen.getByText(/Value name/i);
      expect(infoBoxValueName).toBeVisible();
    });
  });

  describe("Normal Select tests", () => {
    test("Normal select should be present", () => {
      render(<NormalSelect items={["first", "second"]} />);
      const select = screen.getByTestId("normal-select");
      expect(select).toBeInTheDocument();
    });
  });

  describe("Pregressbar tests", () => {
    test("Progressbar should be present", () => {
      render(<Progressbar />);
      const progressbar = screen.getByTestId("progressbar-test");
      expect(progressbar).toBeInTheDocument();
    });
    test("Progressbar should have class", () => {
      render(<Progressbar />);
      const progressbarClass = screen.getByTestId("progressbar-test");
      expect(progressbarClass).toHaveClass("progressbar");
    });
  });

  describe("Rating tests", () => {
    test("Rating should be visible", () => {
      render(<Rating />);
      const rating = screen.getByTestId("rating-test");
      expect(rating).toBeInTheDocument();
    });

    test("Rating should have class", () => {
      render(<Rating />);
      const ratingClass = screen.getByTestId("rating-test");
      expect(ratingClass).toHaveClass("rating-div");
    });
  });

  describe("Upload input tests", () => {
    test("Upload input should be present", () => {
      render(<UploadInput />);
      const upload = screen.getByTestId("upload-input");
      expect(upload).toBeInTheDocument();
    });
    test("Upload input should have class", () => {
      render(<UploadInput />);
      const upload = screen.getByTestId("upload-input");
      expect(upload).toHaveClass("upload-input");
    });
    test("Upload input should have custom class", () => {
      render(<UploadInput className="upload-input-class" />);
      const upload = screen.getByTestId("upload-input");
      expect(upload).toHaveClass("upload-input-class");
    });

    test("Upload input should have custom class", () => {
      render(
        <UploadInput className="upload-input-class" label="Upload Image" />
      );
      const upload = screen.getByText(/Upload Image/i);
      expect(upload).toBeVisible();
    });
  });
});
