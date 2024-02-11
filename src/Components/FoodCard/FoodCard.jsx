import React from 'react';

const FoodCard = ({item}) => {
    const {image,price,name,recipe}=item;
    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} /></figure>
            <p className= 'right-0 mt-4 mr-4 px-4 text-white absolute bg-slate-900'>${price}</p>
            <div className="card-body text-center flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline bg-slate-200 border-0 border-b-4 mt-4">Add to card</button>
                </div>
            </div>
        </div>

    );
};

export default FoodCard;