import './App.css'

import { House } from 'lucide-react';
import { Compass } from 'lucide-react';
import { LayoutPanelLeft } from 'lucide-react';
import { SquarePlus } from 'lucide-react';
import { Bell } from 'lucide-react';
import { MessageCircleMore } from 'lucide-react';
import { Cog } from 'lucide-react';

function Nav() {
    return (
        <>
            <div className='w-fit border-black items-center border-gray-400 border-r-1 p-4 flex flex-col min-h-screen justify-between'>


                {/* Lista de páginas */}
                <div className='gap-6 items-center w-fit flex flex-col'>

                    {/* Logo */}
                    <div className='p-2 rounded-2xl hover:bg-gray-200 cursor-pointer'>
                        <img src="./src/assets/favicon.svg" alt="" className='w-8' />
                    </div>

                    {/* Página inicial */}
                    <div className='p-2 rounded-2xl hover:bg-gray-200 cursor-pointer'>
                        <House size={28} />
                    </div>

                    {/* Explorar */}
                    <div className='p-2 rounded-2xl hover:bg-gray-200 cursor-pointer'>
                        <Compass size={28} />
                    </div>

                    {/* Suas pastas */}
                    <div className='p-2 rounded-2xl hover:bg-gray-200 cursor-pointer'>
                        <LayoutPanelLeft size={28} />
                    </div>

                    {/* Criar */}
                    <div className='p-2 rounded-2xl hover:bg-gray-200 cursor-pointer'>
                        <SquarePlus size={28} />
                    </div>

                    {/* Notificações */}
                    <div className='p-2 rounded-2xl hover:bg-gray-200 cursor-pointer'>
                        <Bell size={28} />
                    </div>

                    {/* Notificações */}
                    <div className='p-2 rounded-2xl hover:bg-gray-200 cursor-pointer'>
                        <MessageCircleMore size={28} />
                    </div>
                </div>

                <div className='w-fit p-2 rounded-2xl hover:bg-gray-200 cursor-pointer'>
                    <Cog size={28} />
                </div>
            </div>
        </>
    )
}

export default Nav