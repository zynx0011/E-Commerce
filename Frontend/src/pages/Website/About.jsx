import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <section className="p-4 mt-7 z-20 overflow-hidden min-h-[40vh] bg-white text-black dark:bg-black dark:text-white w-full flex items-center justify-center">
        <div className="flex flex-col justify-center items-center w-[700px] space-y-10 text-center">
          <h1 className="text-5xl font-bold">About</h1>
          <hr className="w-[400px] h-[2px] bg-black mt-[7%] mb-[7%]" />
          <p className="text-xl font-semibold  ">
            Proin eu ante vel mauris molestie dignissim non eget nunc. Integer
            ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu
            ante vel mauris molestie dignissim non eget nunc. Integer ac massa
            orci. Suspendisse vulputate semper nunc eget rhoncus. Ut sit amet
            porta sem, interdum tincidunt libero. Nulla vel quam lobortis,
            varius est scelerisque, dapibus nisl.
          </p>
        </div>
      </section>

      <section>
        <div className="min-w-[100vw] relative min-h-screen overflow-hidden">
          <div className="flex items-center justify-center z-10 relative">
            <img
              src="/ClothesBg.svg"
              alt=""
              className="w-[80vw] mt-5 fixed h-full object-cover"
            />
            <div className="absolute text-white h-full bg-transparent  ">
              <div
                className="p-5 mt-[15%] flex 
               "
              >
                <div>
                  <h1 className="text-4xl mt-[12%] font-bold w-[500px]">
                    The Mission At the heart of everything, we set out to offer
                    the best quality.
                  </h1>
                </div>
                <div className="flex flex-col gap-9 w-[500px] ]">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin eu ante vel mauris molestie dignissim non eget nunc.
                    Integer ac massa orci. Suspendisse vulputate semper nunc
                    eget rhoncus. Aenean placerat facilisis ex, eu laoreet lorem
                    convallis
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin eu ante vel mauris molestie dignissim non eget nunc.
                    Integer ac massa orci. Suspendisse vulputate semper nunc
                    eget rhoncus. Aenean placerat facilisis ex, eu laoreet lorem
                    convallis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-4 mt-2 z-20  min-h-[40vh] bg-white text-black dark:bg-black dark:text-white w-full ">
        <div className="flex flex-col justify-center items-center w-[700px] space-y-10 mx-auto">
          <h1 className="text-5xl font-bold mt-7">How it Started</h1>
          <hr className="w-[400px] h-[2px] bg-black mt-[7%] mb-[7%]" />
          <p className="text-xl font-semibold  ">
            Proin eu ante vel mauris molestie dignissim non eget nunc. Integer
            ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.
          </p>
        </div>
        <div className=" flex bg-[#faedeb] rounded-xl text-black p-[4%] w-[70vw] mx-auto mt-9 items-center gap-11 justify-center">
          <div className="flex flex-col justify-center items-start space-y-3 w-[400px] ">
            <h1 className="text-xl font-bold">Vel mauris molestie dignissim</h1>
            <p className="text-lg font-semibold">
              Proin eu ante vel mauris molestie dignissim non eget nunc. Integer
              ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.
            </p>
            <p>
              Praesent vel faucibus ligula. Sed sit amet ipsum eget velit
              aliquet faucibus. Maecenas et odio id turpis sollicitudin pulvinar
              sit amet vitae augue. Phasellus nec ultricies arcu. Quisque
              efficitur tellus sit amet bibendum molestie. Duis id egestas odio.
              Phasellus lacinia ex quis faucibus tempor. Sed feugia.
            </p>
          </div>
          <div className="div">
            <img src="/ClothesBg.svg" alt="" className="w-[400px]" />
          </div>
        </div>
      </section>

      <section className="p-4 -mb-7 z-20  min-h-[40vh] bg-white text-black dark:bg-black dark:text-white w-full">
        <div className="flex  justify-around sm:m-10 items-center p-10 z-20">
          <div className="div">
            <h1 className="text-4xl sm:w-[80%] font-bold">
              Streamline your business operations and maximize cost-efficiency
              with our trusted services
            </h1>
            <p className="mt-5 w-[80%] text-slate-400">
              Real Estate welcome all customer to do business with us. We gives
              you 100% satisfaction deals. Our customer are always happy and
              satisfied with us. Limited time deals are also available. Gives us
              a call and we will help you to secure your dream.
            </p>

            <h1 className="text-3xl font-bold mt-5">Call for book an order:</h1>
            <div className="flex justify-evenly mt-8 mr-[15%]">
              <p className="border hidden sm:block border-amber-500  p-4 font-bold  text-center text-xl rounded-full  mt-5">
                +91 9876543210
              </p>
              <Link
                to={"/contact"}
                className="bg-amber-500 text-white p-4 font-bold sm:w-[30%] text-center  text-xl rounded-full  mt-5 "
              >
                Contact Us{" "}
              </Link>
            </div>
          </div>
          <div className="div">
            <img
              src="https://www.fujitsu.com/us/imagesgig5/contactus_tcm127-6317963_tcm127-6286607-32.jpg"
              alt="img"
              className="rounded-3xl hidden sm:block"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
