import React from "react";

const Menu = ({ category, desc, img, price, title }) => {
    return (
        <div className="my-4 bg-white md:w-[40rem] w-80 duration-500 mx-auto p-4 rounded-lg md:flex shadow-xl">
            <div className="w-4/5">
                <img
                    src={img}
                    alt={title}
                    className="md:h-52 h-32 w-44 md:w-[260px] duration-500 rounded-lg"
                />
            </div>
            <div className="mx-1 w-full">
                <div className="flex justify-between">
                    <div className="text-start">
                        <h2 className="font-bold">{title}</h2>
                        <p>{desc}</p>
                        <h4 className="bg-gray-400 table rounded-md p-1 text-xs text-white my-1">{category}</h4>
                    </div>
                    <h3 className="text-yellow-500">${price}</h3>
                </div>
            </div>
        </div>
    );
};

export default Menu;
