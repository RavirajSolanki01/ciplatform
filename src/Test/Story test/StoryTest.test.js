import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { StoryPage } from "../../Components";

describe("Share story page test", () => {
  const MockStory = () => {
    return (
      <BrowserRouter>
        <StoryPage />
      </BrowserRouter>
    );
  };

  test("Navbar should be present on page load", () => {
    render(<MockStory />);
    const navbar = screen.getByTestId("navbar");
    expect(navbar).toBeInTheDocument();
  });
  test("Searchbar should be present on page load", () => {
    render(<MockStory />);
    const searchbar = screen.getByTestId("searchbar");
    expect(searchbar).toBeInTheDocument();
  });
  test("Searchbar should be present on page load", () => {
    render(<MockStory />);
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });
  test("paginate should be present on page load", () => {
    render(<MockStory />);
    const paginate = screen.getByTestId("paginate");
    expect(paginate).toBeInTheDocument();
  });

  test("paginate should have a class present on page load", () => {
    render(<MockStory />);
    const paginate = screen.getByTestId("paginate");
    expect(paginate).toHaveClass("story-pagination");
  });

  test("Story paragraph should be present on page load", () => {
    render(<MockStory />);
    const storyPara = screen.getByTestId("story-para");
    expect(storyPara).toBeInTheDocument();
  });
  test("Share story button should be present on page load", () => {
    render(<MockStory />);
    const shareBtn = screen.getByText(/Share your story/i);
    expect(shareBtn).toBeInTheDocument();
  });
  test("Story card divs should be present on page load", () => {
    render(<MockStory />);
    const shareBtn = screen.getAllByTestId("storycard-div");
    if (shareBtn.length) {
      shareBtn.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    }
  });
  test("Story card divs should have class on page load", () => {
    render(<MockStory />);
    const shareBtn = screen.getAllByTestId("storycard-div");
    if (shareBtn.length) {
      shareBtn.forEach((element) => {
        expect(element).toHaveClass("storycard-div");
      });
    }
  });
  test("Thumbnail should be present on page load", () => {
    render(<MockStory />);
    const thumbnail = screen.getAllByTestId("thumbnail");
    if (thumbnail.length) {
      thumbnail.forEach((element) => {
        expect(element).toBeVisible();
      });
    }
  });

  test("Thumbnail should be present on page load", () => {
    render(<MockStory />);
    const viewDetails = screen.getAllByText(/View Details/i);
    if (viewDetails.length) {
      viewDetails.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    }
  });

  test("Story card title should be present on page load", () => {
    render(<MockStory />);
    const cardTitle = screen.getAllByTestId("story-card-title");
    if (cardTitle.length) {
      cardTitle.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    }
  });
  test("Story card title should have class should be present on page load", () => {
    render(<MockStory />);
    const cardTitle = screen.getAllByTestId("story-card-title");
    if (cardTitle.length) {
      cardTitle.forEach((element) => {
        expect(element).toHaveClass("storycard-title");
      });
    }
  });

  test("Story card description should be present on page load", () => {
    render(<MockStory />);
    const cardDesp = screen.getAllByTestId("story-card-desp");
    if (cardDesp.length) {
      cardDesp.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    }
  });

  test("Story card description should have class should be present on page load", () => {
    render(<MockStory />);
    const cardDespClass = screen.getAllByTestId("story-card-desp");
    if (cardDespClass.length) {
      cardDespClass.forEach((element) => {
        expect(element).toHaveClass("storycard-short-description");
      });
    }
  });

  test("Person image should be present on page load", () => {
    render(<MockStory />);
    const person = screen.getAllByTestId("person");
    if (person.length) {
      person.forEach((element) => {
        expect(element).toBeVisible();
      });
    }
  });

  test("Person name should be present on page load", () => {
    render(<MockStory />);
    const personName = screen.getAllByTestId("person-name");
    if (personName.length) {
      personName.forEach((element) => {
        expect(element).toBeVisible();
      });
    }
  });




});
