import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { doc, onSnapshot } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import ProfilePhoto from "../ProfilePhoto";

function Navbar() {
  const [authUser, setAuthUser] = useState(null);
  const { currentUser, currentUserData, isAdmin } = useContext(AuthContext);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log("Navbar User Data" + typeof JSON.stringify(currentUserData));
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    // Attach the event listener on component mount
    window.addEventListener("resize", handleResize);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const navigate = useNavigate();

  const handleIsMenuClicked = () => {
    setIsMenuClicked(!isMenuClicked);
  };
  useEffect(() => {
    console.log("navbar : " + typeof currentUserData);
  }, []);
  useEffect(() => {
    setIsMenuClicked(false);

    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return listen();
  }, [currentUser]);
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
     
  <header aria-label="Site Header" className="navbar-header py-6 border-none bg-black bg-opacity-50">
  <div className="lg:px-[94px] px-[20px]">
    <div className="flex h-16 items-center justify-between">
      <div className={`flex items-center justify-center flex-grow ${screenWidth < 768 ? 'ml-2' : 'ml-60'}`}>
        <Link to="/" className="flex items-center">
          <img
            className={`xl:w-[200px] lg:w-[160px] md:w-[180px] sm:w-[140px] w-[140px] mx-auto ${screenWidth < 768 ? 'text-left ml-50' : ''}`}
            src={`${process.env.PUBLIC_URL}/TechBibleLogoV2.svg`}
            alt=""
          />    
        </Link>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Site Nav">
          <ul className="flex items-center gap-6 text-sm mr-6">
            <div className="flex flex-row lg:gap-[64px] gap-6">
              {isAdmin && (
                <Link to="/AdminSpace">
                  <div className="text-[15px] px-4 py-2 transition text-white duration-300 hover:text-gray-800">
                    Admin Space
                  </div>
                </Link>
              )}
            </div>
          </ul>
        </nav>
      </div>

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
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* isMenuClicked */}
        <div
          style={
            !isMenuClicked
              ? {
                  display: "hidden",
                  pointerEvents: "none",
                  transition: "transform ease-out .3ms, opacity ease-out .3s",
                  transform: "scale(1)",
                  opacity: 0,
                }
              : {
                  display: "block",
                  transition: "transform ease-in .3s, opacity ease-in .3s",
                  transform: "scale(1)",
                  opacity: 1,
                }
          }
          className="absolute right-0 mt-[20px] z-10 w-56 origin-top-right bg-orange-500 rounded"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          {!authUser ? (
            <div>
              <Link to="/signin">
                <div className="text-[15px] px-4 py-2 transition duration-300 hover:bg-orange-600 hover:text-black rounded">
                  Log in
                </div>
              </Link>
              <Link to="/signup">
                <div className="text-[15px] px-4 py-2 transition duration-300 hover:bg-orange-600 hover:text-black rounded">
                  Sign up
                </div>
              </Link>
            </div>
          ) : (
            <div>
              <div className="text-[15px] px-4 py-2 transition duration-300 hover:bg-orange-600 hover:text-black rounded">
                <div className="user-info-container">
                  <Link to="/profile">
                    <div
                      className="user-info hover:text-black"
                      onClick={() => {
                        navigate("/profile");
                      }}
                    >
                      <img src={currentUserData?.photo} className="pfp" />
                      <div className="username text-white">
                        {currentUserData?.username}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="text-[15px] px-4 py-2 transition duration-300 hover:bg-orange-600 hover:text-black rounded">
                <span className="signout cursor-pointer flex" onClick={UserSignOut}>
                  Sign out
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/logout.png`}
                    alt="sign out"
                    className="ml-5"
                  />
                </span>
              </div>
            </div>
          )}
          <div className="py-1 bg-orange-500" role="none">
            {/* <Link to="/contactus">
              <div className="text-[15px] px-4 py-2 transition duration-300 hover:bg-orange-600 hover:text-black rounded">
                Contact us
              </div>
            </Link> */}
          </div>
        </div>
      </div>

      {/* Rest of the code */}
      {!authUser && screenWidth >= 768 && (
        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4 lg:mr-[30px]">
            <Link to="/signin">
              <div className="signin-btn light">Log in</div>
            </Link>
            <div className="hidden sm:flex">
              <Link to="/signup">
                <button className="signup-btn light">Sign up</button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {authUser && screenWidth >= 768 && (
        <div
          className="user-info-container"
          style={{ display: screenWidth < 768 ? "none" : "flex" }}
        >
          <Link to="/profile">
            <div className="user-info">
              <img src={currentUserData?.photo} className="pfp" />
              <div className="username">{currentUserData?.username}</div>
            </div>
          </Link>
          <button
            className="signout cursor-pointer text-white px-2 py-1 rounded-md fontWeight-500 transition duration-200 hover:bg-[#ef4823] hover:text-black"
            onClick={UserSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  </div>
</header>  

  );
}

export default Navbar;