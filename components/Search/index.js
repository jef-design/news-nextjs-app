import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { SearchIcon,ArrowLeftIcon } from "@heroicons/react/solid";
import {searchQuery} from '../../store/actions/searchAction'
import {useRouter} from 'next/router'


const Search = React.forwardRef(({openSearch,setOpenSearch},ref) => {

    const router = useRouter()
    const dispatch = useDispatch()
    const [query, setQuery] = useState("")
    
    const SearchQuery = (e) => {
        setQuery(e.target.value)

    }
    const SubmitHandler = (e) => {
        e.preventDefault();
        dispatch(searchQuery(query));
        router.push(`/results/${query}`)
    }
    useEffect(() => {
        // if (window.innerWidth < 768) {
        //     setOpenSearch(false)
        //   }
        
         
    }, [])

    return (
        <form style={{display: openSearch ? 'block' : ""}} onSubmit={SubmitHandler} className="w-full flex justify-center ml-2 mr-1 group-focus:bg-white sm:hidden sm:ml-0 sm:mr-0">
                <div className="flex items-center border rounded-lg p-2 w-full max-w-2xl bg-gray-100 focus-within:bg-white focus-within:shadow-md">
                    <SearchIcon className="w-7 h-6 sm:hidden" />
                    <ArrowLeftIcon onClick={()=>{setOpenSearch(!openSearch)}} className="w-7 h-6 hidden cursor-pointer hover:rounded-full sm:block" />
                    <input
                       ref={ref}
                        type="text"
                        placeholder="Search for topics,location & sources"
                        className="w-full ml-3 outline-none bg-transparent"
                        onChange={SearchQuery}

                    />
                </div>
            </form>
    )
})
Search.displayName = "Search";
export default Search;

  // useEffect(() => {
    //     if (window.screen.width > 768) {
    //       window.addEventListener('resize', resizeHandler);
    //     }
    //     else{
    //         setOpenSearch(true)
    //     }
    //     return () => window.removeEventListener('resize', resizeHandler);
    //   }, [setOpenSearch]);
    //   const resizeHandler = () => {
    //     setOpenSearch(false)
    //   }



    // useEffect(() => {
    //     const resizeHandler = () =>{
    //         if (window.innerWidth < 768) {
    //             setIsSearch(false)
    //           }
    //           else if(window.innerWidth > 768){
    //               setIsSearch(true)
    //           }
    //     };
    //     window.addEventListener('resize`', resizeHandler);

    //     return () => window.removeEventListener('resize', resizeHandler);
    //   }, [setIsSearch]);
    