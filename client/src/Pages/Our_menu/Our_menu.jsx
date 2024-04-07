import Cover from "../../components/Cover/Cover";
import menuCover from "../../assets/menu/banner3.jpg";
import Menu_item_category from "./Menu_item_category";
import dessertsImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";

import UseMenu from "../../hooks/useMenu";

const Our_menu = () => {

    const [menu] = UseMenu();


    // const [menu, setMenu] = useState([]);

    // useEffect(() => {
    //     fetch("menu.json")
    //         .then((res) => res.json())
    //         .then((data) => setMenu(data));
    // }, []);

    const desserts = menu.filter((x) => x.category === "dessert");
    const soup = menu.filter((x) => x.category === "soup");
    const pizza = menu.filter((x) => x.category === "pizza");
    const salad = menu.filter((x) => x.category === "salad");
    const offered = menu.filter((x) => x.category === "offered");

    return (
        <div>
            <Cover
                coverImg={menuCover}
                coverTitle={"OUR MENU"}
                coverDescription={"Would you like to try a dish?"}
            ></Cover>

            <Menu_item_category
                menu={offered}
                sectionTitle={"Today's Offer"}
            ></Menu_item_category>
            <Menu_item_category
                menu={desserts}
                coverImage={dessertsImg}
                title={"desserts"}
            ></Menu_item_category>
            <Menu_item_category
                menu={pizza}
                coverImage={pizzaImg}
                title={"pizza"}
            ></Menu_item_category>
            <Menu_item_category
                menu={salad}
                coverImage={saladImg}
                title={"salad"}
            ></Menu_item_category>
            {/* <Cover
                coverImg={saladImg}
                coverTitle={"Salad"}
                coverDescription={
                    "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }
            ></Cover> */}
            <Menu_item_category
                menu={soup}
                coverImage={soupImg}
                title={"soup"}
            ></Menu_item_category>
        </div>
    );
};

export default Our_menu;
