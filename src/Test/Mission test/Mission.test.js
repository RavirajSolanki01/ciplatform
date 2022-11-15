import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Mission } from "../../Components";
import { store } from "../../Redux/store";

describe("Missions test", () => {
  const MockMission = () => {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Mission />
        </Provider>
      </BrowserRouter>
    );
  };

  const openModalFun = () => {
    render(<MockMission />);
    const submitBtn = screen.getByText(/submit new mission/i);
    fireEvent.click(submitBtn);
    const missionForm = screen.getByTestId("new-mission-form");
    expect(missionForm).toBeInTheDocument();
  };

  test("Navbar should render on page load", () => {
    render(<MockMission />);
    const navDiv = screen.getByTestId("navbar");
    expect(navDiv).toBeInTheDocument();
  });

  test("Navbar should have class", () => {
    render(<MockMission />);
    const navClass = screen.getByTestId("navbar");
    expect(navClass).toHaveClass("navbar");
  });

  test("Should render Searchbar on page load", () => {
    render(<MockMission />);
    const searchbar = screen.getByTestId("searchbar");
    expect(searchbar).toBeInTheDocument();
  });

  test("Tagbar should have class", () => {
    render(<MockMission />);
    const searchbarClass = screen.getByTestId("searchbar");
    expect(searchbarClass).toHaveClass("searchbar");
  });

  test("Should render Footer on page load", () => {
    render(<MockMission />);
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });

  test("Should render Mission carousel component on page load", () => {
    render(<MockMission />);
    const missionCarousel = screen.getByTestId("mission-carousel");
    expect(missionCarousel).toBeInTheDocument();
  });
  test("Mission carousel component should have class on page load", () => {
    render(<MockMission />);
    const missionCarouselClass = screen.getByTestId("mission-carousel");
    expect(missionCarouselClass).toHaveClass("mission-carousel");
  });

  test("Should render Mission Info component on page load", () => {
    render(<MockMission />);
    const missionInfo = screen.getByTestId("mission-info");
    expect(missionInfo).toBeInTheDocument();
  });
  test("Should render Mission Info component on page load", () => {
    render(<MockMission />);
    const missionInfoClass = screen.getByTestId("mission-info");
    expect(missionInfoClass).toHaveClass("mission-info");
  });

  test("Should render Related Mission  component on page load", () => {
    render(<MockMission />);
    const relatedMission = screen.getByTestId("related-mission");
    expect(relatedMission).toBeInTheDocument();
  });
  test("Should render Related Mission  component on page load", () => {
    render(<MockMission />);
    const relatedMissionClass = screen.getByTestId("related-mission");
    expect(relatedMissionClass).toHaveClass("related-mission-div");
  });

  test("Should render Related Mission  component on page load", () => {
    render(<MockMission />);
    const preview = screen.getByTestId("carousel-preview");
    expect(preview).toBeVisible();
  });
  test("Should render Related Mission  component on page load", () => {
    render(<MockMission />);
    const previewClass = screen.getByTestId("carousel-preview");
    expect(previewClass).toHaveClass("srrrc");
  });

  test("Should render Progressbar component on page load", () => {
    render(<MockMission />);
    const progress = screen.getByTestId("progressbar-test");
    expect(progress).toBeInTheDocument();
  });

  test("Should render Progressbar component on page load", () => {
    render(<MockMission />);
    const progressCLass = screen.getByTestId("progressbar-test");
    expect(progressCLass).toHaveClass("progressbar");
  });

  test("Should render Add to favourite button on page load", () => {
    render(<MockMission />);
    const addFavBtn = screen.getByText("Add to favourite");
    expect(addFavBtn).toBeInTheDocument();
  });

  test("Should render Recommend to a Co-Worker button on page load", () => {
    render(<MockMission />);
    const recommendbtn = screen.getByText("Recommend to a Co-Worker");
    expect(recommendbtn).toBeInTheDocument();
  });
  test("Should render Rating component on page load", () => {
    render(<MockMission />);
    const rating = screen.getAllByTestId("rating-test");
    if (rating.length) {
      rating.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    }
  });
  test("+Rating component should have class on page load", () => {
    render(<MockMission />);
    const ratingClass = screen.getAllByTestId("rating-test");
    if (ratingClass.length) {
      ratingClass.forEach((element) => {
        expect(element).toHaveClass("rating-div");
      });
    }
  });

  test("Should render 4 infoboxes on page load", () => {
    render(<MockMission />);
    const infoBox = screen.getAllByTestId("infobox-div");
    expect(infoBox.length).toEqual(4);
    infoBox.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });
  test("infoboxe should have class on page load", () => {
    render(<MockMission />);
    const infoBoxClass = screen.getAllByTestId("infobox-div");
    infoBoxClass.forEach((element) => {
      expect(element).toHaveClass("info-class");
    });
  });

  test("Apply now button should be in the dom when page load", () => {
    render(<MockMission />);
    const applyBtn = screen.getByText(/apply now/i);
    expect(applyBtn).toBeInTheDocument();
  });

  test("Apply now button should have class the dom when page load", () => {
    render(<MockMission />);
    const applyBtnClass = screen.getByText(/apply now/i);
    expect(applyBtnClass).toHaveClass("normal-btn");
  });

  test("Apply now button should have class when page load", () => {
    render(<MockMission />);
    const applyBtnClass = screen.getByText(/apply now/i);
    expect(applyBtnClass).toHaveClass("normal-btn-common");
  });

  describe("Mission info div tests", () => {
    test("Should render all tabs on page load", () => {
      render(<MockMission />);
      const tabs = screen.getAllByTestId("info-tabs");
      if (tabs.length) {
        tabs.forEach((element) => {
          expect(element).toBeInTheDocument();
        });
      }
    });

    test("First tab should have active-tab class on page load", () => {
      render(<MockMission />);
      const tabs = screen.getAllByTestId("info-tabs");
      expect(tabs[0]).toHaveClass("active-tab");
    });

    test("Should have class active-tab on click of respective tabs", () => {
      render(<MockMission />);
      const tabs = screen.getAllByTestId("info-tabs");
      expect(tabs[0]).toHaveClass("active-tab");
      if (tabs.length) {
        fireEvent.click(tabs[1]);
        expect(tabs[1]).toHaveClass("active-tab");
        fireEvent.click(tabs[2]);
        expect(tabs[2]).toHaveClass("active-tab");
        fireEvent.click(tabs[tabs.length - 1]);
        expect(tabs[tabs.length - 1]).toHaveClass("active-tab");
      }
    });

    test("Volunteers should be present on page load", () => {
      render(<MockMission />);
      const volunteers = screen.getAllByTestId("volunteer");
      if (volunteers.length) {
        volunteers.forEach((element) => {
          expect(element).toBeInTheDocument();
        });
      }
    });

    test("introduction title should be visible", () => {
      render(<MockMission />);
      const introTitle = screen.getByText(/introduction/i);
      expect(introTitle).toBeVisible();
    });

    test("Challenge title should be visible", () => {
      render(<MockMission />);
      const challengeTitle = screen.getByText(/Challenge/i);
      expect(challengeTitle).toBeVisible();
    });

    test("Documents title should be visible", () => {
      render(<MockMission />);
      const docTitle = screen.getByText(/Documents/i);
      expect(docTitle).toBeVisible();
    });

    test("Documents title should be visible", () => {
      render(<MockMission />);
      const docTitle = screen.getAllByRole("button", { type: "file" });
      if (docTitle.length) {
        docTitle.forEach((element) => {
          expect(element).toBeInTheDocument();
        });
      }
    });
  });

  describe("Related missions component should be in present when page load", () => {
    test("Related mission title should be visible", () => {
      render(<MockMission />);
      const relatedMision = screen.getByText(/Related missions/i);
      expect(relatedMision).toBeVisible();
    });

    test("Related missions should be present on page load", () => {
      render(<MockMission />);
      const missionCard = screen.getAllByTestId("grid-mode");
      if (missionCard.length) {
        missionCard.forEach((element) => {
          expect(element).toBeInTheDocument();
        });
      }
    });

    test("Loaction should be present", () => {
      render(<MockMission />);
      const location = screen.getAllByTestId("location-btn");
      if (location.length) {
        location.forEach((element) => {
          expect(element).toBeInTheDocument();
        });
      }
    });

    test("Share mission btn be present", () => {
      render(<MockMission />);
      const shareBtn = screen.getAllByTestId("share-mission");
      if (shareBtn.length) {
        shareBtn.forEach((element) => {
          expect(element).toBeInTheDocument();
        });
      }
    });
    
    test("Like mission btn be present", () => {
      render(<MockMission />);
      const likeBtn = screen.getAllByTestId("like-mission-btn");
      if (likeBtn.length) {
        likeBtn.forEach((element) => {
          expect(element).toBeInTheDocument();
        });
      }
    });
    test("Thumbnail should be visible", () => {
      render(<MockMission />);
      const thumbnail = screen.getAllByTestId("thumbnail-img");
      if (thumbnail.length) {
        thumbnail.forEach((element) => {
          expect(element).toBeVisible();
        });
      }
    });

    test("Mission title should be visible", () => {
      render(<MockMission />);
      const missionTitle = screen.getAllByTestId("mission-title");
      if (missionTitle.length) {
        missionTitle.forEach((element) => {
          expect(element).toBeVisible();
        });
      }
    });

    test("Mission description should be visible", () => {
      render(<MockMission />);
      const missionDescp = screen.getAllByTestId("mission-description");
      if (missionDescp.length) {
        missionDescp.forEach((element) => {
          expect(element).toBeVisible();
        });
      }
    });

    describe("Submit new mission modal tests", () => {
      test("Submit new mission modal button should be present in the DOM on page load", () => {
        render(<MockMission />);
        const submitBtn = screen.getByText(/submit new mission/i);
        expect(submitBtn).toBeInTheDocument();
      });

      test("Submit new mission modal should be in the dom on click of submit new mission btn", () => {
        render(<MockMission />);
        const submitBtn = screen.getByText(/submit new mission/i);
        fireEvent.click(submitBtn);
        const missionForm = screen.getByTestId("new-mission-form");
        expect(missionForm).toBeInTheDocument();
      });

      test("Submit new mission modal should not be present on close modal click", () => {
        render(<MockMission />);
        const submitBtn = screen.getByText(/submit new mission/i);
        fireEvent.click(submitBtn);
        const missionForm = screen.getByTestId("new-mission-form");
        const closeBtn = screen.getByTestId("custom-modal");
        expect(missionForm).toBeInTheDocument();
        fireEvent.click(closeBtn);
        expect(missionForm).not.toBeInTheDocument();
      });

      test("Select country selector should be present on modal open", () => {
        openModalFun();
        const countrySelect = screen.getByRole("option", {
          name: "Select Country",
        });
        expect(countrySelect).toBeInTheDocument();
      });
      test("Select city selector should be present on modal open", () => {
        openModalFun();
        const citySelect = screen.getByRole("option", {
          name: "Select City",
        });
        expect(citySelect).toBeInTheDocument();
      });

      test("Mission title input should be present", () => {
        openModalFun();
        const title = screen.getByPlaceholderText(/Enter Mission Title/i);
        expect(title).toBeInTheDocument();
      });

      test("Mission title input should reflect input value", () => {
        openModalFun();
        const title = screen.getByPlaceholderText(/Enter Mission Title/i);
        fireEvent.change(title, {
          target: { value: "mission title goes here" },
        });
        expect(title.value).toBe("mission title goes here");
      });



      test("Enter Mission description input should be present", () => {
        openModalFun();
        const missionDes = screen.getByPlaceholderText(/Enter your message/i);
        expect(missionDes).toBeInTheDocument();
      });

      test("Mission input should reflect Mission value", () => {
        openModalFun();
        const mission = screen.getByPlaceholderText(/Enter your message/i);
        fireEvent.change(mission, {
          target: { value: "mission goes here" },
        });
        expect(mission.value).toBe("mission goes here");
      });

      test("Mission organization input should be present", () => {
        openModalFun();
        const missionOrg = screen.getByPlaceholderText(
          /Enter mission organisation name/i
        );
        expect(missionOrg).toBeInTheDocument();
      });

      test("Mission organization should reflect organization value", () => {
        openModalFun();
        const orgName = screen.getByPlaceholderText(
          /Enter mission organisation name/i
        );
        fireEvent.change(orgName, {
          target: { value: "Organization name goes here" },
        });
        expect(orgName.value).toBe("Organization name goes here");
      });

      test("Organization details textarea input should be present", () => {
        openModalFun();
        const orgDetails = screen.getByPlaceholderText(
          /Enter mission organisation detail/i
        );
        expect(orgDetails).toBeInTheDocument();
      });

      test("Organization details textarea should reflect organization details", () => {
        openModalFun();
        const orgName = screen.getByPlaceholderText(
          /Enter mission organisation detail/i
        );
        fireEvent.change(orgName, {
          target: { value: "Organization details goes here" },
        });
        expect(orgName.value).toBe("Organization details goes here");
      });

      test("Start date input should be present", () => {
        openModalFun();
        const startDate = screen.getByPlaceholderText(/Select start date/i);
        expect(startDate).toBeInTheDocument();
      });

      test("Start date input should reflect Start date value", () => {
        openModalFun();
        const startDate = screen.getByPlaceholderText(/Select start date/i);
        fireEvent.change(startDate, {
          target: { value: "Start date goes here" },
        });
        expect(startDate.value).toBe("Start date goes here");
      });

      test("End date input should be present", () => {
        openModalFun();
        const endDate = screen.getByPlaceholderText(/Select end date/i);
        expect(endDate).toBeInTheDocument();
      });

      test("End date input should reflect End date value", () => {
        openModalFun();
        const endDate = screen.getByPlaceholderText(/Select end date/i);
        fireEvent.change(endDate, {
          target: { value: "End date goes here" },
        });
        expect(endDate.value).toBe("End date goes here");
      });

      test("Total seats input should be present", () => {
        openModalFun();
        const totalSeats = screen.getByPlaceholderText(/Enter total seats/i);
        expect(totalSeats).toBeInTheDocument();
      });

      // test("Total seats input should reflect Total seats value", () => {
      //   openModalFun();
      //   const totalSeats = screen.getByPlaceholderText(/Enter total seats/i);
      //   fireEvent.change(totalSeats, {
      //     target: { value: 21 },
      //   });
      //   expect(totalSeats.value).toEqual(JSON.stringify(21));
      // });

      // test("Registration deadline input should be present", () => {
      //   openModalFun();
      //   const totalSeats = screen.getByPlaceholderText(
      //     /Enter mission registration deadline/i
      //   );
      //   expect(totalSeats).toBeInTheDocument();
      // });

      // test("Registration deadline input should reflect Registration deadline value", () => {
      //   openModalFun();
      //   const regDeadline = screen.getByPlaceholderText(
      //     /Enter mission registration deadline/i
      //   );
      //   fireEvent.change(regDeadline, {
      //     target: { value: "21st March, 2023" },
      //   });
      //   expect(regDeadline.value).toBe("21st March, 2023");
      // });

      // test("Select theme selector should be present on modal open", () => {
      //   openModalFun();
      //   const themeSelect = screen.getByRole("option", {
      //     name: "Select mission theme",
      //   });
      //   expect(themeSelect).toBeInTheDocument();
      // });
      // test("Select Skills selector should be present on modal open", () => {
      //   openModalFun();
      //   const missionSkill = screen.getByRole("option", {
      //     name: "Select mission Skills",
      //   });
      //   expect(missionSkill).toBeInTheDocument();
      // });

      // test("Upload button should be present on modal open", () => {
      //   openModalFun();
      //   const uploadBtn = document.getElementById("upload-img");
      //   expect(uploadBtn).toBeInTheDocument();
      // });
      // test("Upload resume button should be present on modal open", () => {
      //   openModalFun();
      //   const uploadResumeBtn = document.getElementById("upload-resume");
      //   expect(uploadResumeBtn).toBeInTheDocument();
      // });

      // test("Select availability selector should be present on modal open", () => {
      //   openModalFun();
      //   const availibility = screen.getByRole("option", {
      //     name: "Select availability",
      //   });
      //   expect(availibility).toBeInTheDocument();
      // });

      // test("Cancel button should be present", () => {
      //   openModalFun();
      //   const cancelBtn = screen.getByText(/Cancel/i);
      //   expect(cancelBtn).toBeInTheDocument();
      // });
      // test("Cancel button click should remove modal", () => {
      //   openModalFun();
      //   const cancelBtn = screen.getByText(/Cancel/i);
      //   const modal = screen.getByTestId("new-mission-form");
      //   fireEvent.click(cancelBtn);
      //   expect(modal).not.toBeInTheDocument();
      // });

      // test("Submit button should be present", () => {
      //   openModalFun();
      //   const submitBtn = screen.getAllByText(/submit/i);
      //   if (submitBtn.length) {
      //     submitBtn.forEach((element) => {
      //       expect(element).toBeInTheDocument();
      //     });
      //   }
      // });
    });
  });
});
