import Link from 'next/link';
import React from 'react';

const ProductCard = ({ id, image, title, category, price, discountPercentage }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 text-center" >
            <Link href={`/details/${id}`}>
                <img className='w-[100px] place-content-center' src={image} alt={title} />
                <h3 className='font-bold'>{title}</h3>
                <p className='font-bold text-[#555]'>{category}</p>
                <p className='font-bold text-[#555]'>$ {price}</p>
                <div className='grid grid-cols-1'>
                    <p className='font-bold text-[#008800]'>$  {Math.round((parseInt(price) * parseFloat(discountPercentage)) / 100)}</p>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;