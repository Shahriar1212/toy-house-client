import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const AddToy = () => {

    const {user} = useContext(AuthContext);

    const handleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.photoURL.value;
        const price = parseFloat(form.price.value);
        const rating = parseFloat(form.rating.value);
        const seller_name = form.sellerName.value;
        const seller_email = user?.email;
        const category = parseInt(form.category.value);
        const available_quantity = parseInt(form.quantity.value);
        const toy_description = form.description.value;

        const toy = {img, name, price, rating, category, available_quantity, seller_email, seller_name, toy_description}

        console.log(toy);

        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }


    return (
        <div>
            <form onSubmit={handleAddToy} className="lg:w-1/2 mx-auto bg-white p-4 shadow-md">
                <h2 className="text-2xl font-bold mb-6">Add A Toy</h2>

                <div className="mb-4">
                    <label htmlFor="name" className="block font-medium mb-2">Name</label>
                    <input type="text" id="name" name="name" className="w-full px-4 py-1 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="photoURL" className="block font-medium mb-2">Photo URL</label>
                    <input type="text" id="photoURL" name="photoURL" className="w-full px-4 py-1 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="sellerName" className="block font-medium mb-2">Seller Name</label>
                    <input type="text" id="sellerName" name="sellerName" className="w-full px-4 py-1 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="sellerEmail" className="block font-medium mb-2">Seller Email</label>
                    <input type="email" id="sellerEmail" defaultValue={user?.email} name="sellerEmail" className="w-full px-4 py-1 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
                </div>


                <div className="w-full lg:flex">
                    <div className="mb-4 w-1/2">
                        <label htmlFor="category" className="block font-medium mb-2">Sub-Category</label>
                        <input type="text" id="category" name="category" className="w-full px-4 py-1 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
                    </div>
                    <div className="mb-4 w-1/2">
                        <label htmlFor="quantity" className="block font-medium mb-2">Available Quantity</label>
                        <input type="number" id="quantity" name="quantity" className="w-full px-4 py-1 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
                    </div>
                </div>


                <div className="w-full flex justify-between">
                    <div className="mb-4 w-1/2">
                        <label htmlFor="price" className="block font-medium mb-2">Price</label>
                        <input type="text" id="price" name="price" className="w-full px-4 py-1 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
                    </div>

                    <div className="mb-4 w-1/2">
                        <label htmlFor="rating" className="block font-medium mb-2">Rating</label>
                        <input type="text" id="rating" name="rating" className="w-full px-4 py-1 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
                    </div>
                </div>





                <div className="mb-6">
                    <label htmlFor="description" className="block font-medium mb-2">Description</label>
                    <textarea id="description" name="description" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required></textarea>
                </div>

                <button type="submit" className="w-full btn btn-success py-2">Add Product</button>
            </form>

        </div>
    );
};

export default AddToy;