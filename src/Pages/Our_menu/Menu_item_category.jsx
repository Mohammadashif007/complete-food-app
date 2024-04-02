import Cover from "../../components/Cover/Cover";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";

const Menu_item_category = ({ menu, coverImage, coverTitle, sectionTitle }) => {
    return (
        <div>
            {sectionTitle ? (
                <SectionTitle
                    heading={sectionTitle}
                    subHeading={"Don't Miss"}
                ></SectionTitle>
            ) : (
                <Cover
                    coverImg={coverImage}
                    coverTitle={coverTitle}
                    coverDescription={
                        "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    }
                ></Cover>
            )}

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5 my-20">
                {menu.map((x) => (
                    <MenuItem key={x._id} item={x}></MenuItem>
                ))}
            </div>
            <div className="text-center my-10">
                <button className="px-6 py-1 border-b-4 border-black rounded-xl">
                    ORDER YOUR FAVORITE FOOD
                </button>
            </div>
        </div>
    );
};

export default Menu_item_category;
