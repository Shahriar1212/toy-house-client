
const AddToy = () => {
    return (
        <div>
            <form className="w-1/2 mx-auto bg-white p-8 shadow-md">
                <h2 className="text-2xl font-bold mb-6">Add A Toy</h2>

                <div className="mb-6">
                    <label htmlFor="name" className="block font-medium mb-2">Name</label>
                    <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="photoURL" className="block font-medium mb-2">Photo URL</label>
                    <input type="text" id="photoURL" name="photoURL" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="sellerName" className="block font-medium mb-2">Seller Name</label>
                    <input type="text" id="sellerName" name="sellerName" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="sellerEmail" className="block font-medium mb-2">Seller Email</label>
                    <input type="email" id="sellerEmail" name="sellerEmail" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
                </div>


                <div className="w-full lg:flex">
                    <div className="mb-6 w-1/2">
                        <label htmlFor="subCategory" className="block font-medium mb-2">Sub-Category</label>
                        <input type="text" id="subCategory" name="subCategory" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
                    </div>
                    <div className="mb-6 w-1/2">
                        <label htmlFor="quantity" className="block font-medium mb-2">Available Quantity</label>
                        <input type="number" id="quantity" name="quantity" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
                    </div>
                </div>


                <div className="w-full flex justify-between">
                    <div className="mb-6 w-1/2">
                        <label htmlFor="price" className="block font-medium mb-2">Price</label>
                        <input type="number" id="price" name="price" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
                    </div>

                    <div className="mb-6 w-1/2">
                        <label htmlFor="rating" className="block font-medium mb-2">Rating</label>
                        <input type="number" id="rating" name="rating" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
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