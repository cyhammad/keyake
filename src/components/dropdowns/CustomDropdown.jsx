import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CustomDropdown = ({
  options = [""],
  selectedOption = "",
  setSelectedOption = () => {},
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-2 py-2 rounded-[10px] text-xs sm:text-base gap-2 border border-custom-border text-custom-gray">
        {selectedOption}
        {chevronDown}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border shadow-none border-custom-border">
        {options.map((option, index) => (
          <DropdownMenuItem
            onClick={() => setSelectedOption(option)}
            key={index}
          >
            {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const chevronDown = (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    className="w-[15px] h-[15px] sm:h-[21px] sm:w-[21px]"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.75 7.875L10.5 13.125L5.25 7.875"
      stroke="#747070"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CustomDropdown;
