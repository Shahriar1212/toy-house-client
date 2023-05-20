
import img1 from '../../assets/images/spiderman1.jpg'
import img2 from '../../assets/images/bumble-bee.jpg'
import img3 from '../../assets/images/transformer4.jpg'
import img4 from '../../assets/images/op-prime.jpg'
import img5 from '../../assets/images/thanos.jpg'
import img6 from '../../assets/images/captain2.jpeg'


const PhotoGalary = () => {
    return (
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 mb-24">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex lg:w-1/2 flex-wrap">
                        <div className="w-1/2 h-[200px] p-1 md:p-2 relative">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-scale-down object-center"
                                src={img1} />
                                <div className="rounded-lg absolute inset-0 bg-gradient-to-b from-transparent to-[#181828] opacity-10"></div>
                        </div>
                        <div className="w-1/2 h-[200px] p-1 md:p-2 relative">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-scale-down object-center"
                                src={img2} />
                                <div className="rounded-lg absolute inset-0 bg-gradient-to-b from-transparent to-[#590404] opacity-10"></div>
                        </div>
                        <div className="w-full h-[400px] p-1 md:p-2 relative">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-scale-down object-center"
                                src={img3} />
                                <div className="rounded-lg absolute inset-0 bg-gradient-to-b from-transparent to-[#590404] opacity-10"></div>
                        </div>
                    </div>
                    <div className="flex lg:w-1/2 flex-wrap">
                        <div className="w-full h-[400px] p-1 md:p-2 relative">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-scale-down object-center"
                                src={img4} />
                                <div className="rounded-lg absolute inset-0 bg-gradient-to-b from-transparent to-[#141414] opacity-10"></div>
                        </div>
                        <div className="w-1/2 h-[200px] p-1 md:p-2 relative">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-scale-down object-center"
                                src={img5} />
                                <div className="rounded-lg absolute inset-0 bg-gradient-to-b from-transparent to-[#0c0c0c] opacity-10"></div>
                        </div>
                        <div className="w-1/2 h-[200px] p-1 md:p-2 relative">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-scale-down object-center"
                                src={img6} />
                                <div className="rounded-lg absolute inset-0 bg-gradient-to-b from-transparent to-[#590404] opacity-10"></div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default PhotoGalary;