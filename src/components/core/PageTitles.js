const PageTitles = ({dark=true, title, bgtitle}) => {
    return (
        <div className={'w-full absolute lg:h-40 md:h-32 h-24'}>
            <span className={`text-[10vw] uppercase ${dark ? 'text-white' : 'text-gray-900'} absolute top-0 bottom-0 left-0 right-0 m-auto w-max h-max font-montserrat font-extrabold opacity-10`}>{bgtitle}</span>
            <span className={`text-[5vw] uppercase ${dark ? 'text-white' : 'text-gray-900'} absolute top-0 bottom-0 left-0 right-0 m-auto w-max h-max font-montserrat font-extrabold`}>{title}</span>
        </div>
    )
}

export default PageTitles