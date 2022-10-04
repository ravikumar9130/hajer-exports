import about from "../assets/aboutUs.webp";

export default function AboutUs() {
  return (
      <>
          <div className="bg-blue pb-8 pt-12">
      <div className="flex gap-4 flex-col justify-between items-center w-[90%] md:w-[80%]  lg:w-[90%] mx-auto md:flex-row-reverse ">
        <img className="rounded-lg mx-8 w-full md:w-2/5" src={about} alt="about us" />

        <div className="mt-4 mx-auto">
          <div className="text-4xl w-full  text-center  text-primary pb-4  md:pb-6">
            About Us
                  </div>
                  <div className=" md:text-lg"> We, Hajer Exports, situated at address..... are a leading supplier of
          first class stone around the world. We stock a wide variety of natural
          stone slabs and tiles. The wide range of stone product includes
          granite, marble and many more. We are always on the leading edge of
          design, and strive to satisfy the most discriminating tastes. We are
          dedicated to offering unparalleled quality and service to designers
          and architects.</div>
          <div className="py-2 cursor-pointer my-4 w-[180px] mx-auto text-center px-3 rounded-lg bg-primary text-white font-bold hover:bg-indigo-500 hover:text-white">Read More</div>
        </div>
              </div>
          
          </div>
    </>
  );
}
