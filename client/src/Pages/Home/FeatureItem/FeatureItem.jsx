import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featureImg from "../../../assets/home/featured.jpg";
import "./FeatureItem.css";

const FeatureItem = () => {
    return (
        <div className="featureItem my-10 py-10 bg-fixed">
            <SectionTitle
                heading={"FROM OUR MENU"}
                subHeading={"Check it out"}
            ></SectionTitle>
            <div className="text-center lg:text-left lg: flex justify-center items-center w-4/5 mx-auto gap-8 text-white my-10">
                <img src={featureImg} className="w-1/2" alt="" />
                <div>
                    <h3 className="text-[20px]">March 20, 2023</h3>
                    <h2 className="text-[22px]"> WHERE CAN I GET SOME?</h2>
                    <p className="my-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error voluptate facere, deserunt dolores maiores quod
                        nobis quas quasi. Eaque repellat recusandae ad
                        laudantium tempore consequatur consequuntur omnis ullam
                        maxime tenetur.
                    </p>
                    <button className="px-6 py-1 border-b-4 border-black rounded-xl">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeatureItem;
