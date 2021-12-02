import Head from 'next/head'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Google 3.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-end space-x-4 ">
        <a href="#" className="text-lg ">Gmail</a>
        <a href="#" className="text-lg">Images</a>        
        
      </div>
      <div className="flex flex-col items-center justify-center">
        <img className="" src="https://www.google.com/logos/doodles/2021/seasonal-holidays-2021-6753651837109324.3-ladc.gif" />  
      </div>
      <div className="flex items-center justify-center my-7">
        <input type="text" className="absolute w-1/2 p-2 border border-gray-400 rounded-full" />
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search relative" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
      </div> 
      <div className="flex items-center justify-center space-x-4 my-7">
          <button className="p-2 text-white bg-gray-500 rounded-lg">
            Google search
          </button>
          <button className="p-2 text-white bg-gray-500 rounded-lg">
            I'm Feeling Lucky
          </button>
      </div>
    </div>
  )
}
