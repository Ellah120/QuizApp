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
      <h1 className="text-black text-5xl font-mono font-extrabold text-center pt-20 animate-pulse transition duration-700 lg:inline-block lg:pt-8 lg:pr-[30%] lg:pl-[40%]">
        Welcome!
      </h1>
      <div className="text-center mt-28 lg:inline-block lg:mt-0">
        <button className="text-white font-mono text-xl font-bold bg-[#093f60] px-5 py-3 rounded-xl hover:opacity-80 hover:-translate-y-1 lg:inline-block ">
          <a href="/">Get Started</a>
        </button>
      </div>
      <div className="hidden lg:flex justify-center items-center mt-10 border-gray-600 border-2">
      <button className="mt-6">
        <img src={googleicon} alt="googleicon" className="inline" />
        <a href="/">Sign Up</a>
      </button>
      </div>
      <div className="absolute bottom-0 left-1">
        <p className="font-medium text-lg">
          Already Signed Up?
          <span className="text-[#093f60] font-semibold">
            <a href="/"> Login</a>
          </span>
        </p>
      </div>
      <div className="bg-[#093f60] w-[80%] absolute bottom-8 right-0 rounded-full font-mono">
        <p className="pl-6 pt-3">Did You Know?</p>
        <p className="pl-6 py-3 pr-3 text-sm text-white animate-bounce transition duration-700">
          {quote.content}
        </p>
      </div>
    </section>
  );
}

export default Welcome