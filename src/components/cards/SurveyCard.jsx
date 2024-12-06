const SurveyCard = ({
  icon = <></>,
  title = "",
  count = 0,
  lastMonthPercentage = 0,
}) => {
  function formatNumberWithCommas(num) {
    return num.toLocaleString();
  }

  return (
    <div className="rounded-[20px] px-4 py-5 xl:px-5 xl:py-6 border border-custom-border flex flex-col">
      <div className="flex items-start gap-3">
        {icon}
        <div className="flex flex-col gap-1">
          <span className="h-[35px] flex items-center">{title}</span>
          <span className="text-2xl font-bold text-primary">
            {formatNumberWithCommas(count)}
          </span>
          <div className="flex items-center gap-1">
            {upSvg}
            <span className="text-xs text-custom-gray">7.3% from last month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const upSvg = (
  <svg
    width="19"
    height="13"
    viewBox="0 0 19 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.57589 11.6274C2.32123 11.8821 1.97585 12.0251 1.61571 12.0251C1.25557 12.0251 0.910187 11.8821 0.655531 11.6274C0.400876 11.3728 0.257813 11.0274 0.257812 10.6672C0.257813 10.3071 0.400876 9.96172 0.655531 9.70706L5.17889 5.18506L5.18839 5.17556C5.55796 4.81358 6.05468 4.61085 6.572 4.61085C7.08931 4.61085 7.58603 4.81358 7.9556 5.17556L7.9651 5.18506L10.2736 7.49356L13.4588 4.12513L12.0474 2.71371C11.9052 2.57136 11.8084 2.39007 11.7692 2.19275C11.73 1.99542 11.7502 1.7909 11.8271 1.60502C11.9041 1.41914 12.0344 1.26024 12.2017 1.14839C12.3689 1.03653 12.5655 0.976739 12.7667 0.976562H17.723C17.9929 0.976562 18.2518 1.0838 18.4427 1.27469C18.6336 1.46557 18.7408 1.72447 18.7408 1.99442V6.9507C18.7406 7.15189 18.6808 7.34851 18.569 7.51573C18.4571 7.68295 18.2982 7.81327 18.1124 7.89024C17.9265 7.9672 17.722 7.98736 17.5246 7.94816C17.3273 7.90896 17.146 7.81216 17.0037 7.66999L15.3792 6.04413L11.7095 9.92692C11.5281 10.1141 11.3116 10.2635 11.0723 10.3667C10.833 10.4699 10.5757 10.5248 10.3151 10.5282C10.0546 10.5316 9.79592 10.4835 9.55402 10.3866C9.31212 10.2897 9.09176 10.1459 8.9056 9.96356L8.8961 9.95406L6.57132 7.63063L2.57589 11.6274Z"
      fill="#75E15A"
    />
  </svg>
);

export default SurveyCard;
