import React from 'react';
import { ReactTyped } from "react-typed";
import { useState, useEffect } from 'react';
import * as Menu from "../services/MenuService";
const Content = () => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const dataList = await Menu.getAllMenus();
        setData(dataList);
        console.log(dataList);
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className='relative inset-0 flex flex-col h-screen items-center justify-center gap-5'>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/048/090/965/small/fajita-food-isolated-on-transparent-background-free-png.png"
                className='lg:w-80 md:w-72 w-52 animate-spin' style={{ animationDuration: "10s" }}
                alt="" />
            <h1 className='text-white text-2xl md:text-4xl lg:text-5xl'>
                <ReactTyped
                    strings={["Welcome to our restaurant", "Find your favourite food here"]}
                    typeSpeed={60}
                    backSpeed={30}
                    loop
                />
            </h1>
            <button className='py-2 px-3 rounded-xl text-lg font-bold text-white bg-amber-700 hover:bg-amber-800 hover:scale-95 transform transition duration-300 cursor-pointer'>
                Order Now
            </button>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5">
                {data.map((menu)=>(
                    <div className="p-5 rounded-xl bg-white/5 border border-white/25" key={menu.menuID}>
                        <div className="flex flex-col">
                            <img src={menu.image} className='w-42 h-42 object-fill rounded-xl' alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Content;
