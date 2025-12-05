  export default function Home() {
    return (
      <>
      <div className="flex justify-center items-start pt-27 min-h-screen">
        <div className="text-center text-black">
          <h1 className="text-[48px] mb-10">
              Sign Up
          </h1>

          <div className="flex-row gap-6 items-center justify-center border-2 border-black px-12 py-12 rounded bg-[#FFF7D1] w-[410px] h-[310px] ">
            <input
              type="email"
              placeholder="  Email"
              className="w-full mb-6 px-2 py-3 border-2 border-black rounded bg-[#FFECC8]"
            />
            <input
              type="password"
              placeholder="  Password"
              className="w-full mb-6 px-2 py-3 border-2 border-black rounded bg-[#FFECC8]"
            />
            <button className="px-6 py-3 bg-[#FFE3A6] text-black border-2 rounded">
              Sign Up
            </button>

              <p className="mt-4 text-[1em] text-[#5C5950]">
                Have an account? <u>Login</u>
              </p>
            
          </div>

        </div>
      </div>
      </>
    );
  }