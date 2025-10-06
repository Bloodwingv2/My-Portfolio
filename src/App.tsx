import './App.css'

function App() {

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
            <p className='mt-25 font-bold text-8xl text-Black-300 text-left p-5'>Mirang Bhandari</p>
            <p className='text-5xl text-shadow-black p-5'>I am a developer lorem opsum</p>
            <p className='text-xl text-right p-4'>Passion blah blah</p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
