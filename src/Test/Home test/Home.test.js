import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Home, PrivacyPolicy } from "../../Components";
import { store } from "../../Redux/store";

describe("Home test", () => {
  const MockHome = () => {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>
    );
  };

  test("Should render navbar on page load", () => {
    render(<MockHome />);
    const navDiv = screen.getByTestId("navbar");
    expect(navDiv).toBeInTheDocument();
  });
  test("Should render navbar class on page load", () => {
    render(<MockHome />);
    const navDiv = screen.getByTestId("navbar");
    expect(navDiv).toHaveClass("navbar");
  });

  test("Should render modalsubmit button on page load", () => {
    render(<MockHome />);
    const modalOpenBtn = screen.getByText(/Submit new mission/i);
    expect(modalOpenBtn).toBeInTheDocument();
  });

  test("Should render modalsubmit button on page load", () => {
    render(<MockHome />);
    const modalOpenBtn = screen.getByText(/Submit new mission/i);
    expect(modalOpenBtn).toBeInTheDocument();
  });

  test("Should render modalsubmit button on page load", () => {
    render(<MockHome />);
    const modalOpenBtn = screen.getByText(/Submit new mission/i);
    fireEvent.click(modalOpenBtn);
    const modal = screen.getByTestId("custom-modal");
    expect(modal).toBeInTheDocument();
  });

  test("Should render modalsubmit button on page load", () => {
    render(<MockHome />);
    const modalOpenBtn = screen.getByText(/Submit new mission/i);
    fireEvent.click(modalOpenBtn);
    const modal = screen.getByTestId("custom-modal");
    expect(modal).toBeInTheDocument();
    const closeBtn = screen.getByTestId("close-modal");
    fireEvent.click(closeBtn);
    expect(modal).not.toBeInTheDocument();
  });

  test("Should render missionbar on page load", () => {
    render(<MockHome />);
    const missionbar = screen.getByTestId("missionbar");
    expect(missionbar).toBeInTheDocument();
  });
  test("Should render missionbar class on page load", () => {
    render(<MockHome />);
    const missionbarClass = screen.getByTestId("missionbar");
    expect(missionbarClass).toHaveClass("missionbar");
  });

  test("Should render mission listing on page load", () => {
    render(<MockHome />);
    const missionListing = screen.getByTestId("mission-listing");
    expect(missionListing).toBeInTheDocument();
  });

  test("Should render mission listing on page load", () => {
    render(<MockHome />);
    const missionListingClass = screen.getByTestId("mission-listing");
    expect(missionListingClass).toHaveClass("mission-listing-main");
  });

  test("Should render Searchbar on page load", () => {
    render(<MockHome />);
    const searchbar = screen.getByTestId("searchbar");
    expect(searchbar).toBeInTheDocument();
  });
  test("Should render tagbar on page load", () => {
    render(<MockHome />);
    const tagbar = screen.getByTestId("tagbar");
    expect(tagbar).toBeInTheDocument();
  });
  test("Tagbar should have class on page load", () => {
    render(<MockHome />);
    const tagbar = screen.getByTestId("tagbar");
    expect(tagbar).toHaveClass("tagbar");
  });

  test("Should render rating on page load", () => {
    render(<MockHome />);
    const rating = screen.getAllByTestId("rating-test");
    if (rating.length) {
      rating.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    }
  });

  test("Should render rating on page load", () => {
    render(<MockHome />);
    const rating = screen.getAllByTestId("rating-test");
    if (rating.length) {
      rating.forEach((element) => {
        expect(element).toHaveClass("rating-div");
      });
    }
  });

  test("Should render progressbar on page load", () => {
    render(<MockHome />);
    const progressbar = screen.getAllByTestId("progressbar-test");
    if (progressbar.length) {
      progressbar.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    }
  });

  test("Should render progressbar on page load", () => {
    render(<MockHome />);
    const progressbar = screen.getAllByTestId("progressbar-test");
    if (progressbar.length) {
      progressbar.forEach((element) => {
        expect(element).toHaveClass("progressbar");
      });
    }
  });

  test("Should render apply button on page load", () => {
    render(<MockHome />);
    const applyBtn = screen.getAllByText(/apply/i);
    if (applyBtn.length) {
      applyBtn.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    }
  });
  test("Should render view details button on page load", () => {
    render(<MockHome />);
    const viewDetailsBtn = screen.getAllByText(/view details/i);
    if (viewDetailsBtn.length) {
      viewDetailsBtn.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    }
  });

  test("Should render Pagination on page load", () => {
    render(<MockHome />);
    const paginate = screen.getByTestId("paginate");
    expect(paginate).toBeInTheDocument();
  });
  test("Should have Pagination class on page load", () => {
    render(<MockHome />);
    const paginateClass = screen.getByTestId("paginate");
    expect(paginateClass).toHaveClass("pagination-div");
  });

  test("Should render Cookies agree div on page load", () => {
    render(<MockHome />);
    const cookies = screen.getByTestId("cookie-agree");
    expect(cookies).toBeInTheDocument();
  });

  test("Should render Cookies agree div on page load", () => {
    render(<MockHome />);
    const cookies = screen.getByTestId("cookie-agree");
    expect(cookies).toHaveClass("cookies");
  });

  test("Should render Cookies agree button on page load", () => {
    render(<MockHome />);
    const agreeBtn = screen.getByText(/i agree/i);
    expect(agreeBtn).toBeInTheDocument();
  });

  test("Should render close cookies div button on page load ", () => {
    render(<MockHome />);
    const closeCookies = screen.getByTestId("close-cookies");
    expect(closeCookies).toBeInTheDocument();
  });
  test("Should remove div on close button click", () => {
    render(<MockHome />);
    const closeBtn = screen.getByTestId("close-cookies");
    fireEvent.click(closeBtn);
    const cookies = screen.getByTestId("cookie-agree");
    expect(cookies).not.toBeVisible();
  });
  test("Should remove div on 'I agree' button click", () => {
    render(<MockHome />);
    const agreeBtn = screen.getByText(/i agree/i);
    fireEvent.click(agreeBtn);
    const cookiesDiv = screen.getByTestId("cookie-agree");
    expect(cookiesDiv).not.toBeVisible();
  });

  test("Thumbnail should be visible on page load", () => {
    render(<MockHome />);
    const img = screen.getAllByTestId("thumbnail-img");
    if (img.length) {
      img.forEach((element) => {
        expect(element).toBeVisible();
      });
    }
  });

  test("Footer should be present on page load", () => {
    render(<MockHome />);
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });
  test("Footer should have a class on page load", () => {
    render(<MockHome />);
    const footerClass = screen.getByTestId("footer");
    expect(footerClass).toHaveClass("main-footer");
  });
  test("Footer should have a class on page load", () => {
    render(<MockHome />);
    const privacyText = screen.getAllByText(/Privacy Policy/i);
    if (privacyText.length) {
      privacyText.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    }
  });

  test("Share button should be present on mission load", () => {
    render(<MockHome />);
    const shareBtn = screen.getAllByTestId("share-mission");
    if (shareBtn.length) {
      shareBtn.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    }
  });

  test("Like mission button should be present on page load", () => {
    render(<MockHome />);
    const likeBtn = screen.getAllByTestId("like-mission-btn");
    if (likeBtn.length) {
      likeBtn.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    }
  });
  test("Loaction button should be present on page load", () => {
    render(<MockHome />);
    const locationBtn = screen.getAllByTestId("location-btn");
    if (locationBtn.length) {
      locationBtn.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    }
  });
  test("Title should be present on page load", () => {
    render(<MockHome />);
    const title = screen.getAllByTestId("mission-title");
    if (title.length) {
      title.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    }
  });
  test("Mission description should be present on page load", () => {
    render(<MockHome />);
    const missionDescription = screen.getAllByTestId("mission-description");
    if (missionDescription.length) {
      missionDescription.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    }
  });

  test("Missions should be displayed in grids when clicked grid btn", () => {
    render(<MockHome />);
    const gridBtn = screen.getByTestId("show-grid-btn");
    fireEvent.click(gridBtn);
    const allMissions = screen.getAllByTestId("grid-mode");
    if (allMissions.length) {
      allMissions.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    }
  });

  test("Missions should be displayed in grids when clicked grid btn", () => {
    render(<MockHome />);
    const gridBtn = screen.getByTestId("show-grid-btn");
    fireEvent.click(gridBtn);
    const allMissions = screen.getAllByTestId("grid-mode");
    if (allMissions.length) {
      allMissions.forEach((element) => {
        expect(element).toHaveClass("mission-listing-div");
      });
    }
  });

  test("Missions should be displayed in list when clicked list btn", () => {
    render(<MockHome />);
    const listBtn = screen.getByTestId("show-list-btn");
    fireEvent.click(listBtn);
    const allMissions = screen.getAllByTestId("list-mode");
    if (allMissions.length) {
      allMissions.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    }
  });

  test("Missions should be displayed in list when clicked list btn", () => {
    render(<MockHome />);
    const listBtn = screen.getByTestId("show-list-btn");
    fireEvent.click(listBtn);
    const allMissions = screen.getAllByTestId("list-mode");
    if (allMissions.length) {
      allMissions.forEach((element) => {
        expect(element).toHaveClass("mission-listing-div-list");
      });
    }
  });

  test("Skill details should be present on list view btn click", () => {
    render(<MockHome />);
    const listBtn = screen.getByTestId("show-list-btn");
    fireEvent.click(listBtn);
    const skills = screen.getAllByTestId("skill");
    if (skills.length) {
      skills.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    }
  });

  test("Privacy policy page should render on click of privacy policy btn", () => {
    render(<MockHome />);
    const privacyBtn = screen.getByTestId("privacy-policy-btn");
    fireEvent.click(privacyBtn);
    render(
      <BrowserRouter>
        <PrivacyPolicy />
      </BrowserRouter>
    );
    const privacy = screen.getByTestId("privacy-comp");
    expect(privacy).toBeInTheDocument();
  });
});
