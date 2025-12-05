export default function Home() {
  return (
    <>
      <div>
        <div className="bg-[#FFF9DC] w-screen h-screen text-black flex-col flex justify-center items-center">
          <div className="mb-8 text-[48px]">
            <p>Login</p>
          </div>

          <div className="bg-[#FFF7D1] w-[440px] h-[312px] border-2 border-black flex justify-center items-center flex-row rounded ">
            <div className="flex gap- flex-col">
              <div className="space-y-8 pt-4 ">
                <div className="border-black border-2 w-80 h-12 flex items-center text-[#5C5950] bg-[#FFECC8] rounded"> 
                  <p className="ml-4">Email</p>
                </div>
                <div className="border-black border-2 w-80 h-12 flex items-center text-[#5C5950] bg-[#FFECC8] rounded">
                  <p className="ml-4 ">Password</p>
                </div>
              </div>

              <div className="flex justify-center items-center flex-col pt-8 ">
                <div className=" flex justify-center items-center bg-[#FFE3A6] h-12 w-28 rounded-sm border-2 border-black text-center text-xl">
                  <button>Login</button>
                </div>

                <div className="text-[#5C5950] pt-5">
                  <p>Don't have an account? <u>sign up</u></p>
                </div>

              </div>
            </div>  
          </div>
        </div>
      </div>
    </>
  );
}