export default function Home() {
  return (
    <div className="flex justify-center items-center w-full h-full text-[#080808]">
      <div className="w-1/2">
        <h1 className="font-bold text-[40px]">Welcome To Our Website</h1>
        <p className="my-2 text-[28px]">
          Lorem Ipsum is simply dummy text of <br />
          the printing and typesetting industry. <br />
          Lorem Ipsum has been the industry's <br />
          standard
        </p>
        <button className="text-[26px] bg-[#080808] px-8 py-2 text-white mt-4 hover:bg-red-600">
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
        <div className="columnHover col-span-2 row-span-2 bg-[#EDA0A8] rounded-tl-[50%] rounded-br-[50%] rounded-bl-[50%]"></div>
        <div className="columnHover bg-[#FF8A00] rounded-tl-full"></div>
        <div className="columnHover col-start-1 bg-[#C10E0E] rounded-full">
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
        <div className="columnHover col-start-2 bg-[#D64000] rounded-bl-full rounded-tl-full rounded-tr-full ">
          <div className=" bg-white rounded-full w-[50%] h-[50%] translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="columnHover border-[#FF8A00] rounded-bl-full border-l-[28px] border-b-[28px]"></div>
      </div>
    </div>
  );
}
