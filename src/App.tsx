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
    <main>
      <div>
        <section className='w-full bg-[#FFFDD0] py-10'>
          <div>
            <ul className='text-shadow font-switzer flex flex-row'>
              <li className='gap-x-10 ml-15 text-xl'>Work</li>
              <li className='gap-x-10 ml-15 text-xl'>About</li>
              <li className='gap-x-10 ml-15 text-xl'>Network</li>
              <li className='gap-x-10 ml-15 text-xl'>Contact</li>
              <li className='gap-x-10 text-xl ml-auto mr-4'>Software Developer</li>
            </ul>
          </div>
          <div>
            <p id='scramble-first' className='ml-5 text-shadow font-satoshi mt-25 font-bold text-9xl text-Black-300 text-left p-5 overflow-hidden'>Mirang</p>
            <p id='scramble-last' className='ml-5 text-shadow font-satoshi font-bold text-9xl text-Black-300 text-left p-5 overflow-hidden'>Bhandari</p>
            <p className='text-right mr-10'>video placeholder</p>
            <p className='ml-5 mb-10 text-shadow font-switzer text-5xl p-5 mt-10'>I am <span id = 'scramble-name' className='whitespace-nowrap'>Software Developer</span></p>
          </div>
        </section>
        <section className='w-full bg-[#FAF3E0] py-20'>
          <div>
            <p className='text-7xl font-semibold ml-4'>About</p>
            <p className='text-2xl mt-10 ml-4'>i am a god blah blah blah coding is what i like blah blah lorem opsum</p>
          </div>
        </section>
        <section className='w-full bg-zinc-900 py-20'>
          <div>
            <p className='text-7xl font-semibold text-amber-50 ml-4'>My work</p>
            <p className='text-2xl font-semibold text-amber-50 mt-10 ml-4'>Blah blah this is my about blah blah lorem opsum</p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
