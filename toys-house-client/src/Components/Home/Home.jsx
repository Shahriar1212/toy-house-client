import Banner from "./Banner";
import PhotoGalary from "./PhotoGalary";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'react-tabs/style/react-tabs.css';
import ToyCard from "../ToyCard/ToyCard";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const Home = () => {

    useTitle('Home');
    const toys = useLoaderData();
    console.log(toys);
    const category1Toys = (toys.filter(toy => toy.category === 1)).slice(0, 2);
    const category2Toys = toys.filter(toy => toy.category === 2).slice(0, 2);
    const category3Toys = toys.filter(toy => toy.category === 3).slice(0, 2);
    console.log(category1Toys);

    return (
        <div>

            <Banner></Banner>
            <PhotoGalary></PhotoGalary>

            <Tabs>
                <TabList className="text-center border-none">
                    <Tab>Avengers</Tab>
                    <Tab>Spider Man</Tab>
                    <Tab>Transformers</Tab>
                </TabList>

                <TabPanel className="lg:flex">
                    <div className="lg:flex">
                        {
                            category1Toys.map(toy => <ToyCard key={toy._id}
                                toy={toy}
                            ></ToyCard>)
                        }
                    </div>
                </TabPanel>

                <TabPanel className="lg:flex">
                    <div className="lg:flex">
                        {
                            category2Toys.map(toy => <ToyCard key={toy._id}
                                toy={toy}
                            ></ToyCard>)
                        }
                    </div>
                </TabPanel>

                <TabPanel className="lg:flex">
                    <div className="lg:flex">
                        {
                            category3Toys.map(toy => <ToyCard key={toy._id}
                                toy={toy}
                            ></ToyCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>



        </div>
    );
};

export default Home;