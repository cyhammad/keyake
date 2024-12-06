import LoginForm from "@/components/auth/LoginForm";
import Image from "next/image";

const LoginPage = () => {
  return (
    <section className="flex flex-col w-full h-screen md:grid md:grid-cols-2">
      <div className="relative flex flex-col items-center justify-center py-5 overflow-hidden">
        <Image src="/logo.svg" width={264} height={69} alt="Logo" />
        <Image
          src="/login.svg"
          width={483}
          height={481}
          alt="Login"
          className="hidden md:block"
        />
        <div className="hidden md:block w-[200px] h-[200px] bottom-[-79px] left-[-59px] rounded-full bg-primary absolute"></div>
        <div className="hidden md:block w-[79px] h-[79px] bottom-[79px] left-[110px] rounded-full bg-primary absolute"></div>
      </div>
      <div className="relative flex flex-col items-center md:justify-center overflow-hidden h-full text-center gap-10 px-5 md:px-10 py-10 md:rounded-l-[20px] md:rounded-tr-none rounded-t-[20px] bg-secondary text-white">
        <div className="flex flex-col gap-1 md:gap-2">
          <h1 className="text-[38px] md:text-[48px] leading-[60px]">Login</h1>
          <span className="text-custom-gray">Login to continue access</span>
        </div>
        <LoginForm />
        <div className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] md:top-[-47px] md:right-[-38px] rounded-full bg-primary absolute top-[-27px] right-[-18px]"></div>
        <div className="w-[49px] md:w-[79px] md:h-[79px] md:top-[159px] h-[49px] rounded-full bg-primary absolute top-[79px] right-[-5px]"></div>
      </div>
    </section>
  );
};

export default LoginPage;
