import React, { useState, useEffect } from "react";

const Loader = () => {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots < 3 ? prevDots + 1 : 0));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center flex items-center justify-center">
        <div>
          <div className="flex items-end" href="/">
            <h1 className="text-4xl font-normal translate-x-1">T</h1>
            <h1 className="text-2xl self-end">
              apster
              {Array(3)
                .fill(".")
                .map((dot, index) => (
                  <span
                    key={index}
                    className={`${
                      index < dots ? "opacity-100" : "opacity-30"
                    } animate-bounce`}
                  >
                    {dot}
                  </span>
                ))}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
