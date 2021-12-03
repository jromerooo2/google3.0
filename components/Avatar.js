function Avatar({url, className}) {
    return <img className={`h-12 transition duration-150 rounded-full cursor-pointer hover:scale-110
    ${className}`} loading="lazy" alt="Profile Pic" src={url} />
}

export default Avatar;