import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../Providers/AuthProviders';
import MyToysRow from './MyToysRow';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';


const MyToys = () => {

    useTitle('My Toys');
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const url = `https://toy-house-server-cyan.vercel.app/mytoys/?email=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data));
    }, [url])

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-house-server-cyan.vercel.app/toys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(toy => toy._id !== _id);
                            setMyToys(remaining);
                        }
                    })
            }
        })
    }


    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Toy Name / Seller Name</th>
                        <th>Category / Price</th>
                        <th>Available Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myToys.map(toy => <MyToysRow key={toy._id} toy={toy} handleDelete={handleDelete}></MyToysRow>)
                    }

                </tbody>


            </table>
        </div>
    );
};

export default MyToys;