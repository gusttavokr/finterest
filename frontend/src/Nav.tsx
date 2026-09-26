import './layout.css'

import favicon from './assets/favicon.svg';

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
            <div className='p-6 flex flex-col min-h-screen justify-between'>


                {/* Lista de páginas */}
                <div className='gap-6 flex flex-col'>

                    {/* Logo */}
                    <div className='w-48 p-2'>
                        <img src={favicon} alt="" className='w-8' />
                    </div>

                    {/* Página inicial */}
                    <div className='w-48 p-2'>
                        <House size={28} />
                    </div>

                    {/* Explorar */}
                    <div className='w-48 p-2'>
                        <Compass size={28} />
                    </div>

                    {/* Suas pastas */}
                    <div className='w-48 p-2'>
                        <LayoutPanelLeft size={28} />
                    </div>

                    {/* Criar */}
                    <div className='w-48 p-2'>
                        <SquarePlus size={28} />
                    </div>

                    {/* Notificações */}
                    <div className='w-48 p-2'>
                        <Bell size={28} />
                    </div>

                    {/* Notificações */}
                    <div className='w-48 p-2'>
                        <MessageCircleMore size={28} />
                    </div>
                </div>

                <div className='w-fit p-2 hover:bg-gray-200'>
                    <Cog size={28} />
                </div>
            </div>
        </>
    )
}

export default Nav