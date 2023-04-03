import { useState, useEffect } from "react";
import quotes from "../data/quotes";
import googleicon from "../assets/googleicon.png";

function Welcome() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
   setCurrentIndex((currentIndex) => (currentIndex + 1) % quotes.length);
    },5000)
    return () => clearInterval(interval)
  }, [quotes.length]);
   const quote = quotes[currentIndex]
  return (
    <section className="bg-[url(./backgroundImg.jpg)] bg-no-repeat bg-cover h-screen">
      <h1 className="text-black text-5xl font-mono font-extrabold text-center pt-20 animate-pulse transition duration-700 ">
        Welcome!
      </h1>
      <h2 className="text-center text-xl font-mono mt-6 text-[#093f60] lg:hidden">
        Create your very own Quiz app from your comfort...
      </h2>
      <div className="text-center mt-28 lg:absolute lg:top-[-3rem] lg:right-6 ">
        <button className="text-white font-mono text-xl font-bold bg-[#093f60] px-5 py-3 rounded-xl hover:opacity-80 hover:-translate-y-1 lg:inline-block ">
          <a href="/">Get Started</a>
        </button>
      </div>
      <h2 className="hidden lg:block lg:text-center lg:text-xl font-mono mt-6 text-[#093f60]">
        Create your very own Quiz app from your comfort...
      </h2>
      <div className="hidden lg:block m-auto w-[40%] text-center mt-[5%] lg:shadow-[#093f60] shadow-2xl lg:bg-white py-14">
        <button className="mb-8 border-[rgb(205, 203, 211)] border-2 rounded-md block m-auto w-[50%] hover:bg-gray-100">
          <img
            src={googleicon}
            alt="googleicon"
            className="inline pl-[12%] pr-[10%] py-2"
          />
          <a href="/" className="pr-[12%] text-[#093f60] font-medium">
            Sign Up
          </a>
        </button>
        <button className="mt-6 border-[rgb(205, 203, 211)] border-2 rounded-md block m-auto w-[50%] hover:bg-gray-100">
          <img
            src={googleicon}
            alt="googleicon"
            className="inline pl-[6%] pr-[10%] py-2"
          />
          <a href="/" className="pr-[12%] text-[#093f60] font-medium">
            Login
          </a>
        </button>
      </div>
      <div className="absolute bottom-0 left-1 md:bottom-5">
        <p className="font-medium text-lg">
          Already Signed Up?
          <span className="text-[#093f60] font-semibold">
            <a href="/"> Login</a>
          </span>
        </p>
      </div>
      <div className="bg-[#093f60] w-[90%] absolute bottom-8 right-0 rounded-full font-mono md:w-[50%] lg:w-[30%] md:bottom-5 ">
        <p className="pl-6 pt-3">Did You Know?</p>
        <p className="pl-6 py-3 pr-3 text-sm text-white animate-bounce transition duration-700">
          {quote.content}
        </p>
      </div>
    </section>
  );
}

export default Welcome