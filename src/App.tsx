import './App.css'
import { gsap } from 'gsap'
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useEffect } from 'react';

gsap.registerPlugin(ScrambleTextPlugin);


function App() {
  const landingText = ["a Software developer", "an Open-Source Contributor", "a Part-time Designer", "a Tech-Enthusiast"]; // Place holder

  useEffect(() => {

    // Timeline for "Mirang Bhandari" - plays once
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

    landingText.forEach((word) => {
      tl.to("#scramble-name", {
        scrambleText: {
          text: word,
          chars: "カタカナひらがな漢字ア",
          speed: 1.0,
          revealDelay: 0.5,
          tweenLength: false,
        },
        duration: 3.0,
        ease: "power1.inOut",
      })
      .to("#scramble-name", {
        duration: 8, // Pause between words
      });
    });

  return () => {
    onceTl.kill();
    tl.kill();
  };
}, []);

  return (
    <main className="overflow-x-hidden">
      <div>
        <section className='w-full min-h-screen bg-[#FFFDD0] p-4'>
          <div>
            <ul className='text-shadow font-switzer flex flex-wrap items-center ml-4 gap-12 text-2xl md:flex-row'>
              <li className='text-xl cursor-pointer underline-smooth'>Work</li>
              <li className='text-xl cursor-pointer underline-smooth'>About</li>
              <li className='text-xl cursor-pointer underline-smooth'>Network</li>
              <li className='text-xl cursor-pointer underline-smooth'>Contact</li>
              <li className='text-xl md:ml-auto block sm:hidden'>Software Developer</li>
            </ul>
          </div>
          <div className="mt-8 md:mt-16">
            <p id='scramble-first' className='text-shadow font-satoshi font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-Black-300 overflow-hidden pb-2 leading-tight whitespace-normal md:whitespace-nowrap'>Mirang</p>
            <p id='scramble-last' className='text-shadow font-satoshi font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-Black-300 overflow-hidden pb-2 leading-tight whitespace-normal md:whitespace-nowrap'>Bhandari</p>
            <p className='text-right mt-4'>video placeholder</p>
            <p className='text-shadow font-switzer text-3xl md:text-5xl mt-8'>I am <span id='scramble-name' className='whitespace-nowrap'>Software Developer</span></p>
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
