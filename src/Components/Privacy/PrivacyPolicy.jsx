import React from "react";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { privacyPoints } from "../../Data/Data";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Home/HomeElements";
import "./privacyPolicy.css";

export const PrivacyPolicy = () => {
  const [active, setActive] = useState(privacyPoints[0].point);
  const handleClick = (e) => {
    setActive(e);
  };
  return (
    <div>
      <Navbar />
      <div className="privacy" data-testid="privacy-comp" >
        <div className="privacy-div">
          <h1 className="privacy-title">Privacy and Cookies Policy</h1>

          <div>
            <div className="points-div" data-testid="policy-points" >
              <ul className="privacy-points">
                {privacyPoints.map((id) => {
                  console.log(id.id);
                  return (
                    <HashLink smooth to={id.id}>
                      <li
                        key={id.id}
                        onClick={() => handleClick(id.point)}
                        className={
                          id.point === active ? "actve-point" : undefined
                        }
                      >
                        {id.point}
                        <img
                          src={require("../../Assets/signs/arrow.png")}
                          alt="arrow"
                        />
                      </li>
                    </HashLink>
                  );
                })}
              </ul>
            </div>

            <div className="right-side-div">
              <div>
                <p className="points-title" id="intro">
                  {privacyPoints[0].point}
                </p>
                <p className="points-para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p className="points-para">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.
                </p>
                <p className="points-para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>

              <div>
                <p className="points-title" id="cookies">
                  {privacyPoints[1].point}
                </p>
                <p className="points-para">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.
                </p>
                <p className="optimy">Why Optimy Uses These Technologies?</p>
                <p>
                  We use these technologies for a number of purposes, such as:
                </p>
                <ul className="points-li">
                  <li>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain.
                  </li>
                  <li>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    excepturi sint occaecati cupiditate non provident, similique
                    sunt in culpa qui officia deserunt mollitia animi.
                  </li>
                  <li>
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled and demoralized
                  </li>
                  <li>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </li>
                </ul>
                <p className="points-para">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.
                </p>
              </div>
              <div>
                <p className="points-title" id="preferences">
                  {privacyPoints[2].point}
                </p>
                <p className="points-para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p className="points-para">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur.
                </p>
                <p className="optimy">Subtitle goes here</p>
                <ol className="counter-reset">
                  <li>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain.
                    <ol className="counter-reset">
                      <li>
                        1. On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled.
                      </li>
                    </ol>
                    <ol className="counter-reset">
                      <li>
                        2. On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled.
                      </li>
                    </ol>
                  </li>

                  <li>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    excepturi sint occaecati cupiditate non provident, similique
                    sunt in culpa qui officia deserunt mollitia animi.
                  </li>
                  <li>
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled and demoralized
                  </li>
                  <li>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </li>
                </ol>
                <div className="headings">
                  <p>The first level heading - H1</p>
                  <p>The second level heading - H2</p>
                  <p>The third level heading - H3</p>
                  <p>The forth level heading - H4</p>
                  <p>The fifth level heading - H5</p>
                  <p>The sixth level heading - H6</p>
                </div>
                <p className="points-para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
