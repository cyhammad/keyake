import Sidebar from "@/components/sidebar/Sidebar";
import HomeTopbar from "@/components/topbar/HomeTopbar";

const HomeLayout = ({ children }) => {
  return (
    <div className="flex w-full h-full max-h-screen overflow-y-auto pl-[62px] md:pl-[322px] relative">
      <Sidebar />
      <div className="flex flex-col w-full gap-2 px-3 py-4 md:py-8 md:px-6">
        <HomeTopbar />
        {children}
      </div>
    </div>
  );
};

export default HomeLayout;
