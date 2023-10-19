const UserRegister = () => {
    return(
        <div className="relative px-12 w-screen h-screen flex flex-col justify-center items-center">
            <img className="absolute w-screen h-screen z-0" src="assets/bg-music.svg" alt="background image"/>
            <div className="z-10 w-screen absolute h-screen bg-black opacity-[0.4]" />

            <div className="z-20 w-screen h-screen">
                <div className="p-5 font-bold text-sm tracking-wide">
                    <h2 className="text-center">Create account</h2>
                </div>


                <div className="flex justify-center items-center flex-col">
                    <form className="gap-y-5 py-7 px-10 w-full flex flex-col justify-center items-start">
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="email">What’s your email ?</label>
                            <input type="text" className="text-sm border border-transparent p-4 w-[100%] h-[45px] rounded-sm bg-[#6D6D6D]"></input>
                            <p className="text-[9px]">You’ll need to confirm this email later</p>
                        </div>
                        

                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="password">Create Password.</label>
                            <input type="password" className="text-sm p-4 w-full h-[45px] rounded-sm bg-[#6D6D6D]"></input>
                            <p className="text-[9px]">use at least 8 characters</p>
                        </div>
                        
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="dob">What’s your date of birth ?</label>
                            <input type="date" className="text-sm border border-transparent p-4 w-full h-[45px] rounded-sm bg-[#6D6D6D]"></input>
                        </div>
                        
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="gender">What’s your gender ?</label>
                            <select className="text-sm outline-none appearance-none p-2.5 w-full h-[45px] rounded-sm bg-[#6D6D6D]" name="gender" id="gender">
                                <option selected value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Others</option>
                                <option value="prefer-not-to-say">Prefer not to say</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="email">What’s your name ?</label>
                            <input type="text" className="text-sm border border-transparent p-4 w-full h-[45px] rounded-sm bg-[#6D6D6D]"></input>
                            <p className="text-[9px]">This appears on your Meloverse profile.</p>
                        </div>
                    </form>

                    <div className="bg-[#4E4E4E] w-[85%] h-[1px]"/>

                    <div className="px-10 pb-10 flex flex-col gap-y-5 mt-4 w-full">
                        <p className="text-[9px] w-full">By tapping on “Create account”, you agree to the Meloverse Terms of Use and Privacy Policy.</p>

                        <div className="flex gap-10 text-[9px] text-lightPrimary">
                            <p>Terms of use</p>
                            <p>Privacy Policy</p>
                        </div>

                        <div className="mt-4 text-sm font-semibold h-[51px] flex items-center justify-center rounded-[80px] border-primary border-4 hover:cursor-pointer">
                            <a href="#">Create account</a>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    );
}

export default UserRegister;