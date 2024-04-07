import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import orderCoverImg from "../../assets/shop/order.jpg";
import Cover from "../../components/Cover/Cover";
import { useState } from "react";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../../hooks/useMenu";

import FoodItem from "./OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
    const categories = ['salad', 'pizza', 'soups', 'desserts', 'drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [menu] = UseMenu();
    const desserts = menu.filter((x) => x.category === "dessert");
    const soup = menu.filter((x) => x.category === "soup");
    const pizza = menu.filter((x) => x.category === "pizza");
    const salad = menu.filter((x) => x.category === "salad");
    const drinks = menu.filter((x) => x.category === "drinks");

    return (
        <div>
            <Cover coverImg={orderCoverImg} coverTitle={"OUR SHOP"}></Cover>
            <Tabs
                selectedIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}
            >
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <FoodItem item={salad}></FoodItem>
                </TabPanel>
                <TabPanel>
                    <FoodItem item={pizza}></FoodItem>
                </TabPanel>
                <TabPanel>
                    <FoodItem item={soup}></FoodItem>
                </TabPanel>
                <TabPanel>
                    <FoodItem item={desserts}></FoodItem>
                </TabPanel>
                <TabPanel>
                    <FoodItem item={drinks}></FoodItem>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;
