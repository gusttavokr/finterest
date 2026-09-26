import SearchBar from "../shared/Search"
import { CircleUserRound, Search, ChevronDown } from "lucide-react"


function Nav2() {
    return (
        <>
            <div className="h-fit gap-4 w-full p-4 flex items-center">

                {/* Search Bar */}
                <div className="w-full">
                    <SearchBar></SearchBar>
                </div>

                <div className="flex">
                    {/* Perfil */}
                    <div className='p-2 rounded-2xl hover:bg-gray-100 cursor-pointer'>
                        <CircleUserRound size={24} />
                    </div>
                    {/* Meus perfis */}
                    <div className='p-2 rounded-2xl hover:bg-gray-100 cursor-pointer content-center'>
                        <ChevronDown color="#525252" size={20} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav2