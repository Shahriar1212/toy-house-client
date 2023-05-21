import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import img1 from '../../assets/images/spiderman1.jpg'
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";


const ToyDetails = () => {

    useTitle('Toy Details')
    const toy = useLoaderData();
    
    const { _id, img, name,available_quantity, seller_email, seller_name,toy_description, price, rating } = toy;

    return (
        <div>
            <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2 w-full h-[400px] object-scale-down object-center rounded border border-gray-200" src={img} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{name}</h1>


                            <div className="flex items-center">

                                <Rating
                                    placeholderRating={rating}
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='fill-lime-500'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>} />
                                <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 tex=t-xs font-semibold">{rating}</span>
                            </div>
                            <p className="badge badge-ghost badge-sm mb-3 mt-2 p-3">{seller_name}</p>
                            <br />
                            <p className="badge badge-ghost badge-sm mb-3 p-3">{seller_email}</p>



                            <p className="leading-relaxed">{toy_description}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">

                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Quantity</span>
                                    <div className="relative">
                                        <div className="flex items-center">
                                            <input type="number" id="quantity" value={available_quantity} name="quantity" className="w-16 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                                        </div>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">${price}</span>
                                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Add to Cart</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ToyDetails;