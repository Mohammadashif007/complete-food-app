import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

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
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5 my-10">
                {menu.map((item) => (
                    <MenuItem key={item._id} item={item}></MenuItem>
                ))}
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
