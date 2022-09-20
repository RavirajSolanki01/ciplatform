import { render, screen } from "@testing-library/react";
import { NormalButton } from "../Helper/NormalButton";
import { NormalInput } from "../Helper/NormalInput";

describe("NormalInput", () => {
  it("when input load", () => {
    render(
      <NormalInput
        htmlfor="Email"
        name="email"
        type="email"
        label="Email Address"
      />
    );
    const data = screen.queryAllByTestId("normal-input");
    expect(data[0].textContent).toBe("Email Address");
  });
  it("when button load", () => {
    render(<NormalButton name="submit" />);
    const btndata = screen.queryAllByTestId("normal-btn");
    expect(btndata[0].textContent).toBe("submit");
  });


  
});
