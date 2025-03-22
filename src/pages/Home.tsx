import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-4">
      <div className="text-center max-w-md">
        <h1 className="font-original-surfer text-3xl sm:text-4xl md:text-5xl">
          Hi, I'm Chris.
        </h1>

        <p className="font-original-surfer text-xl sm:text-2xl md:text-3xl mt-4">
          I like to build things for the internet.
        </p>
      </div>
    </div>
  );
};

export default Home;
