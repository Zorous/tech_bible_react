import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { doc, onSnapshot } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const [authUser, setAuthUser] = useState(null);

  const [userData, setUserData] = useState({
    pfp: "",
    username: "",
  });
 

  


  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const { currentUserData, isAdmin } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleIsMenuClicked = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return listen();
  }, []);

  //Sign out
  const UserSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signed out on successfully");
        navigate("/signin");
      })
      .catch((error) => console.log(error));
  };

  return (
    <header aria-label="Site Header" className="navbar-header">
      {/* <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"> */}
      <div className="lg:px-[94px] px-[20px]">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12 lg:ml-[30px]">
            <Link to="/">
              <img
                width={"51px"}
                height={"52px"}
                src={`${process.env.PUBLIC_URL}/Tech_Bible_Logo.png`}
                alt=""
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Site Nav">
              <ul className="flex items-center gap-6 text-sm mr-6">
                <div className="flex flex-row lg:gap-[64px] gap-6">
                  {isAdmin ? (
                    <Link to="/tools">
                      <li
                        className="tracking-wider hover:tracking-widest"
                        style={{ transition: "0.3s", cursor: "pointer" }}
                      >
                        All Tools
                      </li>
                    </Link>
                  ) : (
                    <div></div>
                  )}
                  <li
                    className="tracking-wider hover:tracking-widest"
                    style={{ transition: "0.3s", cursor: "pointer" }}
                  >
                    <Link to="/addTool">Submit your Tool</Link>
                  </li>

                  <li
                    className="tracking-wider hover:tracking-widest"
                    style={{ transition: "0.3s", cursor: "pointer" }}
                  >
                    Resources
                  </li>

                  <Link to="community">
                    {" "}
                    <li
                      className="tracking-wider hover:tracking-widest"
                      style={{ transition: "0.3s", cursor: "pointer" }}
                    >
                      Community
                    </li>
                  </Link>
                </div>

                <li
                  className="tracking-wider hover:tracking-widest"
                  style={{ transition: "0.3s", cursor: "pointer" }}
                >
                  <span className="text-white rounded-full p-1">
                    <i className="fab fa-tiktok text-white text-xl"></i>
                  </span>
                </li>
                <li
                  className="tracking-wider hover:tracking-widest"
                  style={{ transition: "0.3s", cursor: "pointer" }}
                >
                  <span className="text-white rounded-full p-1">
                    <i className="fab fa-youtube text-white text-xl"></i>
                  </span>
                </li>
                <li
                  className="tracking-wider hover:tracking-widest"
                  style={{ transition: "0.3s", cursor: "pointer" }}
                >
                  <span className="text-white rounded-full p-1">
                    <i className="fab fa-instagram text-white text-xl"></i>
                  </span>
                </li>
              </ul>
            </nav>
          </div>
          {!authUser ? (
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4 lg:mr-[30px]">
                <Link to="/signin">
                  <div className="signin-btn">Sign in</div>
                </Link>

                <div className="hidden sm:flex">
                  <Link to="/signup">
                    <button className="signup-btn">Sign up</button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="user-info-container">
              <Link to="/profile">
                <div className="user-info">
                  <img src={currentUserData.photo} className="pfp" alt="pfp" />
                  <div className="username">{currentUserData.username}</div>
                </div>
              </Link>
              <span className="signout" onClick={UserSignOut}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/logout.png`}
                  alt="sign out"
                />
              </span>
            </div>
          )}

          <div className="block md:hidden">
            <button
              onClick={handleIsMenuClicked}
              className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {/* ********** */}
            {isMenuClicked ? (
              <div
                class="absolute right-0 mt-[20px] z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div class="py-1" role="none">
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    Submit your tool
                  </a>
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                  >
                    Resources
                  </a>
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                  >
                    Community
                  </a>
                  <form method="POST" action="#" role="none">
                    <button
                      type="submit"
                      class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-3"
                    >
                      Sign in
                    </button>
                    <button
                      type="submit"
                      class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-3"
                    >
                      Sign out
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              <div></div>
            )}
            {/* ********** */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
