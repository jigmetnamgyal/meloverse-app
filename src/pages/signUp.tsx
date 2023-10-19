const SignUp = () => {
  return (
    <div className="gap-8 p-12 w-screen h-screen flex flex-col justify-center items-center">
      <div className="w-full h-[50%] flex items-end text-[39px] leading-[50px] font-extrabold tracking-[5px]">
        <p>Enjoy Your <br /> Favorite <br /> Music</p>
      </div>
      <div className="flex flex-col">
        <div className="text-sm font-semibold w-[310px] h-[51px] flex items-center justify-center rounded-[80px] bg-primary mb-[24px] hover:cursor-pointer">
          <a className="medium" href="#">
            Get Started
          </a>
        </div>

        <div className="text-sm font-semibold w-[310px] h-[51px] flex items-center justify-center rounded-[80px] border-primary border-4">
          <img src="assets/google.svg" alt="google icon" className=" mr-1" />
          <a href="#">Continue with Google</a>
        </div>
      </div>

      <div className="w-[70%]">
        <p className=" text-center text-[10px] text-[#B7B7B7]">
            By continuing, you agree to the <span className="text-primary">Terms of services</span> & <span className="text-primary"> Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
