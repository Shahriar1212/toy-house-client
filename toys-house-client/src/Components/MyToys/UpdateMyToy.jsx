import React from 'react';
import { Navigate, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateMyToy = () => {

    const toy = useLoaderData();
    
    const { _id, available_quantity ,toy_description, price  } = toy; 

    const handleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = parseFloat(form.price.value);
        const available_quantity = parseInt(form.quantity.value);
        const toy_description = form.description.value;

        const updatedToy = { price, available_quantity, toy_description}
        

        console.log(updatedToy);

        fetch(`https://toy-house-server-cyan.vercel.app/toy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Toy Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
            Navigate('/mytoys', { replace: true });
        })
    }

    return (
        <div>
            <form onSubmit={handleAddToy} className="lg:w-1/2 mx-auto bg-white p-4 shadow-md">
                <h2 className="text-2xl font-bold mb-6">Update Toy</h2>

                <div className="mb-4 w-full">
                    <label htmlFor="quantity" className="block font-medium mb-2">Available Quantity</label>
                    <input type="number" id="quantity" name="quantity" defaultValue={available_quantity} className="w-full px-4 py-1 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
                </div>


                <div className="mb-4 w-full">
                    <label htmlFor="price" className="block font-medium mb-2">Price</label>
                    <input type="text" id="price" name="price" defaultValue={price} className="w-full px-4 py-1 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="description" className="block font-medium mb-2">Description</label>
                    <textarea id="description" name="description" defaultValue={toy_description} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required></textarea>
                </div>

                <button type="submit" className="w-full btn btn-success py-2">Update</button>
            </form>

        </div>
    );
};

export default UpdateMyToy;