"use client";
import { useTheme } from "next-themes";
import buttonStyle from "./DarkModeToggle.module.css";
import { useEffect, useRef, useState } from "react";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = useRef<HTMLInputElement>(null);
  const [done, setDone] = useState("loading");

  useEffect(() => {
    const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    const currentTheme = theme === "system" ? isSystemDark : theme;
    if (isDark.current)
      currentTheme === "dark"
        ? (isDark.current.checked = true)
        : (isDark.current.checked = false);
    setDone("");
  }, []);

  function handleDark(e: any) {
    e.target.checked ? setTheme("dark") : setTheme("light");
  }

  return (
    <div className="relative col-start-10 flex h-full items-center">
      <input
        ref={isDark}
        type="checkbox"
        name="theme"
        id="theme"
        className={`absolute  flex h-8 w-[4.125rem] items-center outline-none  
        dark:before:bg-[#333333]
        dark:after:translate-x-9 dark:after:bg-[#245a7a]
        ${buttonStyle.fofo} ${buttonStyle[done]}`}
        onChange={handleDark}
      />
      <label htmlFor="theme" className={`z-30 ${buttonStyle.label}`}>
        <svg
          enableBackground="new 0 0 512 512"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="absolute z-50 h-2/6 -translate-y-[50%] translate-x-1 transition-all duration-300 dark:rotate-[720deg]"
        >
          <g>
            <g>
              <path
                d="M256,144c-61.75,0-112,50.25-112,112c0,61.749,50.25,112,112,112s112-50.251,112-112    C368,194.25,317.75,144,256,144z M256,112c8.833,0,16-7.146,16-16V64c0-8.833-7.167-16-16-16c-8.854,0-16,7.167-16,16v32    C240,104.854,247.146,112,256,112z M256,400c-8.854,0-16,7.167-16,16v32c0,8.854,7.146,16,16,16c8.833,0,16-7.146,16-16v-32    C272,407.167,264.833,400,256,400z M380.417,154.167l22.625-22.625c6.25-6.25,6.25-16.375,0-22.625    c-6.251-6.25-16.375-6.25-22.625,0l-22.625,22.625c-6.251,6.25-6.251,16.375,0,22.625    C364.042,160.416,374.166,160.416,380.417,154.167z M131.541,357.854l-22.623,22.625c-6.252,6.25-6.252,16.377,0,22.625    c6.249,6.25,16.373,6.25,22.623,0l22.625-22.625c6.251-6.291,6.251-16.375,0-22.625    C147.917,351.604,137.792,351.562,131.541,357.854z M112,256c0-8.833-7.167-16-16-16H64c-8.854,0-16,7.167-16,16    c0,8.854,7.146,16,16,16h32C104.833,272,112,264.854,112,256z M448,240h-32c-8.854,0-16,7.167-16,16c0,8.854,7.146,16,16,16h32    c8.833,0,16-7.146,16-16C464,247.167,456.833,240,448,240z M131.521,154.167c6.249,6.25,16.375,6.25,22.625,0    c6.249-6.25,6.249-16.375,0-22.625l-22.625-22.625c-6.25-6.25-16.376-6.25-22.625,0c-6.25,6.25-6.25,16.375,0,22.625    L131.521,154.167z M380.459,357.812c-6.293-6.25-16.376-6.25-22.625,0c-6.25,6.248-6.293,16.375,0,22.625l22.625,22.625    c6.249,6.248,16.374,6.248,22.625,0c6.249-6.25,6.249-16.377,0-22.625L380.459,357.812z"
                fill="none"
                className="fill-white stroke-white dark:fill-yellow-400 dark:stroke-yellow-400"
              />
            </g>
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 496.158 496.158"
          xmlSpace="preserve"
          fill="#000000"
          className="absolute z-50 h-2/6 -translate-y-[50%] translate-x-9 transition-all duration-300 dark:rotate-[720deg]"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />

          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            <path
              fill="none"
              d="M248.082,0.003C111.07,0.003,0,111.063,0,248.085c0,137.001,111.07,248.07,248.082,248.07 c137.006,0,248.076-111.069,248.076-248.07C496.158,111.062,385.088,0.003,248.082,0.003z"
            />
            <path
              fill="#f2c900"
              d="M322.377,80.781c10.1,22.706,15.721,47.844,15.721,74.298c0,101.079-81.94,183.019-183.019,183.019 c-26.454,0-51.591-5.622-74.298-15.721c28.49,64.053,92.674,108.721,167.298,108.721c101.078,0,183.019-81.94,183.019-183.019 C431.098,173.454,386.43,109.27,322.377,80.781z"
            />
            <g>
              <path
                fill="#dbbb00"
                d="M155.079,338.098c-26.454,0-51.591-5.622-74.298-15.721 c28.49,64.053,92.674,108.721,167.298,108.721c101.078,0,183.019-81.94,183.019-183.019 C431.098,248.079,256.157,338.098,155.079,338.098z"
              />
              <polygon
                fill="#dbbb00"
                points="236.634,188.671 209.692,187.721 201.228,162.948 192.765,187.721 165.823,188.671 187.533,203.82 179.347,230.293 201.228,213.77 223.109,230.293 214.924,203.82 "
              />
            </g>
            <polygon
              fill="#f2c900"
              points="209.824,194.758 214.465,177.15 199.799,187.941 183.881,178.107 190.219,195.371 175.339,207.49 194.323,206.778 200.644,224.693 206.441,206.399 224.826,205.941 "
            />
            <polygon
              fill="#dbbb00"
              points="101.521,229.699 82.134,229.015 76.043,211.187 69.952,229.015 50.564,229.699 66.187,240.6 60.296,259.651 76.043,247.761 91.789,259.651 85.898,240.6 "
            />
            <polygon
              fill="#f2c900"
              points="82.228,234.079 85.568,221.408 75.014,229.174 63.558,222.096 68.12,234.52 57.412,243.241 71.074,242.729 75.623,255.621 79.795,242.456 93.024,242.127 "
            />
            <polygon
              fill="#dbbb00"
              points="278.639,68.596 255.368,67.775 248.058,46.377 240.747,67.775 217.476,68.596 236.228,81.682 229.156,104.548 248.058,90.276 266.958,104.548 259.887,81.682 "
            />
            <polygon
              fill="#f2c900"
              points="255.482,73.853 259.491,58.644 246.822,67.966 233.072,59.471 238.549,74.382 225.694,84.85 242.093,84.236 247.554,99.71 252.561,83.909 268.44,83.513 "
            />
          </g>
        </svg>
      </label>
    </div>
  );
}
