import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CarouselPropsType = {
    children: React.ReactNode;
    settings: Settings;
}

export const Carousel = (props: CarouselPropsType) => {
    return (
        <Slider {...props.settings}>
            {props.children}
        </Slider>
    )
}