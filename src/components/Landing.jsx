import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  const [current, setCurrent] = useState(0);
  const industries = ["Education", "Healthcare", "Agriculture", "Finance"];
  const navigationElements = ["Solutions", "Team", "Get In Touch"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % industries.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col justify-between">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 shadow-md backdrop-blur-lg p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold tracking-wide text-gray-700">Paan Platforms</h1>
        <div className="space-x-6">
          {navigationElements.map((element, index) => (
            <Link key={index} to="/" className="text-gray-600 hover:text-blue-500 transition">
              {element}
            </Link>
          ))}
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center flex-grow text-center px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
          Redefining <span className="text-blue-600">{industries[current]}</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-lg">
          Smart. Scalable. Secure. We are transforming industries with cutting-edge software solutions.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-full text-white font-semibold shadow-md">
          Stay in the Loop
        </button>
      </section>
      <footer className="text-center py-4 text-gray-500 text-sm bg-gray-100 border-t">
        © 2025 Paan. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Landing;
