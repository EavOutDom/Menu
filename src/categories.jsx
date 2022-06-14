import React, { useState } from "react";

const Categories = ({ selectCategory, categoriesList }) => {
    // console.log(categoriesList.length);
    const [value, setValue] = useState(0);
    return (
        <div className="my-4">
            {categoriesList.map((data, index) => {
                return (
                    <button key={index} onClick={() => {selectCategory(data); setValue(index)}}
                    className={`${index === value && 'underline bg-white ring-2 ring-white'}`}
                    >
                        {data}
                    </button>
                );
            })}
        </div>
    );
};

export default Categories;
