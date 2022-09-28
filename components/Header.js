import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image'
import { useRouter } from "next/router";
import { useRef } from "react"
import Avatar from './Avatar'; 
import HeaderOptions from './HeaderOptions';

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);   
    const search = e =>{
        e.preventDefault();
        const term = searchInputRef.current.value;
        if(!term) return ;
        router.push(`/search?term=${term}`)
    } 
    return (
        <header>
            <div className="flex items-center w-full p-6">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Hatsune_miku_logo_v3.svg"
                height={40}
                width={120} 
                onClick={() => router.push('/')} 
                className="cursor-pointer"/>
                <form className="flex items-center flex-grow max-w-3xl px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg">
                    <input ref={searchInputRef} type="text" 
                    className="flex-grow w-full focus:outline-none" />
                    <XIcon className="transition duration-100 transform cursor-pointer sm:mr-3 h-7 text-gra-500 hover:scale-125" onClick={()=>(searchInputRef.current.value = "")}/>
                    <MicrophoneIcon className="hidden h-6 pl-2 text-blue-500 border-l-2 border-gray-300 sm:inline-flex" />
                    <SearchIcon className="hidden h-6 pl-2 mr-3 text-blue-500 sm:inline-flex" />
                    <button hidden type="submit"
                    onClick={search}>
                        Search
                    </button>
                </form>
                <Avatar className="ml-auto" url="https://m.media-amazon.com/images/I/61oWKsxrJaL._AC_SL1442_.jpg" />      
            </div>
            <HeaderOptions />
        </header>
    )
}

export default Header
