const SignUp = () => {
  return (
    <div className="gap-8 p-12 w-screen h-screen flex flex-col justify-center items-center">
      <img className="absolute w-screen h-screen z-0" src="assets/bg_image.svg" alt="background image"/>
      <div className="z-10 w-screen absolute h-screen bg-black opacity-[0.53]" />
      <div className="z-20 w-full h-[50%] flex items-end text-[39px] leading-[50px] font-extrabold tracking-[5px]">
        <p>Enjoy Your <br /> Favorite <br /> Music</p>
      </div>
      <div className="z-20 flex flex-col">
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

      <div className="z-20 w-[70%]">
        <p className=" text-center text-[10px] text-[#B7B7B7]">
            By continuing, you agree to the <span className="text-primary">Terms of services</span> & <span className="text-primary"> Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
