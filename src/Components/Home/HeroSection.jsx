import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSection = () => {
    return (
        <section className="relative mt-3 w-full h-full overflow-hidden">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[75vh]"
            >
                <SwiperSlide>
                    <img
                        className="w-full h-full object-cover"
                        src="https://www.gardenersdream.co.uk/cdn/shop/articles/Snake_Plant_1_f6204179-d92b-40e3-bec7-0d3a61e93b81.jpg?v=1744013002"
                        alt="Snake Plant"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">
                        <h1 className="text-4xl md:text-6xl font-bold">Green Your Space</h1>
                        <p className="mt-4 text-lg md:text-xl">
                            Discover nature’s beauty at your home.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full h-full object-cover"
                        src="https://prickleplants.co.uk/cdn/shop/products/b95a32ed-5207-4a85-ad06-2f06b67cd046.jpg?v=1661164123"
                        alt="Aloe Vera"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">
                        <h1 className="text-4xl md:text-6xl font-bold">Fresh & Natural</h1>
                        <p className="mt-4 text-lg md:text-xl">
                            Bring positive vibes with indoor plants.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full h-full object-cover"
                        src="https://m.media-amazon.com/images/I/71vDeWZkH8L._AC_UF350,350_QL80_.jpg"
                        alt="Peace Lily"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">
                        <h1 className="text-4xl md:text-6xl font-bold">Bring Life Indoors</h1>
                        <p className="mt-4 text-lg md:text-xl">
                            The best plants for your home & soul.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full h-full object-cover"
                        src="https://www.thesill.com/cdn/shop/files/the-sill_ficus_elastica_upcycled-planter_small_cream_1.jpg?v=1753648341&width=1946"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">
                        <h1 className="text-4xl md:text-6xl font-bold">Breathe Fresh Air</h1>
                        <p className="mt-4 text-lg md:text-xl">
                            Transform your home into a green paradise.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full h-full object-cover"
                        src="https://www.thetutuguru.com.au/wp-content/uploads/2024/04/Chlorophytum-comosum-Spider-Plant-potted.jpg"
                        alt="Indoor Green"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">
                        <h1 className="text-4xl md:text-6xl font-bold">Feel the Nature</h1>
                        <p className="mt-4 text-lg md:text-xl">
                            Add freshness & peace to your daily life.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default HeroSection;
