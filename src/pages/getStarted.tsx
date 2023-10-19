const GetStarted = () => {
  return (
    <div className="relative p-12 w-screen h-screen flex flex-col justify-center items-center">
      <img className="absolute w-screen h-screen z-0" src="assets/bg-music.svg" alt="background image"/>
      <div className="z-10 w-screen absolute h-screen bg-black opacity-[0.4]" />

      <div className="z-20 w-full h-[38%] flex items-end justify-center mb-3">
        <img className="w-[50px] h-[50px]" src="assets/letter-logo.svg" />
      </div>

      <div className="gap-y-8 flex flex-col justify-center items-center">
        <div className="z-20 w-full flex items-end justify-center text-center text-[25px] leading-[35px] font-extrabold">
            <p>Thousand of songs. <br /> Free on Meloverse.</p>
        </div>
        <div className="z-20 gap-y-5 flex flex-col">
            <div className="text-sm font-semibold w-[310px] h-[51px] flex items-center justify-center rounded-[80px] bg-primary hover:cursor-pointer">
              <a className="medium" href="#">
                  Get Started
              </a>
            </div>

            <div className="text-sm font-semibold w-[310px] h-[51px] flex items-center justify-center rounded-[80px] border-primary border-4 hover:cursor-pointer">
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
    </div>
  );
};

export default GetStarted;
