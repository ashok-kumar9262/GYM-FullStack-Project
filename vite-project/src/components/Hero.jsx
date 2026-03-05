import React, { useRef } from 'react';

const Hero = () => {
  // Create a ref for the "explore" section
  const exploreRef = useRef(null);

  // Function to scroll to the explore section
  const scrollToExplore = () => {
    // Scroll smoothly to the "explore" section
    if (exploreRef.current) {
      exploreRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[rgb(96,92,110)] w-full max-w-10xl h-auto p-10 rounded-lg shadow-lg">
      <div className="flex items-center p-14">
        <div className="absolute top-6">
          <button className="text-white text-2xl">🎡FEET AND FAST</button>
        </div>

        <div className="md:flex-row justify-between">
          <div className="max-w-lg">
            <h1 className="text-8xl font-mono font-semibold text-white">
              Strength, <br /> Endurance, <br /> Transformation
            </h1>

            <p className="text-white mt-4 ml-4">
              We often find ourselves trapped in the cycle of procrastination, telling ourselves, "I’ll start tomorrow," but tomorrow never comes. We convince ourselves we don’t have time, when in reality, it's just about priorities. When we feel tired, we say, "I’m too tired to work out," not realizing that exercise actually boosts our energy. We might look at someone else’s physique and think, "I’ll never look like that," forgetting that everyone starts somewhere.
            </p>
          </div>
        </div>

        <div className="relative w-1/2 h-full flex justify-end items-center bg-gradient-to-r from-blue-500 to-green-500 left-80">
          <div
            className="absolute bottom-10 right-10 text-white font-bold text-2xl p-4 bg-blue-700 rounded-full cursor-pointer hover:bg-blue-600"
            onClick={scrollToExplore} // Add click handler here
          >
            Get Started
          </div>

          <img src="image7.jpg" className="w-full h-full object-cover rounded-lg shadow-2xl" />
        </div>
      </div>

      {/* "Explore" section that we want to scroll to */}
      <div ref={exploreRef} >
        
      </div>
    </section>
  );
};

export default Hero;