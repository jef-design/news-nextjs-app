import React,{useState,useEffect,useRef} from 'react'


const Input = () => {
    const inputRef = useRef("")
    const [query, setQuery] = useState("")
    const SearchQuery = (e) => {
        setQuery(e.target.value)

    }
    useEffect(() => {
        // if (window.innerWidth < 768) {
        //     setOpenSearch(false)
        //   }
        inputRef.current.focus();
         
    }, [])
    return (
        <>
            <input
                ref={inputRef}
                type="text"
                placeholder="Search for topics,location & sources"
                className="w-full ml-3 outline-none bg-transparent"
                onChange={SearchQuery}
            />
        </>
    );
}

export default Input;
