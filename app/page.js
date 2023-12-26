import Image from 'next/image';
export default function Home() {
  return (
    <main className="flex items-center flex-col justify-center min-h-screen">
      <div className=" shadow-md max-w-[382px] rounded-xl overflow-hidden">

        <Image
          src="/image-1.jpg"
          alt="room image"
          width={382}
          height={255}
        />
        <div className="p-5  ">
          <h2>
            <a href="/#" className='text-2xl font-bold'>
              Lorem, ipsum dolor.
            </a>
          </h2>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus alias recusandae minus quidem. Eos, cupiditate.</p>
          <a href="#" className='inline-flex items-center  bg-blue-700 hover:bg-blue-800 transition-colors text-white gap-1 rounded-md p-1.5 text-sm '  >Read more
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </a>

        </div>
      </div>

    </main>
  )
}
