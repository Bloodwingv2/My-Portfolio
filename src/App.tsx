import './App.css'
import { gsap } from 'gsap'
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useEffect } from 'react';

gsap.registerPlugin(ScrambleTextPlugin);


function App() {

  const landingText = [
  { text: "OSS-Developer", color: "#B91C1C" }, // deep blue
  { text: "Full-Stack Dev", color: "#1E3A8A" }, // rich red
  { text: "Agentic AI Dev", color: "#047857" }, // dark green
  { text: "AI Enthusiast", color: "#F59E0B" },
  { text: "Explorer", color: "#1E3A8A"} // golden yellow
];

  useEffect(() => {
    // Create a context to prevent GSAP from conflicting with other animations
    const ctx = gsap.context(() => {
      // Initial animations timeline
      const initialTl = gsap.timeline({
        defaults: { ease: "power2.out" }
      });

      // More specific selector and better initial state
      gsap.set("nav ul li", { 
        opacity: 0, 
        y: -20 
      });

      initialTl.to("#arrow", {
      y: 10,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 1.6
    });

      // Stagger fade-in for nav items with more specific timing
      initialTl.to("nav ul li", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      });

      // Scramble animations (your existing code)
      const onceTl = gsap.timeline({
        ease: "power2.inOut",
      });

      // Scramble both lines simultaneously
      onceTl.to("#scramble-first", {
        scrambleText: {
          text: "Mirang",
          chars: "カタカナひらがな漢字ア",
          speed: 1.0,
          revealDelay: 0.3,
          tweenLength: false,
        },
        duration: 2.0,
        ease: "power1.inOut",
      }, 0)
      .to("#scramble-last", {
        scrambleText: {
          text: "Bhandari",
          chars: "カタカナひらがな漢字ア",
          speed: 1.0,
          revealDelay: 0.3,
          tweenLength: false,
        },
        duration: 2.0,
        ease: "power1.inOut",
      }, 0); // The 0 makes them animate at the same time

      const tl = gsap.timeline({
        id: "text-scramble",
        repeat: -1,
        ease: "power2.inOut",
      });

      landingText.forEach(({ text, color }) => {
  tl.to("#scramble-name", {
    scrambleText: {
      text: text,
      chars: "カタカナひらがな漢字ア",
      speed: 1.0,
      revealDelay: 0.5,
      tweenLength: false,
    },
    color: color, // animate CSS color
    duration: 3.0,
    ease: "power1.inOut",
  })
  .to("#scramble-name", {
    duration: 2, // pause between words
  });
});

  // Add floating shapes animation
  const shapes = gsap.utils.toArray<HTMLElement>('.floating-shape');
  shapes.forEach((shape) => {
    if (shape instanceof HTMLElement) {
      gsap.to(shape, {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        rotation: "random(-15, 15)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  });
});
// Cleanup
return () => {
  ctx.revert(); // This will clean up all GSAP animations
};
}, []);

  return (
    <main className="overflow-x-hidden">
      <div>
        <section className='relative w-full min-h-screen bg-[#FFFDD0] p-4'>
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="floating-shape absolute top-[10%] left-[20%] w-48 h-48 bg-red-200/40 rounded-full"></div>
            <div className="floating-shape absolute bottom-[20%] right-[15%] w-56 h-56 bg-blue-200/40 rounded-full"></div>
            <div className="floating-shape absolute top-[40%] left-[60%] w-40 h-40 bg-green-200/40 rounded-full"></div>
            <div className="floating-shape absolute bottom-[60%] right-[40%] w-32 h-32 bg-yellow-200/40 rounded-full"></div>
          </div>

          {/* Navigation */}
          <nav>
            <ul className='text-shadow font-switzer flex flex-wrap items-center justify-between mb-12'>
              <div className="flex gap-8">
                <li className='text-xl cursor-pointer underline-smooth'>Work</li>
                <li className='text-xl cursor-pointer underline-smooth'>About</li>
                <li className='text-xl cursor-pointer underline-smooth'>Network</li>
                <li className='text-xl cursor-pointer underline-smooth'>Contact</li>
              </div>
              <li className='text-xl'>Software Developer</li>
            </ul>
          </nav>

          {/* Hero Content */}
          <div className="mt-20 text-center">
            <p id='scramble-first' className='text-shadow font-satoshi font-bold text-6xl md:text-8xl pb-2'>Mirang</p>
            <p id='scramble-last' className='text-shadow font-satoshi font-bold text-6xl md:text-8xl pb-2'>Bhandari</p>
            <h2 id='scramble-name' className='text-shadow font-switzer text-4xl md:text-5xl mt-10 pb-10'>Software Developer</h2>
            <p className="mt-6 text-lg md:text-xl text-zinc-600 max-w-xl mx-auto">
              Building open-source, agentic systems that think <span className="italic">with</span> you — not for you.
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
            <div id="arrow" className="w-6 h-6 border-4 border-black border-t-0 border-l-0 rotate-45 rounded-sm"></div>
          </div>
        </section>
        <section className='w-full bg-zinc-900 py-12 md:py-20 min-h-screen px-4'>
          <div className="max-w-7xl mx-auto">
            <p className='text-5xl md:text-7xl font-semibold text-amber-50'>About</p>
            <p className='text-xl md:text-2xl mt-8 text-amber-50'>i am a god blah blah blah coding is what i like blah blah lorem opsum</p>
          </div>
        </section>
        <section className='w-full bg-zinc-900 py-12 md:py-20 min-h-screen px-4'>
          <div className="max-w-7xl mx-auto">
            <p className='text-5xl md:text-7xl font-semibold text-amber-50'>My work</p>
            <p className='text-xl md:text-2xl mt-8 text-amber-50'>Blah blah this is my about blah blah lorem opsum</p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
