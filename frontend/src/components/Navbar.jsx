import React from 'react';
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
const Navbar = () => {
    const [menuBar, setMenuBar] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const ListMenu = [
        { id: 1, name: "Home" },
        { id: 2, name: "Item hot" },
        { id: 3, name: "Menus" },
        { id: 4, name: "Contact Us" },
    ]
    useEffect(() => {
        setMenuBar(ListMenu);
    }, [])
    return (
        <div className="rounded-2xl border border-white/20 m-2">
            <nav className='px-6 py-4 text-white'>
                <div className="container mx-auto flex justify-between items-center">
                    <div className="p-3 rounded-lg bg-amber-700">
                        <p className="text-xl italic">K-restaurant</p>
                    </div>
                    <ul className='text-lg hidden md:flex space-x-8 hover:cursor-pointer'>
                        {menuBar.map((x) => (
                            <li key={x.id}>{x.name}</li>
                        ))}
                    </ul>
                    <button onClick={() => setIsOpen(!isOpen)} className='flex md:hidden cursor-pointer'><Menu></Menu></button>
                </div>
                {isOpen && (
                    <div className="md:hidden space-y-4 mt-4 text-end">
                        {menuBar.map((y) => (
                            <a href="" className='block' key={y.id}>{y.name}</a>
                        ))}
                    </div>
                )}
            </nav>
        </div>
    );
}

export default Navbar;
