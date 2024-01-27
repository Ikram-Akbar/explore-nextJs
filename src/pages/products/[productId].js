import React from 'react';
import { useRouter } from 'next/router'
const Product = () => {
    const router = useRouter();
    return (
        <div>
           <h5>It is a dynamic page for Product : {router.query.productId} </h5> 
        </div>
    );
};

export default Product;