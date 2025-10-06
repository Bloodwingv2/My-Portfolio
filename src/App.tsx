import './App.css'
import { gsap } from 'gsap'
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useEffect } from 'react';

gsap.registerPlugin(ScrambleTextPlugin);


function App() {
  
  useEffect(() => {
  // Start animation on next frame for smoother init
  requestAnimationFrame(() => {
    const tl = gsap.timeline({
      id: "text-scramble",
      ease: "power2.inOut",
      repeat: -1,
      repeatDelay: 3,
      yoyo: true,
    });

    tl.to("#scramble-name", {
      scrambleText: {
        text: "Mirang Bhandari",
        chars: "カタカナひらがな漢字ア",
        speed: 1,
        revealDelay: 0.5,
        tweenLength: false,
      },
      duration: 2.8,
      ease: "power1.inOut",
    });
  });
}, []);

  return (
    <main>
      <div>
        <section className='w-full bg-[#FFFDD0] py-15'>
          <div>
            <ul className='flex flex-row'>
              <li className='gap-x-5 pl-8 text-xl'>work</li>
              <li className='gap-x-5 pl-8 text-xl'>about</li>
              <li className='gap-x-5 pl-8 text-xl'>network</li>
              <li className='gap-x-5 pl-8 text-xl'>contact</li>
              <li className='gap-x-5 pl-8 text-xl ml-auto pr-4'>Software Developer</li>
            </ul>
          </div>
          <div>
            <p id = 'scramble-name' className='mt-25 font-bold text-8xl text-Black-300 text-left p-5'>Mirang Bhandari</p>
            <p className='text-5xl text-shadow-black p-5'>I am a developer lorem opsum</p>
            <p className='text-xl text-right p-4'>Passion blah blah</p>
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
