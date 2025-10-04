
import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <div className="w-full h-[55vh] md:h-[70vh] lg:h-[180vh] grid grid-cols-2 px-3 lg:px-32">
        <div className="h-full p-2 ">
          <div className="h-[15%] flex justify-center items-center border-2 border-gray-200  hover:bg-gray-300 transition delay-150 duration-300 ">
            <h1 className="lg:text-4xl font-bold">SHOP WOMEN</h1>
          </div>
          <div className="h-[60%] md:h-[70%] mt-2 ">
            <div className="w-full h-full  overflow-hidden">
              <img
                src="/slidebar/image2.png"
                className="object-cover "
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-[10%]  flex justify-center items-center border-2 border-gray-200  hover:bg-gray-300 transition delay-150 duration-300 ">
            {/* <h1>View More</h1> */}
            <Link to="/all" className="lg:text-2xl font-bold">
              View More
            </Link>
          </div>
        </div>
        <div className="h-full p-2">
          <div className="h-[15%]  flex justify-center items-center border-2 border-gray-200 hover:bg-gray-300 transition delay-150 duration-300 ">
            <h1 className="lg:text-4xl font-bold">SHOP MEN</h1>
          </div>
          <div className="h-[60%] md:h-[70%]  mt-2 ">
            <div className="w-full h-full   overflow-hidden">
              <img
                src="/slidebar/image1.png"
                className="object-cover "
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-[10%]  flex justify-center items-center border-2 border-gray-200  hover:bg-gray-300 transition delay-150 duration-300 ">
            {/* <h1>View More</h1> */}
            <Link to="/mall" className="lg:text-2xl font-bold">
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
