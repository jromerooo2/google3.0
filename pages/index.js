import Head from 'next/head'
import Avatar from '../components/Avatar'
import { ViewGridIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid';
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Google 3.0</title>
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
      <form>
        <Image src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        height={100}
        width={300} />

        <div className="flex items-center w-full max-w-md px-5 py-3 mt-5 border border-gray-300 rounded-full hover:shadow-lg focus-within:shadow-lg">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input type="text" className="flex-grow p-2 rounded-full focus:outline-none" />
          <MicrophoneIcon className="h-5 mr-3 text-gray-500" />
        </div>
      </form>


      
    </div>
  )
}
