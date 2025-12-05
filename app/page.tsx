import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <>
      <div className="pt-10 flex flex-col items-center justify-items-start w-screen h-screen gap-16">
        <div className="flex flex-row justify-between items-center pl-6 pr-6 w-220 h-20 bg-[#FFECC8] border-3 rounded border-black">
          <input type="text" placeholder="Search for Stories, Poems, Fables... " className="text-[#726F63] text-2xl z-50 w-132 h-16"/>
          <Icon icon="majesticons:search-line" width="35" height="35" color="gray"/>
        </div>
        <div className="w-360 justify-center flex flex-wrap wrap-normal pl-5 pr-5 gap-9">

          <div className="border-3 border-black w-85 h-99 pt-8 pb-8 pl-5 pr-5  bg-[#FFF7D1] rounded flex flex-col items-center justify-items-start gap-7" >
            <h1 className="text-3xl text-black">Silence</h1>
            <div className="flex flex-col items-center gap-3 w-75">
              <p className="w-fill h-51 overflow-clip text-justify text-[#726F63] line-clamp-9 leading-[1.4]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet magnam ullam a velit repellendus ratione quidem maiores. Unde aut cum tempore minus esse distinctio veritatis, porro voluptatum rerum quia consequuntur! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque iste atque id adipisci quis, quam, eius, aspernatur dolorum nihil voluptates mollitia harum! Suscipit accusamus non quibusdam illum, iste dicta repellendus.</p>
              <div className="flex flex-col items-center w-75 gap-4">
                <span className="text-justify underline text-black text--md">Details</span> 
                <div className="flex flex-row justify-between w-70 h-5 text-black">
                  <p>Story</p>
                  <p>Binaya Adhikari</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-3 border-black w-85 h-99 pt-8 pb-8 pl-5 pr-5  bg-[#FFF7D1] rounded flex flex-col items-center justify-items-start gap-7" >
            <h1 className="text-3xl text-black">Empathy</h1>
            <div className="flex flex-col items-center gap-3 w-fill">
              <p className="w-fill h-52 overflow-clip text-justify text-[#726F63] line-clamp-9 leading-[1.4]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat odit <br/><br /> rerum est id rem omnis quam, iusto perspiciatis eaque quibusdam vel getu...</p>                                                         
              <div className="flex flex-col items-center w-75 gap-4">
                <span className="text-justify underline text-black text--md">Details</span> 
                <div className="flex flex-row justify-between w-70 h-5 text-black">
                  <p>Story</p>
                  <p>Binaya Adhikari</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-3 border-black w-85 h-99 pt-8 pb-8 pl-5 pr-5  bg-[#FFF7D1] rounded flex flex-col items-center justify-items-start gap-7" >
            <h1 className="text-3xl text-black">Silence</h1>
            <div className="flex flex-col items-center gap-3 w-fill">
              <p className="w-fill h-52 overflow-clip text-justify text-[#726F63] line-clamp-9 leading-[1.4]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut assumenda provident laudantium, at dolore id commodi magni. Fugit voluptatum hic voluptate quos esse beatae dolor, molestias qui? Dolores, soluta culpa?</p>
              <div className="flex flex-col items-center w-75 gap-4">
                <span className="text-justify underline text-black text--md">Details</span> 
                <div className="flex flex-row justify-between w-70 h-5 text-black">
                  <p>Story</p>
                  <p>Binaya Adhikari</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-3 border-black w-85 h-99 pt-8 pb-8 pl-5 pr-5  bg-[#FFF7D1] rounded flex flex-col items-center justify-items-start gap-7" >
            <h1 className="text-3xl text-black">Empathy</h1>
            <div className="flex flex-col items-center gap-3 w-fill">
              <p className="w-fill h-52 overflow-clip text-justify text-[#726F63] line-clamp-9 leading-[1.4]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut assumenda provident laudantium, at dolore id commodi magni. Fugit voluptatum hic voluptate quos esse beatae dolor, molestias qui? Dolores, soluta culpa?</p>
              <div className="flex flex-col items-center w-75 gap-4">
                <span className="text-justify underline text-black text--md">Details</span> 
                <div className="flex flex-row justify-between w-70 h-5 text-black">
                  <p>Story</p>
                  <p>Binaya Adhikari</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-3 border-black w-85 h-99 pt-8 pb-8 pl-5 pr-5  bg-[#FFF7D1] rounded flex flex-col items-center justify-items-start gap-7" >
            <h1 className="text-3xl text-black">Empathy</h1>
            <div className="flex flex-col items-center gap-3 w-fill">
              <p className="w-fill h-52 overflow-clip text-justify text-[#726F63] line-clamp-9 leading-[1.4]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut assumenda provident laudantium, at dolore id commodi magni. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque ipsam rerum nemo quae officiis quisquam, itaque voluptatibus accusamus ex ipsa fuga magni quaerat laboriosam, perferendis, repudiandae suscipit dolorum voluptatem sapiente. Fugit voluptatum hic voluptate quos esse beatae dolor, molestias qui? Dolores, soluta culpa?</p>
              <div className="flex flex-col items-center w-75 gap-4">
                <span className="text-justify underline text-black text--md">Details</span> 
                <div className="flex flex-row justify-between w-70 h-5 text-black">
                  <p>Story</p>
                  <p>Binaya Adhikari</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-3 border-black w-85 h-99 pt-8 pb-8 pl-5 pr-5  bg-[#FFF7D1] rounded flex flex-col items-center justify-items-start gap-7" >
            <h1 className="text-3xl text-black">Silence</h1>
            <div className="flex flex-col items-center gap-3 w-fill">
              <p className="w-fill h-52 overflow-clip text-justify text-[#726F63] line-clamp-9 leading-[1.4]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam alias iste in deleniti ipsam odit vero consequatur distinctio repellat provident, praesentium fugiat id sunt eveniet, voluptatum nostrum, aut doloremque voluptate. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut assumenda provident laudantium, at dolore id commodi magni. Fugit voluptatum hic voluptate quos esse beatae dolor, molestias qui? Dolores, soluta culpa?</p>
              <div className="flex flex-col items-center w-75 gap-4">
                <span className="text-justify underline text-black text--md">Details</span> 
                <div className="flex flex-row justify-between w-70 h-5 text-black">
                  <p>Story</p>
                  <p>Binaya Adhikari</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
