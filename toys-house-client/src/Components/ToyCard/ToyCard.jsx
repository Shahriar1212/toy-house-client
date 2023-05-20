import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import img1 from '../../assets/images/spiderman1.jpg'

const ToyCard = () => {
    return (
            <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <img className="object-cover" src={img1} alt="product image" />
                {/* <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span> */}
                <div className="mt-4 px-5 pb-5">

                    <h5 className="text-xl tracking-tight text-slate-900">Nike Air MX Super 2500 - Red</h5>

                    <div className="mt-2 mb-5 flex items-center justify-between">
                        <p>
                            <span className="text-3xl font-bold text-slate-900">$449</span>
                        </p>
                        <div className="flex items-center">

                            <Rating
                                placeholderRating="4"
                                readonly
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar className='fill-lime-500'></FaStar>}
                                fullSymbol={<FaStar></FaStar>} />
                            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">4.0</span>
                        </div>
                    </div>

                    <button className='btn w-full px-5 py-2.5 bg-slate-900 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300'>View Details</button>
                </div>
            </div>
    );
};

export default ToyCard;