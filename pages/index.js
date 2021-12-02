import Head from 'next/head'
import Avatar from '../components/Avatar'

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
            <Avatar url="https://avatars.githubusercontent.com/u/75763058?s=96&v=4" />

          </div>
      </header>


      
    </div>
  )
}
