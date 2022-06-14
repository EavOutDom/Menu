import React from "react";

const Categories = ({ selectCategory, categoriesList }) => {
    // console.log(categoriesList.length);
    return (
        <div className="my-4">
            {categoriesList.map((data, index) => {
                return (
                    <button key={index} onClick={() => selectCategory(data)}>
                        {data}
                    </button>
                );
            })}
        </div>
    );
};

export default Categories;
