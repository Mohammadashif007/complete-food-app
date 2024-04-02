import Cover from "../../components/Cover/Cover";
import menuCover from "../../assets/menu/banner3.jpg";
import { useEffect, useState } from "react";
import MenuItem from "../Shared/MenuItem/MenuItem";
import Menu_item_category from "./Menu_item_category";

const Our_menu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => setMenu(data))
    },[])


    const desserts = menu.filter(x => x.category === 'dessert')
    console.log(desserts);

    return (
        <div>
            <Cover coverImg={menuCover} coverTitle={"OUR MENU"} coverDescription={"Would you like to try a dish?"}></Cover>
            <Menu_item_category menu={desserts}></Menu_item_category>
        </div>
    );
};

export default Our_menu;
