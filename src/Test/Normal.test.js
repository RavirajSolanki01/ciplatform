import { fireEvent, render, screen } from "@testing-library/react";
import { NormalButton } from "../Helper/NormalButton";
import { NormalInput } from "../Helper/NormalInput";

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
  });
  describe("Normal Button tests", () => {
    it("should render text passed in name props", () => {
      render(<NormalButton name="submit" />);
      const btntext = screen.getByText(/submit/i);
      expect(btntext).toBeInTheDocument();
    });
  });
});
