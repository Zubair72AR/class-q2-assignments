export default function Home() {
  return (
    <div className="flex flex-wrap-reverse -z-10 justify-around items-center m-12 text-[#080808] gap-12">
      <div className="">
        <h1 className="font-bold text-[36px]">Welcome To Our Website</h1>
        <p className="my-2 text-[22px]">
          Lorem Ipsum is simply dummy text of <br />
          the printing and typesetting industry. <br />
          Lorem Ipsum has been the industrys <br />
          standard
        </p>
        <button className="text-[20px] bg-[#080808] px-6 py-2 text-white mt-4 hover:bg-red-600">
          Contact Us
        </button>
      </div>
      <div className="grid grid-cols-6 grid-rows-7 w-[360px] h-[420px]">
        <div className="columnHover col-start-5  bg-[#F4C20F] rounded-tr-[50%] rounded-br-[50%] rounded-bl-[50%]">
          <div className=" bg-white rounded-full w-[50%] h-[50%] translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="columnHover col-start-2 col-span-2 rounded-full border-[3px] border-[#080808]">
          <div className=" bg-[#080808] rounded-full w-[35%] h-[70%] translate-x-[160%] translate-y-[24%]"></div>
        </div>
        <div className="columnHover bg-[#141CDE] rounded-tr-full"></div>
        <div className="columnHover bg-[#FF6209] rounded-full"></div>
        <div className="columnHover col-start-2 bg-[#080808] rounded-full"></div>
        <div className="profile-image col-span-2 row-span-2 bg-[#fbbcbc] z-10 rounded-tl-[50%] rounded-br-[50%] rounded-bl-[50%]"></div>
        <div className="columnHover bg-[#FF8A00] rounded-tl-full"></div>
        <div className="columnHover bg-white border-[3px] border-[#080808] rounded-bl-full rounded-tl-full rounded-tr-full">
          <div className=" bg-red-500 w-[50%] h-[50%] border-[3px] border-red-700 translate-x-1/2 translate-y-1/2 rounded-bl-full rounded-tl-full rounded-tr-full"></div>
        </div>
        <div className="columnHover bg-[#C10E0E] rounded-full">
          <div className=" bg-white rounded-full w-[50%] h-[50%] translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="columnHover bg-[#1464AD] rounded-bl-full"></div>
        <div className="columnHover bg-[#141CDE] rounded-bl-full"></div>
        <div className="columnHover col-start-2 bg-[#D64000] rounded-bl-full"></div>
        <div className="columnHover col-span-2 flex justify-center items-center w-[120px] h-[60px]">
          <div className="w-[60px] h-[60px] border-[#C10E0E] rounded-bl-full border-l-[28px] border-b-[28px]"></div>
          <div className="w-[60px] h-[60px] border-[#C10E0E] rounded-br-full border-r-[28px] border-b-[28px]"></div>
        </div>
        <div className="columnHover row-span-2 border-[#1464AD] rounded-full border-[20px]"></div>
        <div className="columnHover col-start-2 bg-white rounded-full border-[3px] border-[#080808]">
          <div className=" bg-white rounded-full w-[50%] h-[50%] border-[3px] border-[#080808] translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="columnHover col-span-2 rounded-full bg-[#080808]">
          <div className=" bg-white rounded-full w-[35%] h-[70%] translate-x-[160%] translate-y-[24%]"></div>
        </div>
        <div className="columnHover bg-[#FF6209] rounded-full"></div>
        <div className="columnHover col-start-1 bg-[#D64000] rounded-bl-full rounded-tl-full rounded-tr-full ">
          <div className=" bg-white rounded-full w-[50%] h-[50%] translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="columnHover border-[#FF8A00] rounded-bl-full border-l-[28px] border-b-[28px]"></div>
      </div>
    </div>
  );
}
