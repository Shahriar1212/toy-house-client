import Banner from "./Banner";
import PhotoGalary from "./PhotoGalary";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'react-tabs/style/react-tabs.css';
import ToyCard from "../ToyCard/ToyCard";
// or
// import 'react-tabs/style/react-tabs.scss';
// or
// import 'react-tabs/style/react-tabs.less';
const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <PhotoGalary></PhotoGalary>

            <Tabs>
                <TabList className="text-center border-none">
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                    <Tab>Title 3</Tab>
                </TabList>

                <TabPanel className="flex">
                    <div className="flex">
                        <ToyCard></ToyCard>
                        <ToyCard></ToyCard>
                    </div>
                </TabPanel>

                <TabPanel className="flex">
                    <ToyCard></ToyCard>
                </TabPanel>

                <TabPanel className="flex">
                    <ToyCard></ToyCard>
                </TabPanel>
            </Tabs>



        </div>
    );
};

export default Home;