import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Mission } from "../../Components";

describe("Missions test", () => {
  const MockMission = () => {
    return (
      <BrowserRouter>
        <Mission />
      </BrowserRouter>
    );
  };

  test("")
});
