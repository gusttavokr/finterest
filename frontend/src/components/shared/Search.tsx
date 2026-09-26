import { Search } from "lucide-react"
import { Camera } from "lucide-react"


function SearchBar() {

    const icon = <Search color="#525252" size={20}></Search>

    return (
        <>
            <div className="flex bg-gray-200 p-1 px-4 rounded-xl items-center justify-between">
                <div className="flex gap-2 items-center">
                    <label>
                        {icon}
                    </label>
                    <input className="w-full focus:outline-none" placeholder="Pesquisar" />
                </div>

                {/* Camera */}
                <div className='p-2 rounded-2xl hover:bg-gray-100 cursor-pointer'>
                    <Camera size={24} />
                </div>
            </div>
        </>
    )
}

export default SearchBar