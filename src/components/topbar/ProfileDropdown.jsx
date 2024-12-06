import React from "react";

const ProfileDropdown = () => {
  return (
    <div
      className="rounded-full w-[50px] h-[50px] sm:w-[72px] sm:h-[72px]"
      style={{
        backgroundImage: "url('/dummy-profile.jpeg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></div>
  );
};

export default ProfileDropdown;
