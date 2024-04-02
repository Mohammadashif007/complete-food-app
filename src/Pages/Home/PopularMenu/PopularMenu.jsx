import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Menu_item_category from "../../Our_menu/Menu_item_category";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch("menu.json")
            .then((res) => res.json())
            .then((data) => {
                const popularMenu = data.filter(
                    (x) => x.category === "popular"
                );
                setMenu(popularMenu);
            });
    }, []);

    return (
        <section className="my-10">
            <SectionTitle
                heading="FROM OUR MENU"
                subHeading="Check it out"
            ></SectionTitle>
            <div className="">
                <Menu_item_category menu={menu}></Menu_item_category>
            </div>

            <div className="text-center">
                <button className="px-6 py-1 border-b-4 border-black rounded-xl">
                    View Full Menu
                </button>
            </div>
        </section>
    );
};

export default PopularMenu;
