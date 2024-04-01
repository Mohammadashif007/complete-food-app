import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeatureItem from "../FeatureItem/FeatureItem";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <FeatureItem></FeatureItem>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
