const SignUp = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
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
    </div>
  );
};

export default SignUp;
