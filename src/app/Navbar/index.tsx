"use client";
import spanStyle from "./Navbar.module.css";

export default function Navbar() {
  function handleLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      const {
        coords: { latitude, longitude },
      } = position;
      console.log(latitude);
    });
  }

  return (
    <nav className="absolute inset-0 z-10 grid h-24 grid-cols-12 items-center justify-items-center bg-white bg-opacity-25 shadow-lg shadow-cyan-700 backdrop-blur-sm">
      <svg
        width="67"
        height="65"
        viewBox="0 0 67 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="col-start-3"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.126 4.0625V10.0625H34.126V4.0625H30.126ZM41.3507 42.5938C44.2778 40.0278 46.126 36.261 46.126 32.0625C46.126 24.3305 39.858 18.0625 32.126 18.0625C24.394 18.0625 18.126 24.3305 18.126 32.0625C18.126 32.3461 18.1344 32.6278 18.151 32.9072C16.7815 33.3885 15.503 34.0629 14.348 34.8978C14.2019 33.9742 14.126 33.0272 14.126 32.0625C14.126 22.1214 22.1849 14.0625 32.126 14.0625C42.0671 14.0625 50.126 22.1214 50.126 32.0625C50.126 36.9996 48.1383 41.4724 44.9196 44.7244C43.9032 43.783 42.6909 43.0502 41.3507 42.5938ZM54.126 30.0625H60.126V34.0625H54.126V30.0625ZM55.3746 16.3304L50.1785 19.3304L52.1785 22.7945L57.3746 19.7946L55.3746 16.3304ZM41.394 12.0101L44.394 6.81396L47.8582 8.81396L44.8582 14.0101L41.394 12.0101ZM16.3939 8.81396L19.3939 14.0101L22.858 12.0101L19.858 6.81396L16.3939 8.81396ZM12.0735 22.7945L6.87732 19.7946L8.87732 16.3304L14.0735 19.3304L12.0735 22.7945ZM10.126 30.0625H4.12598V34.0625H10.126V30.0625ZM55.3747 47.7946L50.1786 44.7946L52.1786 41.3304L57.3747 44.3304L55.3747 47.7946Z"
          fill="url(#paint0_linear_634_211)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.126 56.062C23.1816 56.062 23.2372 56.0616 23.2926 56.0608H37.9924C38.0179 56.0614 38.0436 56.0618 38.0692 56.062H38.126V56.0623C38.126 56.0623 38.126 56.0623 38.126 56.0623C41.4397 56.0623 44.126 53.376 44.126 50.0623C44.126 46.7485 41.4397 44.0622 38.126 44.0622C36.5872 44.0622 35.1837 44.6415 34.1217 45.5939C34.1301 45.4178 34.1343 45.2406 34.1343 45.0625C34.1343 43.712 33.8909 42.4183 33.4456 41.2229C34.8421 40.482 36.435 40.0622 38.126 40.0622C43.6489 40.0622 48.126 44.5394 48.126 50.0623C48.126 55.5851 43.6489 60.0623 38.126 60.0623C38.1015 60.0623 38.0771 60.0622 38.0527 60.062L23.2035 60.062V60.0619C23.1777 60.062 23.1518 60.062 23.126 60.062C14.8417 60.062 8.12598 53.3463 8.12598 45.062C8.12598 36.7777 14.8417 30.062 23.126 30.062C29.6702 30.062 35.2355 34.2528 37.2848 40.097C35.9041 40.212 34.603 40.6075 33.4388 41.2264C31.8821 37.0425 27.8521 34.062 23.126 34.062C17.0509 34.062 12.126 38.9869 12.126 45.062C12.126 51.1372 17.0509 56.062 23.126 56.062Z"
          fill="url(#paint1_linear_634_211)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_634_211"
            x1="32.126"
            y1="4.0625"
            x2="32.126"
            y2="47.7946"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EFC977" />
            <stop offset="1" stopColor="#E07256" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_634_211"
            x1="28.126"
            y1="30.062"
            x2="28.126"
            y2="60.0623"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B2D4F7" />
            <stop offset="1" stopColor="#D9E2F3" />
          </linearGradient>
        </defs>
      </svg>
      <div className="search-bar col-span-4 col-start-5 flex items-center gap-6 rounded-lg border-2 border-cyan-700 border-opacity-30 bg-white bg-opacity-20 px-3 py-2">
        <form action="" className="flex items-center gap-6">
          <button type="submit">
            <svg
              width="30"
              height="30"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="invert"
            >
              <path
                d="M2.04688 32.625L9.26653 25.3925M5.26562 15.7266C5.26562 19.3546 6.70687 22.8341 9.27231 25.3996C11.8378 27.965 15.3172 29.4062 18.9453 29.4062C22.5734 29.4062 26.0529 27.965 28.6183 25.3996C31.1838 22.8341 32.625 19.3546 32.625 15.7266C32.625 12.0985 31.1838 8.619 28.6183 6.05356C26.0529 3.48812 22.5734 2.04688 18.9453 2.04688C15.3172 2.04688 11.8378 3.48812 9.27231 6.05356C6.70687 8.619 5.26562 12.0985 5.26562 15.7266Z"
                stroke="black"
                strokeWidth="3.21875"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Enter your city"
            className="h-9 bg-white bg-opacity-0 text-xl outline-none"
          />
        </form>
        <button name="location" onClick={handleLocation}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            className="invert"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M19 12C19 15.866 15.866 19 12 19M19 12C19 8.13401 15.866 5 12 5M19 12H21M12 19C8.13401 19 5 15.866 5 12M12 19V21M5 12C5 8.13401 8.13401 5 12 5M5 12H3M12 5V3M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
            </g>
          </svg>
        </button>
      </div>
      <input
        type="checkbox"
        name="theme"
        id="theme"
        className={`relative col-start-10 flex h-10 w-20 items-center ${spanStyle.fofo}`}
        onChange={(e) => console.log(e.target.checked)}
      />
    </nav>
  );
}
