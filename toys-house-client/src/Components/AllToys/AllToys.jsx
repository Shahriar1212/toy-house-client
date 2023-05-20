import React from 'react';

import img1 from '../../assets/images/bumble-bee.jpg'
import { Link } from 'react-router-dom';

const AllToys = () => {
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
                    {/* row 1 */}
                    <tr>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={img1} />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Bumble Bee</div>
                                    <div className="text-sm opacity-50">Moin</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Transformers Toy
                            <br />
                            <span className="badge badge-ghost badge-sm">$ 5.99</span>
                        </td>
                        <td>34</td>
                        <th>
                            <Link to="/toydetails" className="btn btn-ghost btn-xs">view details</Link>
                        </th>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={img1} />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Bumble Bee</div>
                                    <div className="text-sm opacity-50">Moin</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Transformers Toy
                            <br />
                            <span className="badge badge-ghost badge-sm">$ 5.99</span>
                        </td>
                        <td>34</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={img1} />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Bumble Bee</div>
                                    <div className="text-sm opacity-50">Moin</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Transformers Toy
                            <br />
                            <span className="badge badge-ghost badge-sm">$ 5.99</span>
                        </td>
                        <td>34</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                    {/* row 4 */}
                    <tr>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={img1} />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Bumble Bee</div>
                                    <div className="text-sm opacity-50">Moin</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Transformers Toy
                            <br />
                            <span className="badge badge-ghost badge-sm">$ 5.99</span>
                        </td>
                        <td>34</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                </tbody>
                

            </table>
        </div>
    );
};

export default AllToys;