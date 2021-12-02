function Avatar({url}) {
    return <img className="h-12 transition duration-150 rounded-full cursor-pointer hover:scale-110" loading="lazy" alt="Profile Pic" src={url} />
}

export default Avatar;