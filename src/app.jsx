import React, { useState } from "react";
import Categories from "./categories";
import Menu from "./menu";
import data from "./data";

const categoriesList = ["all", ...new Set(data.map((item) => item.category))];
const App = () => {
    const [menuItem, setMenuItem] = useState(data);
    const [categories, setCategories] = useState(categoriesList);
    // console.log(categories);
    const selectCategory = (categories) => {
        if (categories === "all") {
            setMenuItem(data);
            console.log(menuItem);
            return;
        }
        const select = data.filter((data) => data.category === categories);
        setMenuItem(select);
    };

    return (
        <div className="text-center my-5">
            <h1 className="font-bold text-xl md:text-3xl duration-500">Menu</h1>
            <div className="bg-white h-1 md:w-20 w-16 mx-auto"></div>
            <Categories
                selectCategory={selectCategory}
                categoriesList={categoriesList}
            />
            <div>
                {menuItem.map((items) => {
                    return (
                        <Menu
                            key={items.id}
                            category={items.category}
                            desc={items.desc}
                            img={items.img}
                            price={items.price}
                            title={items.title}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default App;
