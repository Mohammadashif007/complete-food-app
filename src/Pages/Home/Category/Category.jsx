import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";

const Category = () => {
    return (
        <div className="my-10">
            <SectionTitle
                heading={"ORDER ONLINE"}
                subHeading={"From 11:00am to 10:00pm"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={2}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt="category food" />
                    <p className="text-white text-center text-3xl  uppercase -mt-12">
                        Salad
                    </p>
                </SwiperSlide>
                <SwiperSlide className="text-center">
                    <img src={img2} alt="category food" />
                    <p className="text-white text-center text-3xl  uppercase -mt-12">
                        Pizza
                    </p>
                </SwiperSlide>
                <SwiperSlide className="text-center">
                    <img src={img3} alt="category food" />
                    <p className="text-white text-center text-3xl  uppercase -mt-12">
                        soup
                    </p>
                </SwiperSlide>
                <SwiperSlide className="text-center">
                    <img src={img4} alt="category food" />
                    <p className="text-white text-center text-3xl  uppercase -mt-12">
                        desserts
                    </p>
                </SwiperSlide>
                <SwiperSlide className="text-center">
                    <img src={img5} alt="category food" />
                    <p className="text-white text-center text-3xl  uppercase -mt-12">
                        salad
                    </p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;
