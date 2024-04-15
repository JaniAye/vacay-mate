import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './style/home-banner.css'; 

class Home extends React.Component {
    render() {
        const params = {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                clickable: true,
            },
        };

        return (
            <section>
                <img className="hero" src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c62efd51-f844-4335-ba29-70ea35521dd8" alt="" />
                <Swiper {...params}>
                    <SwiperSlide>
                        <h1 className="title one">Edinburgh</h1>
                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/1bdebd02-d675-4469-be36-dc248448980d" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className="title two">Stockholm</h1>
                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/62411bbf-dde9-4654-9298-1fe3e7da2d64" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className="title three">Paris</h1>
                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/b49c729f-65b0-4a2a-baf7-1d9f180df0a6" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className="title four">Brugge</h1>
                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c9a61071-c74d-4e8b-966a-6948cdbd9665" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className="title five">Bavaria</h1>
                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/25ab6cb7-9251-4aa5-9993-32ebd8542616" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className="title six">Copenhagen</h1>
                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/365656bc-24bc-4d95-92da-7f34faa616cf" alt="" />
                    </SwiperSlide>
                </Swiper>
            </section>
        );
    }
}

export default Home;