import Head from 'next/head'
import Avatar from '../components/Avatar'
import { ViewGridIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid';
import Image from 'next/image'
import Footer from '../components/Footer'
import { useRef } from 'react';
import router, { useRouter } from 'next/router';


export default function Home() {
  const searchInput = useRef(null)
  
  const search = (e)=>{
    e.preventDefault();
    const term = searchInput.current.value;
    if(!term) return;
    
    router.push(`/search?term=${term}`);
  }
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Hatsune Miku X Google </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-between w-full p-5 text-gray-700">
          <div className="flex items-center space-x-4">
            <p className="cursor-pointer hover:underline">About</p>
            <p className="cursor-pointer hover:underline">Store</p>
          </div>
          <div className="flex items-center space-x-4">
            <p className="cursor-pointer hover:underline">Gmail</p>
            <p className="cursor-pointer hover:underline">Images</p>

            <ViewGridIcon className="w-10 h-10 p-2 rounded-full cursor-pointer hover:bg-gray-200" />
            
            <Avatar url="https://avatars.githubusercontent.com/u/75763058?s=96&v=4" />

          </div>
      </header>
      <form className="flex flex-col items-center flex-grow w-4/5 mt-44">
        <Image src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        height={100}
        width={300} />

        <div className="flex items-center w-full max-w-md px-5 py-3 mt-5 border border-gray-300 rounded-full hover:shadow-lg focus-within:shadow-lg sm:max-w-xl lg:max-w-2xl">
            <SearchIcon className="h-5 mr-3 text-gray-500" />
            <input ref={searchInput} type="text" className="flex-grow p-2 rounded-full focus:outline-none" />
            <MicrophoneIcon className="h-5 mr-3 text-gray-500" />
        </div>
        <div className="flex flex-col justify-center w-1/2 mt-8 space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="bg-[#f8f9fa] p-3 rounded-md ring-gray-200 text-sm text-gray-800 cursor-pointer hover:ring-1 hover:shadow-md focus:outline-none active:ring-gray-300">
            Google Search
          </button>
          <button onClick={search} className="hover:shadow-md bg-[#f8f9fa] p-3 rounded-md ring-gray-200 text-sm text-gray-800 cursor-pointer hover:ring-1 focus:outline-none active:ring-gray-300">
            Feeling Lucky
          </button>

        </div>
      </form>
      <Footer />

      
    </div>
  )
}
