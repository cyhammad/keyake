"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col w-full gap-2 max-w-[514px]">
        <div className="flex items-center gap-1 px-1">
          {userSvg}
          <span className="text-lg">Username</span>
        </div>
        <div className="border border-custom-lightgray rounded-[10px] px-4 py-4">
          <input
            className="w-full bg-transparent focus:outline-none placeholder:text-custom-gray"
            type="text"
            name="username"
            id="username"
            placeholder="Anna Huang"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-2 max-w-[514px]">
        <div className="flex items-center gap-1.5 px-1">
          {passwordSvg}
          <span className="text-lg">Password</span>
        </div>
        <div className="border flex items-center border-custom-lightgray rounded-[10px] px-4 py-4">
          <input
            className="w-full bg-transparent focus:outline-none placeholder:text-custom-gray"
            type={showPassword ? "text" : "password"}
            name="username"
            id="username"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={() => setShowPassword(!showPassword)}>
            {showPasswordSvg}
          </button>
        </div>
        <button className="self-end text-sm text-custom-gray">
          Forget Password
        </button>
      </div>
      <button
        onClick={() => router.push("/")}
        className="w-full py-4 bg-primary rounded-[10px] mt-5 max-w-[345px]"
      >
        Login
      </button>
    </>
  );
};

const userSvg = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 1.30206C11.1877 1.30206 9.92921 1.82336 9.00129 2.75127C8.07338 3.67919 7.55208 4.93771 7.55208 6.24998C7.55208 7.56225 8.07338 8.82077 9.00129 9.74869C9.92921 10.6766 11.1877 11.1979 12.5 11.1979C13.8123 11.1979 15.0708 10.6766 15.9987 9.74869C16.9266 8.82077 17.4479 7.56225 17.4479 6.24998C17.4479 4.93771 16.9266 3.67919 15.9987 2.75127C15.0708 1.82336 13.8123 1.30206 12.5 1.30206ZM9.11458 6.24998C9.11458 5.35211 9.47126 4.49102 10.1061 3.85613C10.741 3.22124 11.6021 2.86456 12.5 2.86456C13.3979 2.86456 14.259 3.22124 14.8938 3.85613C15.5287 4.49102 15.8854 5.35211 15.8854 6.24998C15.8854 7.14785 15.5287 8.00894 14.8938 8.64383C14.259 9.27872 13.3979 9.6354 12.5 9.6354C11.6021 9.6354 10.741 9.27872 10.1061 8.64383C9.47126 8.00894 9.11458 7.14785 9.11458 6.24998ZM12.5 12.7604C10.0906 12.7604 7.86979 13.3083 6.225 14.2333C4.60416 15.1458 3.38542 16.5271 3.38542 18.2291V18.3354C3.38437 19.5458 3.38333 21.0646 4.71562 22.15C5.37083 22.6833 6.28854 23.0635 7.52812 23.3135C8.76979 23.5656 10.3896 23.6979 12.5 23.6979C14.6104 23.6979 16.2292 23.5656 17.4729 23.3135C18.7125 23.0635 19.6292 22.6833 20.2854 22.15C21.6177 21.0646 21.6156 19.5458 21.6146 18.3354V18.2291C21.6146 16.5271 20.3958 15.1458 18.776 14.2333C17.1302 13.3083 14.9104 12.7604 12.5 12.7604ZM4.94792 18.2291C4.94792 17.3427 5.59583 16.3802 6.99062 15.5958C8.36146 14.825 10.3073 14.3229 12.501 14.3229C14.6927 14.3229 16.6385 14.825 18.0094 15.5958C19.4052 16.3802 20.0521 17.3427 20.0521 18.2291C20.0521 19.5916 20.0104 20.3583 19.2979 20.9375C18.9125 21.2521 18.2667 21.5594 17.1625 21.7823C16.0615 22.0052 14.5562 22.1354 12.5 22.1354C10.4437 22.1354 8.9375 22.0052 7.8375 21.7823C6.73333 21.5594 6.0875 21.2521 5.70208 20.9385C4.98958 20.3583 4.94792 19.5916 4.94792 18.2291Z"
      fill="white"
    />
  </svg>
);

const passwordSvg = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.5 3.125C18.1167 3.125 22.7896 7.16667 23.7698 12.5C22.7906 17.8333 18.1167 21.875 12.5 21.875C6.88333 21.875 2.21042 17.8333 1.23125 12.5C2.21042 7.16667 6.88333 3.125 12.5 3.125ZM12.5 19.7917C14.6246 19.7914 16.6862 19.0699 18.3474 17.7453C20.0085 16.4206 21.1707 14.5713 21.6438 12.5C21.1694 10.43 20.0067 8.58225 18.3458 7.2589C16.6849 5.93555 14.6242 5.21495 12.5005 5.21495C10.3769 5.21495 8.3161 5.93555 6.65521 7.2589C4.99432 8.58225 3.83162 10.43 3.35729 12.5C3.83031 14.5711 4.99237 16.4203 6.65328 17.745C8.31418 19.0696 10.3756 19.7912 12.5 19.7917ZM12.5 17.1875C11.2568 17.1875 10.0645 16.6936 9.18544 15.8146C8.30636 14.9355 7.8125 13.7432 7.8125 12.5C7.8125 11.2568 8.30636 10.0645 9.18544 9.18544C10.0645 8.30636 11.2568 7.8125 12.5 7.8125C13.7432 7.8125 14.9355 8.30636 15.8146 9.18544C16.6936 10.0645 17.1875 11.2568 17.1875 12.5C17.1875 13.7432 16.6936 14.9355 15.8146 15.8146C14.9355 16.6936 13.7432 17.1875 12.5 17.1875ZM12.5 15.1042C13.1907 15.1042 13.853 14.8298 14.3414 14.3414C14.8298 13.853 15.1042 13.1907 15.1042 12.5C15.1042 11.8093 14.8298 11.147 14.3414 10.6586C13.853 10.1702 13.1907 9.89583 12.5 9.89583C11.8093 9.89583 11.147 10.1702 10.6586 10.6586C10.1702 11.147 9.89583 11.8093 9.89583 12.5C9.89583 13.1907 10.1702 13.853 10.6586 14.3414C11.147 14.8298 11.8093 15.1042 12.5 15.1042Z"
      fill="white"
    />
  </svg>
);

const showPasswordSvg = (
  <svg
    width="20"
    height="12"
    viewBox="0 0 29 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 10C6.4 -2 22.6 -2 28 10"
      stroke="#747070"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.5 16C13.9091 16 13.3239 15.8836 12.7779 15.6575C12.232 15.4313 11.7359 15.0998 11.318 14.682C10.9002 14.2641 10.5687 13.768 10.3425 13.2221C10.1164 12.6761 10 12.0909 10 11.5C10 10.9091 10.1164 10.3239 10.3425 9.77792C10.5687 9.23196 10.9002 8.73588 11.318 8.31802C11.7359 7.90016 12.232 7.56869 12.7779 7.34254C13.3239 7.1164 13.9091 7 14.5 7C15.6935 7 16.8381 7.47411 17.682 8.31802C18.5259 9.16193 19 10.3065 19 11.5C19 12.6935 18.5259 13.8381 17.682 14.682C16.8381 15.5259 15.6935 16 14.5 16Z"
      stroke="#747070"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default LoginForm;
