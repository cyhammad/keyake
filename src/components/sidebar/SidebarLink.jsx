"use client";

import { usePathname, useRouter } from "next/navigation";

const SidebarLink = ({
  icon = (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 26.25C19.3125 26.25 18.7242 26.0054 18.235 25.5163C17.7458 25.0271 17.5008 24.4383 17.5 23.75V18.75C17.5 18.0625 17.745 17.4742 18.235 16.985C18.725 16.4958 19.3133 16.2508 20 16.25H25C25.6875 16.25 26.2763 16.495 26.7663 16.985C27.2563 17.475 27.5008 18.0633 27.5 18.75V23.75C27.5 24.4375 27.2554 25.0263 26.7663 25.5163C26.2771 26.0063 25.6883 26.2508 25 26.25H20ZM2.5 22.5V20H13.75V22.5H2.5ZM20 13.75C19.3125 13.75 18.7242 13.5054 18.235 13.0163C17.7458 12.5271 17.5008 11.9383 17.5 11.25V6.25C17.5 5.5625 17.745 4.97417 18.235 4.485C18.725 3.99583 19.3133 3.75083 20 3.75H25C25.6875 3.75 26.2763 3.995 26.7663 4.485C27.2563 4.975 27.5008 5.56333 27.5 6.25V11.25C27.5 11.9375 27.2554 12.5262 26.7663 13.0163C26.2771 13.5063 25.6883 13.7508 25 13.75H20ZM2.5 10V7.5H13.75V10H2.5Z"
        fill="currentColor"
      />
    </svg>
  ),
  title = "",
  link = "/",
}) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <button
      className={`flex flex-col md:flex-row items-center w-full gap-1.5  md:gap-3 justify-center md:justify-start md:px-4 py-2 md:py-3 transition-all ease-in duration-150 rounded-[10px] ${
        pathname == link ? "bg-primary" : "hover:bg-primary"
      }`}
      onClick={() => router.push(link)}
    >
      {icon}
      <span className="text-[8px] md:text-base">{title}</span>
    </button>
  );
};

export default SidebarLink;
