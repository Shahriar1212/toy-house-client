import React from 'react';

import img1 from '../../assets/images/bumble-bee.jpg'
import { Link, useLoaderData } from 'react-router-dom';
import AllToysRow from './AllToysRow';

const AllToys = () => {

    const toys = useLoaderData();
    console.log(toys);

    const { _id, img, name,available_quantity, seller_email, seller_name,toy_description, price, rating } = toys;

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Toy Name / Seller Name</th>
                        <th>Category / Price</th>
                        <th>Available Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        toys.map(toy => <AllToysRow key={_id} toy={toy}></AllToysRow>)
                    }
                    
                </tbody>
                

            </table>
        </div>
    );
};

export default AllToys;