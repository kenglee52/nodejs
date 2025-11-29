import React from 'react';
import { useState, useEffect } from 'react';
import * as Menu from "../services/MenuService";
import Swal from "sweetalert2";
const Order = () => {
    const [OrderList, setOrderList] = useState([]);
    const [showMenu, setShowMenu] = useState([]);
    const fetchMenu = async () => {
        try {
            const data = await Menu.getAllMenus();
            setShowMenu(data);
        } catch (error) {
            console.log(error);
        }
    }
    const AddOrder = (items, qty) => {
        setOrderList([
            ...OrderList, {
                ...items,
                quantity: qty
            }
        ]);
        console.log(OrderList);
    }
    useEffect(() => {
        fetchMenu();
    }, [])
    return (
        <div className='relative h-full w-full'>
            <div className="absolute h-screen inset-0 z-0 bg-linear-to-t from-amber-900 via-amber-950 to-black"></div>
            <div className="relative z-10 h-screen flex flex-col">
                <nav className='m-3 py-5 px-8 rounded-xl border-2 bg-white/5 border-white/20 flex items-center justify-between'>
                    <p className='text-white text-lg'>Order date: 11/08/2025</p>
                    <button
                        onClick={() => {
                            Swal.fire({
                                width: "80%",
                                title: "B00001",
                                showConfirmButton: false,
                                showCloseButton: true,
                                html: `
        <div class="overflow-auto max-h-[70vh]">
            <table class="w-full border-collapse text-left">
                <thead>
                    <tr class="bg-amber-700 text-white">
                        <th class="p-2">Menu</th>
                        <th class="p-2">Price</th>
                        <th class="p-2">Qty</th>
                        <th class="p-2">Total</th>
                    </tr>
                </thead>
                <tbody>
                    ${OrderList.map(item => `
                        <tr class="border-b border-gray-300">
                            <td class="p-2">${item.menuName}</td>
                            <td class="p-2">${item.price}</td>
                            <td class="p-2">${item.quantity}</td>
                            <td class="p-2">${item.price * item.quantity}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `
                            });

                        }}
                        className='p-3 rounded-2xl bg-amber-700 cursor-pointer text-white hover:scale-95 transform transition duration-150 hover:bg-amber-800'>
                        My Cart
                    </button>
                </nav>
                <input type="text" placeholder='Search your foods here' className='border-2 rounded-xl border-white/25 text-white p-3 m-3' />
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mx-auto">
                    {showMenu.map((item) => (
                        <div className="p-2 flex flex-col" key={item.menuID}>
                            <button
                                onClick={() => {
                                    Swal.fire({
                                        title: "Input quantity",
                                        showConfirmButton: false,
                                        showCloseButton: true,
                                        html: `
                                     ,<div class="flex flex-col gap-3">
                                         <input type="number" id="qtyInput" class="text-lg focus:outline-none px-5 py-3 rounded-xl border-2 border-amber-700"></input>
                                         <button class="btn-Add px-5 py-3 text-white text-xl rounded-xl bg-amber-700 cursor-pointer hover:scale-95 transition transform duration-300 hover:bg-amber-800">
                                          Add your order
                                          </button>
                                     </div>
                                    `,
                                        didOpen: () => {

                                            const btn = document.querySelector(".btn-Add");
                                            btn.addEventListener("click", () => {
                                                const qty = document.getElementById("qtyInput").value;
                                                var quantity = parseInt(qty);
                                                AddOrder(item, quantity);
                                            })
                                        }
                                    });
                                }}
                                className="container p-3 border-white/25 bg-white/5 border-2 cursor-pointer rounded-lg hover:scale-95 transition transform duration-300 hover:border-amber-500">
                                <img src={item.image} alt="" className='object-cover h-28 w-36 mb-2' />
                                <p className='text-white text-center mb-2'>{item.menuName}</p>
                                <hr className='text-white mb-2' />
                                <p className='text-amber-500'>pric: {item.price}  <br />
                                    <span>unit: {item.unit.unitName}</span>
                                </p>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Order;

