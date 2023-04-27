import React from "react";
import { Link } from "react-router-dom";

function ToolSearch() {
  return (
    <div class="search-tool-container max-w-2xl mx-auto">
      <h2 class="text-white fontWeight-500">
        The Largest Saas Tools directory
      </h2>
      <form class="flex items-center bg-black mt-5">
        <div class="relative w-full">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="voice-search"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search your tool..."
            required
          />
        </div>
        <div class="ml-2">
          <svg
            width="30"
            height="28"
            viewBox="0 0 30 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3_252)">
              <path
                d="M2.79855 20.9446V20.4649C2.79855 14.2308 2.79855 7.9941 2.79855 1.76005C2.79855 1.55181 2.80337 1.33302 2.85163 1.13532C2.97468 0.637127 3.40173 0.286544 3.87945 0.278636C4.34269 0.270728 4.80594 0.270728 5.26677 0.278636C5.93751 0.286544 6.40317 0.800557 6.40558 1.54126C6.41041 3.51033 6.40558 5.47939 6.40558 7.44846C6.40558 11.8083 6.40558 16.1682 6.40558 20.5281V20.9446C6.85676 20.9446 7.28623 20.9551 7.71569 20.942C8.039 20.9314 8.34059 20.9578 8.50466 21.3215C8.6832 21.7169 8.68561 22.115 8.46605 22.4919C8.33818 22.7133 8.18859 22.9216 8.04865 23.1351C7.07873 24.6165 6.10881 26.0953 5.1389 27.5767C4.78422 28.1171 4.41749 28.1197 4.06282 27.5767C2.97226 25.9187 1.88895 24.2554 0.798394 22.5974C0.581248 22.2679 0.506453 21.9173 0.619852 21.5271C0.738075 21.1107 0.940745 20.9472 1.33885 20.9472C1.80933 20.9472 2.28222 20.9472 2.79855 20.9472V20.9446Z"
                fill="white"
              />
              <path
                d="M19.9651 0.275992C22.6746 0.275992 25.3841 0.29708 28.0912 0.262812C28.979 0.252268 29.5774 0.956071 29.4954 1.80749C29.4785 1.97355 29.4954 2.14489 29.4954 2.31359C29.4954 3.18873 28.979 3.75283 28.1732 3.75283C24.1343 3.75283 20.0954 3.75283 16.0564 3.75283C14.6305 3.75283 13.2022 3.75283 11.7763 3.75283C10.9366 3.75283 10.43 3.19664 10.4251 2.27669C10.4251 2.0869 10.4203 1.89711 10.4251 1.70732C10.4348 0.826909 10.9487 0.278628 11.7545 0.278628C14.493 0.278628 17.229 0.278628 19.9675 0.278628L19.9651 0.275992Z"
                fill="white"
              />
              <path
                d="M18.4595 8.35236C20.6551 8.35236 22.8531 8.37609 25.0487 8.34182C25.98 8.326 26.5253 9.01926 26.4698 9.90231C26.4626 10.0183 26.4698 10.1343 26.4698 10.2503C26.4698 11.302 25.9921 11.8266 25.0366 11.8292C23.7844 11.8292 22.5322 11.8292 21.28 11.8292C18.1 11.8292 14.9225 11.8292 11.7425 11.8266C10.9704 11.8266 10.4517 11.2836 10.4251 10.4427C10.4179 10.2107 10.4179 9.97875 10.4251 9.74679C10.4493 8.89537 10.9463 8.36027 11.728 8.35763C13.3856 8.35236 15.0431 8.35763 16.6982 8.35763C17.2869 8.35763 17.8732 8.35763 18.4619 8.35763L18.4595 8.35236Z"
                fill="white"
              />
              <path
                d="M16.6789 19.89C15.06 19.89 13.441 19.8663 11.8221 19.9005C10.9559 19.919 10.3745 19.2811 10.4203 18.3506C10.4275 18.203 10.4203 18.0553 10.4203 17.9077C10.4275 16.9641 10.927 16.4158 11.7883 16.4158C13.9381 16.4158 16.0878 16.4158 18.2351 16.4184C19.3426 16.4184 20.4524 16.4158 21.5599 16.4158C22.4647 16.4158 22.952 16.9509 22.9544 17.9341C22.9544 18.1028 22.9544 18.2715 22.9544 18.4402C22.9544 19.3496 22.4622 19.8873 21.6226 19.89C19.9747 19.8926 18.3268 19.89 16.6789 19.89Z"
                fill="white"
              />
              <path
                d="M14.8983 27.9668C13.8488 27.9668 12.7968 27.9694 11.7473 27.9668C10.9366 27.9668 10.4324 27.4185 10.4227 26.5328C10.4203 26.2376 10.4131 25.9424 10.4493 25.6498C10.5313 24.9803 11.0162 24.4979 11.6315 24.4952C13.8005 24.4847 15.9696 24.4873 18.1362 24.4952C18.7346 24.4952 19.2268 24.9302 19.3112 25.576C19.3691 26.0056 19.3715 26.4617 19.3112 26.8913C19.2219 27.545 18.737 27.9589 18.1338 27.9642C17.0553 27.9721 15.9744 27.9642 14.8959 27.9642L14.8983 27.9668Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_3_252">
                <rect
                  width="28.9359"
                  height="27.7172"
                  fill="white"
                  transform="translate(0.566711 0.262695)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </form>

      <div class="logo-search-container mt-5">
        <div class="mr-4">
          <div>logo</div>
        </div>
        <p class="fontWeight-300 text-[#F5F5F7]">
          Browse 1000+ of the latest tech tools per task Updated daily
        </p>
      </div>

      <div class="px-mobile-1 px-tablet-1 pt-mobile-0 pt-desktop-6 pt-tablet-6 pt-widescreen-6 pb-mobile-7 pb-desktop-6 pb-tablet-6 pb-widescreen-6">
      <div
        class="styles_item__Sn_12 flex direction-row flex-row-gap-4 flex-row-gap-mobile-2 flex-row-gap-widescreen-undefined flex-1"
        data-test="post-item-390145">
        <a href="/posts/mage-4" aria-label="Mage">
          <div
            class="styles_thumbnail__Rmwk5 styles_thumbnail__E2_pB"
            data-test="post-thumbnail">
            <img
              loading="lazy"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png"
              style={{width: "80px",height: "80px"}}
              alt="Adobe XD"
              class="styles_mediaThumbnail__LDCQN"
            />
          </div>
        </a>
        <div class="flex direction-column flex-1">
          <div class="color-darker-grey fontSize-mobile-12 fontSize-desktop-16 fontSize-tablet-16 fontSize-widescreen-16 fontWeight-600 noOfLines-2 styles_format__w0VVk">
            <Link to="">Adobe XD</Link>
            <a
              href="/r/p/390145"
              rel="noopener"
              target="_blank"
              class="styles_externalLinkIcon__822Ku"
            >
              <svg width="13" height="14" viewBox="0 0 13 14">
                <g
                  stroke="#4B587C"
                  strokeWidth="1.5"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <path d="M9.6 4H4.2a2.4 2.4 0 0 0-2.4 2.4V10"></path>
                  <path d="M6.6 7l3-3-3-3M12 10v3H0"></path>
                </g>
              </svg>
            </a>
          </div>
          <div class="color-lighter-grey fontSize-mobile-12 fontSize-desktop-16 fontSize-tablet-16 fontSize-widescreen-16 fontWeight-400 noOfLines-2">
            <p class="styles_tagline__j29pO">
              Browse 1x000+ of the latest tech tools per task Updated
              daily
            </p>
          </div>
          <div class="flex direction-row flex-row-gap-6 mt-3 align-center">
            <div class="flex direction-row flex-row-gap-3">
              <div class="color-lighter-grey fontSize-12 fontWeight-400 noOfLines-undefined">
                Free
              </div>
              <a
                class="styles_postTopicLink__wDe_p"
                href="/topics/art"
              >
                <div class="color-lighter-grey fontSize-12 fontWeight-400 noOfLines-undefined">
                  Design tool
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="flex direction-column mr-mobile-0 mr-desktop-2 mr-tablet-2 mr-widescreen-2 mt-2 mb-2 ml-mobile-2 ml-desktop-0 ml-tablet-0">
          <button
            type="button"
            data-test="vote-button"
            class="styles_reset__opz7w styles_feed__JnsOv"
          >
            <div class="flex direction-column align-center">
              <div class="styles_icon___8PK0 styles_lightGrey__b_fhT"></div>
              <div class="color-lighter-grey fontSize-12 fontWeight-600 noOfLines-undefined">
                368
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ToolSearch;