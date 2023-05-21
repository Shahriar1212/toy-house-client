import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const AllToysRow = (props) => {
    useTitle('All Toys')

    const { _id, img, name,available_quantity, seller_email,category_name,  seller_name,toy_description, price, rating } = props.toy;
    return (
        
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img} />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                            <div className="text-sm opacity-50">{seller_name}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {category_name ? category_name : "not found"}
                    <br />
                    <span className="badge badge-ghost badge-sm">$ {price}</span>
                </td>
                <td>{available_quantity}</td>
                <th>
                    <Link to={`/toys/${_id}`} className="btn btn-ghost btn-xs">view details</Link>
                </th>
            </tr>
    );
};

export default AllToysRow;